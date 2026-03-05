import fs from "node:fs/promises"
import path from "node:path"
import { pathToFileURL } from "node:url"

const worldRoot = process.cwd()
const epressRoot = path.resolve(worldRoot, "../epress")
const outputDir = path.join(worldRoot, "src/content/developer")

const methodRank = { GET: 0, POST: 1, PATCH: 2, DELETE: 3 }

async function readFileSafe(filePath) {
  return fs.readFile(filePath, "utf8")
}

async function ensureEpressRoot() {
  await fs.access(epressRoot)
}

function collectFileErrors(content) {
  const errorSet = new Set()
  const errorRegex = /reply\.code\((\d+)\)\.send\(\{\s*error:\s*"([^"]+)"/g
  let match
  while ((match = errorRegex.exec(content)) !== null) {
    errorSet.add(`${match[1]} ${match[2]}`)
  }
  return Array.from(errorSet)
}

function sortEndpoints(items) {
  return items.sort((a, b) => {
    if (a.path === b.path) {
      return (methodRank[a.method] ?? 99) - (methodRank[b.method] ?? 99)
    }
    return a.path.localeCompare(b.path)
  })
}

async function extractRoutes(dirPath, prefix, metadataMap) {
  const files = (await fs.readdir(dirPath)).filter((file) =>
    file.endsWith(".mjs"),
  )
  const routes = []

  for (const file of files) {
    const absolutePath = path.join(dirPath, file)
    const relativePath = path
      .relative(epressRoot, absolutePath)
      .replaceAll("\\", "/")
    const content = await readFileSafe(absolutePath)
    const routeRegex =
      /router\.(get|post|patch|delete)\(\s*["'`]([^"'`]+)["'`]/g
    const fileErrors = collectFileErrors(content)
    let match

    while ((match = routeRegex.exec(content)) !== null) {
      const method = match[1].toUpperCase()
      const routePath = `${prefix}${match[2]}`
      const key = `${method} ${routePath}`
      const metadata = metadataMap[key] || {}

      routes.push({
        method,
        path: routePath,
        stability: metadata.stability || "Internal/Operational",
        auth: metadata.auth || "Operation dependent",
        summary: metadata.summary || "Generated from route definition.",
        source: relativePath,
        errorCodes: metadata.errorCodes || fileErrors,
      })
    }
  }

  return sortEndpoints(routes)
}

function extractObjectKeys(content, kind) {
  const objects = []
  const objectRegex = /(?:export\s+)?const\s+([A-Za-z0-9_]+)\s*=\s*\{/g
  let match

  while ((match = objectRegex.exec(content)) !== null) {
    const objectName = match[1]
    const isQueryObject = kind === "QUERY" && objectName.endsWith("Query")
    const isMutationObject =
      kind === "MUTATION" &&
      (objectName.endsWith("Mutations") || objectName.endsWith("Mutation"))

    if (!isQueryObject && !isMutationObject) {
      continue
    }

    let depth = 1
    let i = objectRegex.lastIndex
    while (i < content.length && depth > 0) {
      const ch = content[i]
      if (ch === "{") depth += 1
      if (ch === "}") depth -= 1
      i += 1
    }

    const objectBody = content.slice(objectRegex.lastIndex, i - 1)
    const lines = objectBody.split("\n")
    let lineDepth = 1
    const keys = []

    for (const line of lines) {
      if (lineDepth === 1) {
        const keyMatch = line.match(/^\s{2}([A-Za-z_][A-Za-z0-9_]*)\s*:/)
        if (keyMatch) {
          keys.push(keyMatch[1])
        }
      }
      const opens = (line.match(/\{/g) || []).length
      const closes = (line.match(/\}/g) || []).length
      lineDepth += opens - closes
    }

    objects.push({ objectName, keys })
  }

  return objects
}

async function extractGraphqlOperations(graphqlRoot) {
  const queriesDir = path.join(graphqlRoot, "queries")
  const mutationsDir = path.join(graphqlRoot, "mutations")

  const queryFiles = (await fs.readdir(queriesDir)).filter(
    (file) => file.endsWith(".mjs") && file !== "index.mjs",
  )
  const mutationFiles = (await fs.readdir(mutationsDir)).filter(
    (file) => file.endsWith(".mjs") && file !== "index.mjs",
  )

  const queryMeta = {
    profile: { auth: "None", summary: "Fetch self profile metadata." },
    settings: {
      auth: "Optional JWT",
      summary: "Fetch node settings with auth-aware sensitive fields.",
    },
    fetch: {
      auth: "Permission aware",
      summary: "Generic fetch for NODE, PUBLICATION, COMMENT models.",
    },
    search: {
      auth: "Permission aware",
      summary: "Search nodes, publications, and comments.",
    },
    getSiweMessage: {
      auth: "None",
      summary: "Generate SIWE challenge with nonce JWT.",
    },
    visitor: {
      auth: "None",
      summary: "Resolve relationship between self node and visitor node.",
    },
    nodeStatus: {
      auth: "None",
      summary: "Fetch node version and uptime start time.",
    },
    suggestions: {
      auth: "None",
      summary: "Get mention and hashtag suggestions.",
    },
  }

  const mutationMeta = {
    signInWithEthereum: {
      auth: "SIWE signature",
      summary: "Authenticate owner and issue JWT.",
    },
    generateIntegrationToken: {
      auth: "Owner JWT",
      summary: "Create scoped integration token.",
    },
    updateProfile: {
      auth: "Owner JWT",
      summary: "Update node profile metadata and assets.",
    },
    broadcastProfileUpdate: {
      auth: "Owner JWT + signature",
      summary: "Broadcast profile update over EWP.",
    },
    updateSettings: {
      auth: "Owner JWT",
      summary: "Update node settings transactionally.",
    },
    subscribeNotification: {
      auth: "Owner JWT",
      summary: "Store web push subscription.",
    },
    unsubscribeNotification: {
      auth: "Owner JWT",
      summary: "Remove web push subscription.",
    },
    createPublication: {
      auth: "Owner JWT + permission",
      summary: "Create publication record and content.",
    },
    updatePublication: {
      auth: "Owner JWT + permission",
      summary: "Update publication metadata.",
    },
    destroyPublication: {
      auth: "Owner JWT + permission",
      summary: "Delete publication.",
    },
    signPublication: {
      auth: "Owner JWT + signature",
      summary: "Sign publication and trigger replication.",
    },
    createConnection: {
      auth: "Owner JWT",
      summary: "Follow another node and establish connection.",
    },
    destroyConnection: {
      auth: "Owner JWT",
      summary: "Unfollow node and remove connection.",
    },
    createComment: {
      auth: "Public",
      summary: "Create pending comment with EMAIL or ETHEREUM flow.",
    },
    confirmComment: {
      auth: "Public token/signature flow",
      summary: "Confirm pending comment.",
    },
    destroyComment: {
      auth: "Owner or commenter flow",
      summary: "Request comment deletion.",
    },
    confirmCommentDeletion: {
      auth: "Public token flow",
      summary: "Confirm deletion for email-auth comment.",
    },
  }

  const records = []

  for (const file of queryFiles) {
    const absolutePath = path.join(queriesDir, file)
    const relativePath = path
      .relative(epressRoot, absolutePath)
      .replaceAll("\\", "/")
    const content = await readFileSafe(absolutePath)
    const objects = extractObjectKeys(content, "QUERY")

    for (const object of objects) {
      for (const key of object.keys) {
        if (key === "fields") continue
        const meta = queryMeta[key] || {
          auth: "Operation dependent",
          summary: "Generated from query module.",
        }
        records.push({
          operationType: "QUERY",
          name: key,
          stability: "Public/App",
          auth: meta.auth,
          summary: meta.summary,
          source: relativePath,
        })
      }
    }
  }

  for (const file of mutationFiles) {
    const absolutePath = path.join(mutationsDir, file)
    const relativePath = path
      .relative(epressRoot, absolutePath)
      .replaceAll("\\", "/")
    const content = await readFileSafe(absolutePath)
    const objects = extractObjectKeys(content, "MUTATION")

    for (const object of objects) {
      for (const key of object.keys) {
        if (key === "fields") continue
        const meta = mutationMeta[key] || {
          auth: "Operation dependent",
          summary: "Generated from mutation module.",
        }
        records.push({
          operationType: "MUTATION",
          name: key,
          stability: "Public/App",
          auth: meta.auth,
          summary: meta.summary,
          source: relativePath,
        })
      }
    }
  }

  const uniq = new Map()
  for (const item of records) {
    uniq.set(`${item.operationType}-${item.name}`, item)
  }

  return Array.from(uniq.values()).sort((a, b) => {
    if (a.operationType === b.operationType) return a.name.localeCompare(b.name)
    return a.operationType.localeCompare(b.operationType)
  })
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function stripQuotes(value) {
  const trimmed = value.trim()
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1)
  }
  return trimmed
}

function isWordChar(ch) {
  return /[A-Za-z0-9_$]/.test(ch)
}

function findMatchingPair(text, startIndex, openChar, closeChar) {
  if (startIndex < 0 || text[startIndex] !== openChar) return -1
  let depth = 1
  let inSingle = false
  let inDouble = false
  let inTemplate = false
  let inLineComment = false
  let inBlockComment = false

  for (let i = startIndex + 1; i < text.length; i += 1) {
    const ch = text[i]
    const prev = text[i - 1]
    const next = text[i + 1]

    if (inLineComment) {
      if (ch === "\n") inLineComment = false
      continue
    }

    if (inBlockComment) {
      if (prev === "*" && ch === "/") inBlockComment = false
      continue
    }

    if (inSingle) {
      if (ch === "'" && prev !== "\\") inSingle = false
      continue
    }

    if (inDouble) {
      if (ch === '"' && prev !== "\\") inDouble = false
      continue
    }

    if (inTemplate) {
      if (ch === "`" && prev !== "\\") inTemplate = false
      continue
    }

    if (ch === "/" && next === "/") {
      inLineComment = true
      i += 1
      continue
    }

    if (ch === "/" && next === "*") {
      inBlockComment = true
      i += 1
      continue
    }

    if (ch === "'") {
      inSingle = true
      continue
    }

    if (ch === '"') {
      inDouble = true
      continue
    }

    if (ch === "`") {
      inTemplate = true
      continue
    }

    if (ch === openChar) depth += 1
    if (ch === closeChar) {
      depth -= 1
      if (depth === 0) return i
    }
  }

  return -1
}

function splitTopLevel(input, delimiter = ",") {
  const parts = []
  let start = 0
  let depthParen = 0
  let depthBrace = 0
  let depthBracket = 0
  let inSingle = false
  let inDouble = false
  let inTemplate = false
  let inLineComment = false
  let inBlockComment = false

  for (let i = 0; i < input.length; i += 1) {
    const ch = input[i]
    const prev = input[i - 1]
    const next = input[i + 1]

    if (inLineComment) {
      if (ch === "\n") inLineComment = false
      continue
    }

    if (inBlockComment) {
      if (prev === "*" && ch === "/") inBlockComment = false
      continue
    }

    if (inSingle) {
      if (ch === "'" && prev !== "\\") inSingle = false
      continue
    }

    if (inDouble) {
      if (ch === '"' && prev !== "\\") inDouble = false
      continue
    }

    if (inTemplate) {
      if (ch === "`" && prev !== "\\") inTemplate = false
      continue
    }

    if (ch === "/" && next === "/") {
      inLineComment = true
      i += 1
      continue
    }

    if (ch === "/" && next === "*") {
      inBlockComment = true
      i += 1
      continue
    }

    if (ch === "'") {
      inSingle = true
      continue
    }

    if (ch === '"') {
      inDouble = true
      continue
    }

    if (ch === "`") {
      inTemplate = true
      continue
    }

    if (ch === "(") depthParen += 1
    if (ch === ")") depthParen -= 1
    if (ch === "{") depthBrace += 1
    if (ch === "}") depthBrace -= 1
    if (ch === "[") depthBracket += 1
    if (ch === "]") depthBracket -= 1

    if (
      ch === delimiter &&
      depthParen === 0 &&
      depthBrace === 0 &&
      depthBracket === 0
    ) {
      const part = input.slice(start, i).trim()
      if (part) parts.push(part)
      start = i + 1
    }
  }

  const tail = input.slice(start).trim()
  if (tail) parts.push(tail)
  return parts
}

function findTopLevelColon(segment) {
  let depthParen = 0
  let depthBrace = 0
  let depthBracket = 0
  let inSingle = false
  let inDouble = false
  let inTemplate = false
  let inLineComment = false
  let inBlockComment = false

  for (let i = 0; i < segment.length; i += 1) {
    const ch = segment[i]
    const prev = segment[i - 1]
    const next = segment[i + 1]

    if (inLineComment) {
      if (ch === "\n") inLineComment = false
      continue
    }

    if (inBlockComment) {
      if (prev === "*" && ch === "/") inBlockComment = false
      continue
    }

    if (inSingle) {
      if (ch === "'" && prev !== "\\") inSingle = false
      continue
    }

    if (inDouble) {
      if (ch === '"' && prev !== "\\") inDouble = false
      continue
    }

    if (inTemplate) {
      if (ch === "`" && prev !== "\\") inTemplate = false
      continue
    }

    if (ch === "/" && next === "/") {
      inLineComment = true
      i += 1
      continue
    }

    if (ch === "/" && next === "*") {
      inBlockComment = true
      i += 1
      continue
    }

    if (ch === "'") {
      inSingle = true
      continue
    }

    if (ch === '"') {
      inDouble = true
      continue
    }

    if (ch === "`") {
      inTemplate = true
      continue
    }

    if (ch === "(") depthParen += 1
    if (ch === ")") depthParen -= 1
    if (ch === "{") depthBrace += 1
    if (ch === "}") depthBrace -= 1
    if (ch === "[") depthBracket += 1
    if (ch === "]") depthBracket -= 1

    if (
      ch === ":" &&
      depthParen === 0 &&
      depthBrace === 0 &&
      depthBracket === 0
    ) {
      return i
    }
  }

  return -1
}

function normalizeObjectKey(rawKey) {
  const trimmed = rawKey.trim()
  if (!trimmed || trimmed.startsWith("...")) return null
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1)
  }
  const identifierMatch = trimmed.match(/^[A-Za-z_$][A-Za-z0-9_$]*$/)
  return identifierMatch ? trimmed : null
}

function parseTopLevelObjectEntries(objectLiteral) {
  const trimmed = objectLiteral.trim()
  if (!trimmed.startsWith("{") || !trimmed.endsWith("}")) return {}
  const body = trimmed.slice(1, -1)
  const segments = splitTopLevel(body, ",")
  const entries = {}

  for (const segment of segments) {
    if (!segment) continue
    let normalizedSegment = segment.trimStart()
    while (
      normalizedSegment.startsWith("//") ||
      normalizedSegment.startsWith("/*")
    ) {
      if (normalizedSegment.startsWith("//")) {
        const lineBreakIndex = normalizedSegment.indexOf("\n")
        if (lineBreakIndex === -1) {
          normalizedSegment = ""
          break
        }
        normalizedSegment = normalizedSegment
          .slice(lineBreakIndex + 1)
          .trimStart()
        continue
      }

      const blockEndIndex = normalizedSegment.indexOf("*/")
      if (blockEndIndex === -1) {
        normalizedSegment = ""
        break
      }
      normalizedSegment = normalizedSegment.slice(blockEndIndex + 2).trimStart()
    }

    if (!normalizedSegment || normalizedSegment.startsWith("...")) continue
    const colonIndex = findTopLevelColon(normalizedSegment)
    if (colonIndex === -1) continue
    const rawKey = normalizedSegment.slice(0, colonIndex)
    const rawValue = normalizedSegment.slice(colonIndex + 1).trim()
    const key = normalizeObjectKey(rawKey)
    if (!key) continue
    entries[key] = rawValue
  }

  return entries
}

function getCallArguments(expression, callee) {
  const trimmed = expression.trim()
  const prefix = `${callee}(`
  if (!trimmed.startsWith(prefix)) return null
  const openIndex = trimmed.indexOf("(")
  const closeIndex = findMatchingPair(trimmed, openIndex, "(", ")")
  if (closeIndex === -1) return null
  const inner = trimmed.slice(openIndex + 1, closeIndex)
  return splitTopLevel(inner, ",")
}

function formatGraphqlTypeExpression(expression, typeConstMap = {}) {
  if (!expression) return "Unknown"
  const trimmed = expression.trim().replace(/;$/, "")

  if (trimmed.startsWith("graphql.type(")) {
    const args = getCallArguments(trimmed, "graphql.type")
    if (!args || args.length === 0) return "Unknown"
    const kind = stripQuotes(args[0])

    if (kind === "NonNull") {
      return `${formatGraphqlTypeExpression(args[1], typeConstMap)}!`
    }

    if (kind === "List") {
      return `[${formatGraphqlTypeExpression(args[1], typeConstMap)}]`
    }

    if (
      kind === "ObjectType" ||
      kind === "InputObjectType" ||
      kind === "EnumType"
    ) {
      const definition = args[1]?.trim()
      if (definition?.startsWith("{")) {
        const definitionEntries = parseTopLevelObjectEntries(definition)
        const definitionName = definitionEntries.name
          ? stripQuotes(definitionEntries.name)
          : null
        if (definitionName) return definitionName
      }
      return kind
    }

    return kind
  }

  if (trimmed.startsWith("graphql.model(")) {
    const args = getCallArguments(trimmed, "graphql.model")
    if (!args || args.length === 0) return "Unknown"
    return stripQuotes(args[0])
  }

  const normalized = stripQuotes(trimmed)
  if (typeConstMap[normalized]) return typeConstMap[normalized]
  return normalized
}

function mapModelFieldType(typeName) {
  const normalized = String(typeName || "").toLowerCase()
  if (
    normalized === "increments" ||
    normalized === "integer" ||
    normalized === "int"
  )
    return "Int"
  if (normalized === "bigint" || normalized === "biginteger") return "String"
  if (normalized === "boolean" || normalized === "bool") return "Boolean"
  if (
    normalized === "timestamp" ||
    normalized === "date" ||
    normalized === "datetime"
  )
    return "String"
  if (
    normalized === "float" ||
    normalized === "double" ||
    normalized === "decimal"
  )
    return "Float"
  if (normalized === "json" || normalized === "jsonb") return "JSON"
  if (normalized === "id") return "ID"
  return "String"
}

function extractBaseType(typeSignature) {
  let typeName = String(typeSignature || "")
    .replace(/!/g, "")
    .trim()
  while (typeName.startsWith("[") && typeName.endsWith("]")) {
    typeName = typeName.slice(1, -1).trim()
  }
  return typeName
}

function parseNamedTypeDefinitionFromObject(objectLiteral, kind, source) {
  const entries = parseTopLevelObjectEntries(objectLiteral)
  const name = entries.name ? stripQuotes(entries.name) : null
  if (!name) return null

  if (kind === "EnumType") {
    const valuesEntries = entries.values
      ? parseTopLevelObjectEntries(entries.values)
      : {}
    return {
      name,
      kind,
      source,
      values: Object.keys(valuesEntries),
      fieldsRaw: [],
    }
  }

  const fieldsEntries = entries.fields
    ? parseTopLevelObjectEntries(entries.fields)
    : {}
  const fieldsRaw = Object.entries(fieldsEntries).map(
    ([fieldName, fieldDef]) => {
      const fieldMeta = parseTopLevelObjectEntries(fieldDef)
      return { name: fieldName, typeExpression: fieldMeta.type || null }
    },
  )

  return {
    name,
    kind,
    source,
    values: [],
    fieldsRaw,
  }
}

function mergeTypeDefinition(registry, incoming) {
  const existing = registry.get(incoming.name)
  if (!existing) {
    registry.set(incoming.name, incoming)
    return
  }

  if (existing.fieldsRaw?.length === 0 && incoming.fieldsRaw?.length > 0) {
    registry.set(incoming.name, incoming)
    return
  }

  if (existing.values?.length === 0 && incoming.values?.length > 0) {
    registry.set(incoming.name, incoming)
  }
}

async function collectGraphqlTypeRegistry(sourceFiles, sourceContentMap) {
  const typeRegistry = new Map()
  const typeConstMap = {}

  for (const source of sourceFiles) {
    const content = sourceContentMap.get(source) || ""

    const constTypeRegex =
      /const\s+([A-Za-z0-9_]+)\s*=\s*graphql\.type\(\s*"(ObjectType|InputObjectType|EnumType)"\s*,\s*\{/g
    let constMatch
    while ((constMatch = constTypeRegex.exec(content)) !== null) {
      const constName = constMatch[1]
      const kind = constMatch[2]
      const braceStart = constMatch.index + constMatch[0].length - 1
      const braceEnd = findMatchingPair(content, braceStart, "{", "}")
      if (braceEnd === -1) continue
      const objectLiteral = content.slice(braceStart, braceEnd + 1)
      const typeDef = parseNamedTypeDefinitionFromObject(
        objectLiteral,
        kind,
        source,
      )
      if (!typeDef) continue
      typeConstMap[constName] = typeDef.name
      mergeTypeDefinition(typeRegistry, typeDef)
    }

    const namedTypeRegex =
      /graphql\.type\(\s*"(ObjectType|InputObjectType|EnumType)"\s*,\s*\{/g
    let typeMatch
    while ((typeMatch = namedTypeRegex.exec(content)) !== null) {
      const kind = typeMatch[1]
      const braceStart = typeMatch.index + typeMatch[0].length - 1
      const braceEnd = findMatchingPair(content, braceStart, "{", "}")
      if (braceEnd === -1) continue
      const objectLiteral = content.slice(braceStart, braceEnd + 1)
      const typeDef = parseNamedTypeDefinitionFromObject(
        objectLiteral,
        kind,
        source,
      )
      if (!typeDef) continue
      mergeTypeDefinition(typeRegistry, typeDef)
    }
  }

  for (const typeDef of typeRegistry.values()) {
    typeDef.fields = (typeDef.fieldsRaw || [])
      .filter((field) => field.typeExpression)
      .map((field) => ({
        name: field.name,
        type: formatGraphqlTypeExpression(field.typeExpression, typeConstMap),
      }))
    delete typeDef.fieldsRaw
  }

  return { typeRegistry, typeConstMap }
}

async function collectModelFieldRegistry() {
  const modelsDir = path.join(epressRoot, "server/models")
  const files = (await fs.readdir(modelsDir)).filter(
    (file) => file.endsWith(".mjs") && file !== "index.mjs",
  )
  const registry = new Map()

  for (const file of files) {
    const content = await readFileSafe(path.join(modelsDir, file))
    const classMatch = content.match(
      /export\s+class\s+([A-Za-z0-9_]+)\s+extends\s+Model/,
    )
    if (!classMatch) continue
    const modelName = classMatch[1]
    const fieldsIndex = content.indexOf("static fields = {")
    if (fieldsIndex === -1) continue
    const braceStart = content.indexOf("{", fieldsIndex)
    const braceEnd = findMatchingPair(content, braceStart, "{", "}")
    if (braceEnd === -1) continue
    const fieldsLiteral = content.slice(braceStart, braceEnd + 1)
    const fieldEntries = parseTopLevelObjectEntries(fieldsLiteral)
    const fields = Object.entries(fieldEntries).map(
      ([fieldName, fieldValue]) => {
        const fieldMeta = parseTopLevelObjectEntries(fieldValue)
        const modelType = stripQuotes(fieldMeta.type || "string")
        return {
          name: fieldName,
          type: mapModelFieldType(modelType),
        }
      },
    )
    registry.set(modelName, fields)
  }

  return registry
}

function extractOperationBlock(content, operationName) {
  const regex = new RegExp(`\\b${escapeRegExp(operationName)}\\s*:\\s*\\{`, "g")
  let match
  while ((match = regex.exec(content)) !== null) {
    const leftChar = content[match.index - 1]
    const rightChar = content[regex.lastIndex]
    if (isWordChar(leftChar || "") || isWordChar(rightChar || "")) continue
    const braceStart = content.indexOf("{", match.index)
    const braceEnd = findMatchingPair(content, braceStart, "{", "}")
    if (braceEnd === -1) continue
    return content.slice(braceStart, braceEnd + 1)
  }
  return null
}

function collectOperationErrorCodes(operationBlock) {
  const codes = new Set()
  const codeRegex = /code:\s*"([^"]+)"/g
  let match
  while ((match = codeRegex.exec(operationBlock)) !== null) {
    codes.add(match[1])
  }
  return Array.from(codes)
}

function parseOperationArgs(argsExpression, typeConstMap, typeRegistry) {
  const expandInputTypeFields = (typeName, visited = new Set()) => {
    if (!typeName || visited.has(typeName)) return []
    const typeDef = typeRegistry.get(typeName)
    if (!typeDef || typeDef.kind !== "InputObjectType") return []
    const nextVisited = new Set(visited)
    nextVisited.add(typeName)

    return (typeDef.fields || []).map((field) => {
      const nestedTypeName = extractBaseType(field.type)
      const nestedFields = expandInputTypeFields(nestedTypeName, nextVisited)
      return {
        name: field.name,
        type: field.type,
        inputType: nestedFields.length > 0 ? nestedTypeName : null,
        inputFields: nestedFields,
      }
    })
  }

  if (!argsExpression || !argsExpression.trim().startsWith("{")) return []
  const argsEntries = parseTopLevelObjectEntries(argsExpression)
  const args = []

  for (const [argName, argDefinition] of Object.entries(argsEntries)) {
    const argMeta = parseTopLevelObjectEntries(argDefinition)
    const argType = formatGraphqlTypeExpression(
      argMeta.type || "Unknown",
      typeConstMap,
    )
    const baseType = extractBaseType(argType)
    const inputTypeDef = typeRegistry.get(baseType)
    const inputFields =
      inputTypeDef?.kind === "InputObjectType"
        ? expandInputTypeFields(baseType)
        : []

    args.push({
      name: argName,
      type: argType,
      required: argType.endsWith("!"),
      inputType: inputTypeDef?.kind === "InputObjectType" ? baseType : null,
      inputFields,
    })
  }

  return args
}

function buildResponseDescriptor(returnType, typeRegistry, modelRegistry) {
  const expandResponseFields = (typeName, visited = new Set()) => {
    if (!typeName || visited.has(typeName)) return []
    const nextVisited = new Set(visited)
    nextVisited.add(typeName)

    const typeDef = typeRegistry.get(typeName)
    if (
      typeDef &&
      (typeDef.kind === "ObjectType" || typeDef.kind === "InputObjectType")
    ) {
      return (typeDef.fields || []).map((field) => {
        const nestedTypeName = extractBaseType(field.type)
        const nestedFields = expandResponseFields(nestedTypeName, nextVisited)
        return {
          name: field.name,
          type: field.type,
          responseType: nestedFields.length > 0 ? nestedTypeName : null,
          responseFields: nestedFields,
        }
      })
    }

    const modelFields = modelRegistry.get(typeName)
    if (modelFields) {
      return modelFields.map((field) => ({
        name: field.name,
        type: field.type,
        responseType: null,
        responseFields: [],
      }))
    }

    return []
  }

  const baseType = extractBaseType(returnType)
  const typeDef = typeRegistry.get(baseType)
  if (typeDef) {
    if (typeDef.kind === "EnumType") {
      return {
        kind: "ENUM",
        fields: [],
        values: typeDef.values || [],
      }
    }

    return {
      kind: "OBJECT",
      fields: expandResponseFields(baseType),
      values: [],
    }
  }

  if (modelRegistry.has(baseType)) {
    return {
      kind: "MODEL",
      fields: expandResponseFields(baseType),
      values: [],
    }
  }

  const scalarNames = new Set([
    "String",
    "Int",
    "Float",
    "Boolean",
    "ID",
    "JSON",
  ])
  if (scalarNames.has(baseType)) {
    return {
      kind: "SCALAR",
      fields: [],
      values: [],
    }
  }

  return {
    kind: "UNKNOWN",
    fields: [],
    values: [],
  }
}

function buildOperationSignature(name, args) {
  if (!args || args.length === 0) return name
  return `${name}(${args.map((arg) => `${arg.name}: ${arg.type}`).join(", ")})`
}

async function extractGraphqlOperationDetails(_graphqlRoot, graphqlOperations) {
  const sourceFiles = Array.from(
    new Set(graphqlOperations.map((item) => item.source)),
  )
  const sourceContentMap = new Map()

  for (const source of sourceFiles) {
    const content = await readFileSafe(path.join(epressRoot, source))
    sourceContentMap.set(source, content)
  }

  const { typeRegistry, typeConstMap } = await collectGraphqlTypeRegistry(
    sourceFiles,
    sourceContentMap,
  )
  const modelRegistry = await collectModelFieldRegistry()

  const details = graphqlOperations.map((operation) => {
    const content = sourceContentMap.get(operation.source) || ""
    const operationBlock = extractOperationBlock(content, operation.name)
    const operationEntries = operationBlock
      ? parseTopLevelObjectEntries(operationBlock)
      : {}
    const returnType = formatGraphqlTypeExpression(
      operationEntries.type || "Unknown",
      typeConstMap,
    )
    const args = parseOperationArgs(
      operationEntries.args,
      typeConstMap,
      typeRegistry,
    )
    const response = buildResponseDescriptor(
      returnType,
      typeRegistry,
      modelRegistry,
    )
    const errorCodes = operationBlock
      ? collectOperationErrorCodes(operationBlock)
      : []

    return {
      operationType: operation.operationType,
      name: operation.name,
      signature: buildOperationSignature(operation.name, args),
      stability: operation.stability,
      auth: operation.auth,
      summary: operation.summary,
      source: operation.source,
      returnType,
      args,
      response,
      errorCodes,
    }
  })

  return details.sort((a, b) => {
    if (a.operationType === b.operationType) return a.name.localeCompare(b.name)
    return a.operationType.localeCompare(b.operationType)
  })
}

async function writeJson(fileName, data) {
  const filePath = path.join(outputDir, fileName)
  await fs.writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8")
}

const eip712DomainFieldNotes = {
  name: "Protocol signing domain name. It binds signatures to epress world and prevents cross-app reuse.",
  version:
    "Typed-data schema version. Verifiers must match this value to avoid cross-version ambiguity.",
  chainId:
    "Chain context in the EIP-712 domain separator. It adds replay isolation across chain environments.",
}

const eip712MessageFieldNotes = {
  CreateConnection: {
    followeeAddress:
      "Address of the node being followed. Receiver validates this as its own identity anchor.",
    followeeUrl:
      "Canonical URL of the followee node used during follow handshake and profile verification flow.",
    followerUrl:
      "Canonical URL of the follower node. Receiver fetches /ewp/profile from this origin to bind signer and endpoint.",
    timestamp:
      "Unix timestamp used for freshness checks (one-hour window) to resist replay attacks.",
  },
  DeleteConnection: {
    followeeAddress:
      "Address of the followed node in the relationship to be removed.",
    followerAddress:
      "Address of the follower authorizing unfollow. Must match recovered signer.",
    timestamp:
      "Unix timestamp used for freshness checks (one-hour window) to prevent replay.",
  },
  StatementOfSource: {
    contentHash:
      "Content hash of the original publication. Followers use it to request the exact source payload.",
    publisherAddress:
      "Publisher identity that signs source authenticity for network-wide verification.",
    timestamp:
      "Publication timestamp used for deterministic ordering and replication request context.",
  },
  NodeProfileUpdate: {
    publisherAddress:
      "Owner address of the profile being updated. Must match path address and recovered signer.",
    url: "Updated canonical node URL propagated to peers for future protocol interactions.",
    title: "Updated public node title replicated across peer caches.",
    description:
      "Updated public node description replicated across peer caches.",
    timestamp:
      "Monotonic profile version timestamp. Peers apply update only when newer than local copy.",
  },
  CommentSignature: {
    nodeAddress:
      "Target node address where the comment exists. Prevents signature reuse across nodes.",
    commenterAddress:
      "Wallet address expected to own and confirm this comment.",
    publicationId:
      "Publication identifier that scopes the comment confirmation intent.",
    commentBodyHash:
      "Hash of stored comment body. Server recomputes and compares to prevent payload tampering.",
    timestamp:
      "Comment creation timestamp used with short validity window for anti-replay protection.",
  },
  DeleteComment: {
    nodeAddress: "Target node address where deletion is authorized.",
    commentId: "Comment identifier requested for deletion.",
    commenterAddress:
      "Wallet address that must match both comment author and recovered signer.",
  },
  DATA: {
    node: "Install-time node profile payload (address, URL, title, description, avatar) used to seed self identity.",
    settings:
      "Install-time settings payload used to bootstrap default runtime configuration.",
    timestamp:
      "Installation request timestamp validated in a bounded window to prevent replay.",
  },
}

function annotateEip712Fields(primaryType, domainFields, messageFields) {
  const typedNotes = eip712MessageFieldNotes[primaryType] || {}
  const annotatedDomainFields = (domainFields || []).map((field) => ({
    ...field,
    note:
      eip712DomainFieldNotes[field.name] ||
      `Domain field ${field.name} participates in EIP-712 domain separation.`,
  }))
  const annotatedMessageFields = (messageFields || []).map((field) => ({
    ...field,
    note:
      typedNotes[field.name] ||
      `Field ${field.name} is included in ${primaryType} typed-data digest for signer verification.`,
  }))
  return {
    annotatedDomainFields,
    annotatedMessageFields,
  }
}

async function extractEip712Types() {
  const helperPath = path.join(epressRoot, "client/utils/helpers/eip712.js")
  const helperModule = await import(pathToFileURL(helperPath).href)

  const def = {
    createConnectionTypedData: {
      args: [
        "0x0000000000000000000000000000000000000001",
        "https://followee.example",
        "https://follower.example",
        1700000000,
      ],
      stability: "Public/Protocol",
      scope: "Cross-node",
      purpose: "Signed follow intent payload between peer nodes.",
      producer: "Node owner wallet through node UI",
      consumer: "Remote peer node",
      routes: ["POST /ewp/connections"],
    },
    deleteConnectionTypedData: {
      args: [
        "0x0000000000000000000000000000000000000001",
        "0x0000000000000000000000000000000000000002",
        1700000000,
      ],
      stability: "Public/Protocol",
      scope: "Cross-node",
      purpose: "Signed unfollow intent payload between peer nodes.",
      producer: "Node owner wallet through node UI",
      consumer: "Remote peer node",
      routes: ["DELETE /ewp/connections"],
    },
    statementOfSourceTypedData: {
      args: [
        "0x1111111111111111111111111111111111111111111111111111111111111111",
        "0x0000000000000000000000000000000000000001",
        1700000000,
      ],
      stability: "Public/Protocol",
      scope: "Cross-node",
      purpose: "Signed proof of source for publication replication.",
      producer: "Publishing node owner wallet",
      consumer: "Follower node sync pipeline",
      routes: ["POST /ewp/replications"],
    },
    nodeProfileUpdateTypedData: {
      args: [
        "0x0000000000000000000000000000000000000001",
        "https://node.example",
        "Node Title",
        "Node description",
        1700000000,
      ],
      stability: "Public/Protocol",
      scope: "Cross-node",
      purpose: "Signed profile update payload broadcast to connected peers.",
      producer: "Node owner wallet",
      consumer: "Connected peer nodes",
      routes: ["PATCH /ewp/nodes/:address"],
    },
    commentSignatureTypedData: {
      args: [
        "0x0000000000000000000000000000000000000001",
        "0x0000000000000000000000000000000000000002",
        1,
        "0x1111111111111111111111111111111111111111111111111111111111111111",
        1700000000,
      ],
      stability: "Public/App",
      scope: "Node-local",
      purpose:
        "Signed comment confirmation payload for Ethereum-auth comments.",
      producer: "Commenter wallet",
      consumer: "Comment confirm mutation",
      routes: ["GraphQL mutation confirmComment"],
    },
    deleteCommentTypedData: {
      args: [
        "0x0000000000000000000000000000000000000001",
        1,
        "0x0000000000000000000000000000000000000002",
      ],
      stability: "Public/App",
      scope: "Node-local",
      purpose:
        "Signed comment deletion request payload for Ethereum-auth comments.",
      producer: "Commenter wallet",
      consumer: "Comment deletion mutation",
      routes: ["GraphQL mutation destroyComment"],
    },
    installTypedData: {
      args: [
        {
          avatar: "",
          address: "0x0000000000000000000000000000000000000001",
          url: "https://node.example",
          title: "Node",
          description: "desc",
        },
        {
          defaultLanguage: "en",
          defaultTheme: "light",
          walletConnectProjectId: "",
          mailTransport: "",
          mailFrom: "",
        },
        1700000000,
      ],
      stability: "Internal/Operational",
      scope: "Node-local",
      purpose: "Signed installation payload used by web installer bootstrap.",
      producer: "Installer wallet",
      consumer: "Install API endpoint",
      routes: ["POST /api/install"],
    },
  }

  const records = []

  for (const [fnName, meta] of Object.entries(def)) {
    const builder = helperModule[fnName]
    if (typeof builder !== "function") continue
    const typedData = builder(...meta.args)
    const primaryType = typedData.primaryType
    const primaryFields = typedData.types?.[primaryType] || []
    const { annotatedDomainFields, annotatedMessageFields } =
      annotateEip712Fields(
        primaryType,
        typedData.types?.EIP712Domain || [],
        primaryFields,
      )
    records.push({
      id: primaryType,
      functionName: fnName,
      stability: meta.stability,
      scope: meta.scope,
      purpose: meta.purpose,
      producer: meta.producer,
      consumer: meta.consumer,
      domain: typedData.domain,
      domainFields: annotatedDomainFields,
      primaryType,
      messageFields: annotatedMessageFields,
      routes: meta.routes,
    })
  }

  return records.sort((a, b) => {
    if (a.scope === b.scope) return a.id.localeCompare(b.id)
    return a.scope.localeCompare(b.scope)
  })
}

function createEip712Verification() {
  return [
    {
      id: "CreateConnection",
      scope: "Cross-node",
      target: "POST /ewp/connections",
      checks: [
        "typedData and signature payload shape must be complete",
        "verifyTypedData must pass for expected signer address",
        "timestamp must be within one-hour window",
        "followee identity in message must match fetched profile identity",
      ],
    },
    {
      id: "DeleteConnection",
      scope: "Cross-node",
      target: "DELETE /ewp/connections",
      checks: [
        "typedData.message requires followeeAddress, followerAddress, timestamp",
        "timestamp must be integer and in one-hour window",
        "recoverTypedDataAddress must equal followerAddress",
        "local node role must match follower or followee orientation",
      ],
    },
    {
      id: "StatementOfSource",
      scope: "Cross-node",
      target: "POST /ewp/replications",
      checks: [
        "publisher must be in follow relationship state",
        "verifyTypedData must pass for publisherAddress",
        "content hash recalculation must equal message.contentHash",
        "publisherAddress in message must equal synced node address",
      ],
    },
    {
      id: "NodeProfileUpdate",
      scope: "Cross-node",
      target: "PATCH /ewp/nodes/:address",
      checks: [
        "path address must match typedData.message.publisherAddress",
        "recoverTypedDataAddress must equal publisherAddress",
        "incoming timestamp must be newer than local updated_at to patch",
      ],
    },
    {
      id: "CommentSignature",
      scope: "Node-local",
      target: "GraphQL confirmComment",
      checks: [
        "server-side typedData is rebuilt to prevent client tampering",
        "recoverTypedDataAddress must equal comment.author_id",
        "signature validity window is 600 seconds from comment timestamp",
      ],
    },
    {
      id: "DeleteComment",
      scope: "Node-local",
      target: "GraphQL destroyComment",
      checks: [
        "server-side typedData is rebuilt from stored comment fields",
        "recoverTypedDataAddress must equal requester/comment author",
      ],
    },
    {
      id: "DATA",
      scope: "Node-local",
      target: "POST /api/install",
      checks: [
        "typedData payload shape includes node/settings/timestamp",
        "verifyTypedData must pass for node address signer",
        "timestamp must be within one-hour window",
      ],
    },
  ]
}

function createEip712Errors() {
  return [
    {
      id: "CreateConnection",
      target: "POST /ewp/connections",
      errors: [
        "400 INVALID_PAYLOAD",
        "400 INVALID_SIGNATURE",
        "400 INVALID_TIMESTAMP",
        "400 INVALID_URL_FORMAT",
        "401 FOLLOWEE_IDENTITY_MISMATCH",
        "409 CONNECTION_ALREADY_EXISTS",
      ],
    },
    {
      id: "DeleteConnection",
      target: "DELETE /ewp/connections",
      errors: [
        "400 INVALID_PAYLOAD",
        "400 INVALID_TIMESTAMP",
        "400 INVALID_SIGNATURE",
      ],
    },
    {
      id: "StatementOfSource",
      target: "POST /ewp/replications",
      errors: [
        "400 INVALID_PAYLOAD",
        "400 INVALID_SIGNATURE",
        "400 CONTENT_HASH_MISMATCH",
        "400 CONTENT_DESCRIPTION_MISSING",
        "401 NOT_FOLLOWING",
        "409 REPLICATION_ALREADY_EXISTS",
      ],
    },
    {
      id: "NodeProfileUpdate",
      target: "PATCH /ewp/nodes/:address",
      errors: [
        "400 INVALID_PAYLOAD",
        "400 ADDRESS_MISMATCH",
        "400 INVALID_ADDRESS",
        "400 INVALID_SIGNATURE",
      ],
    },
    {
      id: "CommentSignature",
      target: "GraphQL confirmComment",
      errors: [
        "VALIDATION_FAILED",
        "NOT_FOUND",
        "FORBIDDEN",
        "EXPIRED_SIGNATURE",
        "INVALID_SIGNATURE",
      ],
    },
    {
      id: "DeleteComment",
      target: "GraphQL destroyComment",
      errors: ["NOT_FOUND", "FORBIDDEN", "INVALID_SIGNATURE"],
    },
    {
      id: "DATA",
      target: "POST /api/install",
      errors: [
        "preCheck failure",
        "initialSchema failure",
        "initialData failure",
      ],
    },
  ]
}

async function main() {
  await ensureEpressRoot()
  await fs.mkdir(outputDir, { recursive: true })

  const ewpMetadata = {
    "GET /ewp/profile": {
      stability: "Public/Protocol",
      auth: "None",
      summary: "Return self node profile for protocol identity discovery.",
    },
    "GET /ewp/avatar": {
      stability: "Public/Protocol",
      auth: "None",
      summary: "Return node avatar binary.",
    },
    "POST /ewp/connections": {
      stability: "Public/Protocol",
      auth: "Typed-data signature",
      summary: "Handle follow handshake and create connection.",
    },
    "DELETE /ewp/connections": {
      stability: "Public/Protocol",
      auth: "Typed-data signature",
      summary: "Handle unfollow handshake and remove connection.",
    },
    "GET /ewp/publications": {
      stability: "Public/Protocol",
      auth: "None",
      summary: "List publication metadata for synchronization.",
    },
    "GET /ewp/contents/:content_hash": {
      stability: "Public/Protocol",
      auth: "None",
      summary: "Fetch publication content by content hash.",
    },
    "POST /ewp/replications": {
      stability: "Public/Protocol",
      auth: "Connection relationship + signature",
      summary: "Accept and verify replication pushes from followed nodes.",
    },
    "PATCH /ewp/nodes/:address": {
      stability: "Public/Protocol",
      auth: "Typed-data signature",
      summary: "Apply signed remote node profile updates.",
    },
  }

  const nodeApiMetadata = {
    "GET /api/install": {
      stability: "Internal/Operational",
      auth: "None",
      summary: "Read installation lock and status.",
      errorCodes: ["500 Failed to check installation status"],
    },
    "POST /api/install": {
      stability: "Internal/Operational",
      auth: "Typed-data signature",
      summary: "Run installation and initialize schema/data.",
      errorCodes: [
        "500 preCheck|initialSchema|initialData step failure",
        "500 Unexpected install failure",
      ],
    },
    "POST /api/smtp_check": {
      stability: "Internal/Operational",
      auth: "None",
      summary: "Validate SMTP transport string.",
      errorCodes: ["400 validation failed", "500 server error"],
    },
    "GET /api/visitors": {
      stability: "Public/App",
      auth: "None",
      summary: "List current online visitors from memory state.",
      errorCodes: ["500 Internal server error"],
    },
    "POST /api/visitors": {
      stability: "Public/App",
      auth: "None",
      summary: "Upsert visitor activity heartbeat.",
      errorCodes: [
        "400 Invalid address",
        "400 Invalid Ethereum address format",
        "500 Internal server error",
      ],
    },
    "DELETE /api/visitors": {
      stability: "Public/App",
      auth: "None",
      summary: "Remove visitor from online set.",
      errorCodes: [
        "400 Invalid address",
        "400 Invalid Ethereum address format",
        "500 Internal server error",
      ],
    },
    "POST /api/graphql": {
      stability: "Public/App",
      auth: "Operation dependent",
      summary: "GraphQL transport endpoint for queries and mutations.",
      source: "server/graphql/index.mjs",
      errorCodes: ["503 NOT_INSTALLED"],
    },
  }

  const ewpEndpointsRaw = await extractRoutes(
    path.join(epressRoot, "server/routes/ewp"),
    "/ewp",
    ewpMetadata,
  )
  const ewpEndpoints = ewpEndpointsRaw.map((endpoint) => {
    const item = { ...endpoint }
    delete item.source
    return item
  })
  const nodeRestRoutes = await extractRoutes(
    path.join(epressRoot, "server/routes/api"),
    "/api",
    nodeApiMetadata,
  )

  const graphqlEndpoint = {
    method: "POST",
    path: "/api/graphql",
    stability: nodeApiMetadata["POST /api/graphql"].stability,
    auth: nodeApiMetadata["POST /api/graphql"].auth,
    summary: nodeApiMetadata["POST /api/graphql"].summary,
    source: nodeApiMetadata["POST /api/graphql"].source,
    errorCodes: nodeApiMetadata["POST /api/graphql"].errorCodes,
  }

  const nodeRestEndpoints = sortEndpoints([...nodeRestRoutes, graphqlEndpoint])

  const graphqlOperations = await extractGraphqlOperations(
    path.join(epressRoot, "server/graphql"),
  )
  const graphqlOperationDetails = await extractGraphqlOperationDetails(
    path.join(epressRoot, "server/graphql"),
    graphqlOperations,
  )
  const eip712Types = await extractEip712Types()
  const eip712Verification = createEip712Verification()
  const eip712Errors = createEip712Errors()

  const protocolMapping = [
    {
      concept: "Identity",
      definition:
        "Node identity is rooted in Ethereum address ownership and signature verification.",
      routes: [
        "GET /ewp/profile",
        "POST /api/graphql (getSiweMessage/signInWithEthereum)",
      ],
    },
    {
      concept: "Node",
      definition:
        "A node exposes profile, avatar, settings, and APIs as an autonomous social endpoint.",
      routes: [
        "GET /ewp/profile",
        "GET /ewp/avatar",
        "PATCH /ewp/nodes/:address",
      ],
    },
    {
      concept: "Connection",
      definition:
        "Follow relationships are created and removed through signed handshakes.",
      routes: ["POST /ewp/connections", "DELETE /ewp/connections"],
    },
    {
      concept: "Publication",
      definition:
        "Publications bind author identity to content hash and optional signature.",
      routes: ["GET /ewp/publications", "GET /ewp/contents/:content_hash"],
    },
    {
      concept: "Replication",
      definition:
        "Follower nodes replicate signed content from followed publishers.",
      routes: ["POST /ewp/replications"],
    },
    {
      concept: "Proof/Signature",
      definition:
        "Typed-data signatures and timestamp validation enforce authenticity and replay resistance.",
      routes: [
        "POST /ewp/connections",
        "DELETE /ewp/connections",
        "PATCH /ewp/nodes/:address",
        "POST /ewp/replications",
      ],
    },
  ]

  await writeJson("ewp-endpoints.json", ewpEndpoints)
  await writeJson("node-rest-endpoints.json", nodeRestEndpoints)
  await writeJson("graphql-operations.json", graphqlOperations)
  await writeJson("graphql-operation-details.json", graphqlOperationDetails)
  await writeJson("protocol-mapping.json", protocolMapping)
  await writeJson("eip712-types.json", eip712Types)
  await writeJson("eip712-verification.json", eip712Verification)
  await writeJson("eip712-errors.json", eip712Errors)

  console.log(
    `Generated developer doc snapshots in ${path.relative(worldRoot, outputDir)}`,
  )
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
