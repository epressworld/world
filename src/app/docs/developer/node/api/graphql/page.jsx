import { ApiReferenceTable } from "@/components/developer/api-reference-table";
import { OperationCard } from "@/components/developer/operation-card";
import graphqlOperationDetails from "@/content/developer/graphql-operation-details.json";

const operationOverrides = {
  "QUERY:fetch": {
    signature: "fetch(type: FetchType!, id: ID!)",
    returnType: "Node | Publication | Comment",
    params: [
      "type: FetchType! (NODE | PUBLICATION | COMMENT)",
      "id: ID!",
      "Publication id accepts numeric id, content hash, or slug.",
    ],
    response: [
      "Union return by type:",
      "Node: address, url, title, description, is_self, created_at, updated_at",
      "Publication: id, slug, description, signature, comment_count, created_at, updated_at, author, content",
      "Comment: id, body, status, auth_type, author_name, author_id, created_at, publication, commenter",
    ],
    errors: ["INVALID_QUERY", "NOT_FOUND", "FORBIDDEN"],
    example: `query FetchPublication($id: ID!) {
  fetch(type: PUBLICATION, id: $id) {
    ... on Publication {
      id
      slug
      description
      signature
      comment_count
      created_at
      updated_at
      author {
        address
        url
        title
      }
      content {
        content_hash
        type
        body
      }
    }
  }
}

# variables
{
  "id": "1"
}`,
  },
  "QUERY:search": {
    signature:
      "search(type: SearchType!, filterBy: JSON, orderBy: String, first: Int, after: String, keyword: String)",
    returnType: "SearchConnection",
    params: [
      "type: SearchType! (NODE | PUBLICATION | COMMENT)",
      "filterBy: JSON",
      "orderBy: String",
      "first: Int",
      "after: String",
      "keyword: String",
      "Node search requires filterBy.type in {followers, following}.",
      "Comment search requires filterBy.publication_id.",
      "Publication search supports filterBy.hashtag/content_hash/isSigned.",
    ],
    response: [
      "Connection object: total, edges[], pageInfo",
      "edges[].node is union by type (Node | Publication | Comment).",
      "pageInfo fields: hasNextPage, startCursor, endCursor",
    ],
    errors: ["INVALID_QUERY", "FORBIDDEN"],
    example: `query SearchPublications($filterBy: JSON, $first: Int, $after: String, $keyword: String) {
  search(
    type: PUBLICATION
    filterBy: $filterBy
    first: $first
    after: $after
    keyword: $keyword
  ) {
    total
    edges {
      cursor
      node {
        ... on Publication {
          id
          slug
          description
          signature
          comment_count
          created_at
          updated_at
        }
      }
    }
    pageInfo {
      hasNextPage
      startCursor
      endCursor
    }
  }
}

# variables
{
  "filterBy": {
    "hashtag": "web3"
  },
  "first": 10,
  "after": null,
  "keyword": "agent"
}`,
  },
  "QUERY:getSiweMessage": {
    signature: "getSiweMessage(address: String!): String!",
    params: [
      "address: String! (wallet address that will sign SIWE message)",
    ],
    response: [
      "JWT-backed nonce string embedded into SIWE message.",
    ],
    errors: ["VALIDATION_FAILED", "INTERNAL_SERVER_ERROR"],
    example: `query GetSiweMessage($address: String!) {
  getSiweMessage(address: $address)
}

# variables
{
  "address": "0x0000000000000000000000000000000000000001"
}`,
  },
  "QUERY:settings": {
    signature: "settings: Settings",
    response: [
      "mail.mailTransport and mail.mailFrom are auth-sensitive and may be null for unauthenticated callers.",
    ],
  },
  "QUERY:visitor": {
    signature: "visitor(address: String!): Visitor",
    params: [
      "address: String! (visitor wallet address to check follow relation)",
    ],
    response: [
      "isFollower: whether visitor follows this node",
      "isFollowing: whether this node follows visitor",
      "node: visitor profile when present",
    ],
    errors: ["Invalid address formats are normalized to false/false/null response"],
    example: `query Visitor($address: String!) {
  visitor(address: $address) {
    isFollower
    isFollowing
    node {
      address
      url
      title
      description
    }
  }
}

# variables
{
  "address": "0x0000000000000000000000000000000000000001"
}`,
  },
  "MUTATION:signInWithEthereum": {
    signature: "signInWithEthereum(message: String!, signature: String!): String!",
    params: [
      "message: String! (SIWE message from getSiweMessage flow)",
      "signature: String! (wallet signature over SIWE message)",
    ],
    response: [
      "JWT token for aud=client owner session.",
    ],
    errors: ["INVALID_SIGNATURE", "EXPIRED_NONCE", "UNAUTHENTICATED", "INTERNAL_SERVER_ERROR"],
  },
  "MUTATION:generateIntegrationToken": {
    signature: "generateIntegrationToken(scope: [String!]!, expiresIn: String): String!",
    params: [
      "scope: [String!]! (permission list for integration token)",
      "expiresIn: String (default 24h)",
    ],
    response: [
      "JWT token for aud=integration with permission scope claims.",
    ],
    errors: ["UNAUTHENTICATED", "INTERNAL_SERVER_ERROR"],
  },
  "MUTATION:createPublication": {
    signature: "createPublication(input: CreatePublicationInput!): Publication!",
    params: [
      "input.type supports POST or FILE.",
      "POST requires body and rejects file.",
      "FILE requires file and description.",
      "slug must match [a-z0-9-]+ and be unique per author.",
    ],
    errors: ["UNAUTHENTICATED", "FORBIDDEN", "VALIDATION_FAILED", "INTERNAL_SERVER_ERROR"],
  },
  "MUTATION:updatePublication": {
    signature: "updatePublication(input: UpdatePublicationInput!): Publication!",
    params: [
      "Signed publications cannot be updated.",
      "Only publication author can update.",
      "slug validation and uniqueness rules are enforced.",
    ],
    errors: ["UNAUTHENTICATED", "FORBIDDEN", "NOT_FOUND", "VALIDATION_FAILED", "INTERNAL_SERVER_ERROR"],
  },
  "MUTATION:signPublication": {
    signature: "signPublication(id: ID!, signature: String!): Publication!",
    params: [
      "id: ID! (publication id)",
      "signature: String! (wallet signature for statementOfSource typed data)",
    ],
    response: [
      "Returns signed publication and may trigger replication fan-out to followers.",
    ],
    errors: ["UNAUTHENTICATED", "NOT_FOUND", "FORBIDDEN", "INVALID_SIGNATURE"],
  },
  "MUTATION:createComment": {
    signature: "createComment(input: CreateCommentInput!): Comment!",
    params: [
      "input.auth_type: EMAIL | ETHEREUM",
      "EMAIL requires valid email in input.author_id and mail server configuration.",
      "ETHEREUM requires valid wallet address in input.author_id.",
      "New comments start as PENDING until confirmation.",
    ],
    errors: ["COMMENT_DISABLED", "VALIDATION_FAILED", "NOT_FOUND", "MAIL_NOT_CONFIGURED"],
  },
  "MUTATION:confirmComment": {
    signature: "confirmComment(id: ID, tokenOrSignature: String!): Comment!",
    params: [
      "EMAIL flow: pass JWT token in tokenOrSignature.",
      "ETHEREUM flow: pass signature in tokenOrSignature and provide id.",
    ],
    errors: ["VALIDATION_FAILED", "INVALID_SIGNATURE", "NOT_FOUND", "FORBIDDEN", "EXPIRED_SIGNATURE"],
  },
  "MUTATION:destroyComment": {
    signature: "destroyComment(id: ID!, signature: String, email: String): Comment!",
    params: [
      "Owner flow: authenticated owner with delete permission can delete directly.",
      "EMAIL flow: provide email; node sends confirmation email before deletion.",
      "ETHEREUM flow: provide signature bound to DeleteComment typed data.",
    ],
    errors: ["NOT_FOUND", "VALIDATION_FAILED", "FORBIDDEN", "INVALID_SIGNATURE", "INTERNAL_SERVER_ERROR"],
  },
  "MUTATION:updateSettings": {
    signature: "updateSettings(input: UpdateSettingsInput!): Settings!",
    params: [
      "Owner authentication required.",
      "Boolean values are persisted as string flags in settings storage.",
      "mail object in response is derived from mailTransport + mailFrom.",
    ],
    errors: ["UNAUTHENTICATED", "INTERNAL_SERVER_ERROR"],
  },
};

function toOperationId(operationType, name) {
  return `graphql-${operationType.toLowerCase()}-${name.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase()}`;
}

function toOperationTitle(operationType, name) {
  return `${operationType === "QUERY" ? "Query" : "Mutation"} ${name}`;
}

function flattenInputFields(fields, prefix = "") {
  const lines = [];
  for (const field of fields || []) {
    const path = prefix ? `${prefix}.${field.name}` : field.name;
    lines.push(`${path}: ${field.type}`);
    if (field.inputFields?.length) {
      lines.push(...flattenInputFields(field.inputFields, path));
    }
  }
  return lines;
}

function flattenResponseFields(fields, prefix = "") {
  const lines = [];
  for (const field of fields || []) {
    const path = prefix ? `${prefix}.${field.name}` : field.name;
    lines.push(`${path}: ${field.type}`);
    if (field.responseFields?.length) {
      lines.push(...flattenResponseFields(field.responseFields, path));
    }
  }
  return lines;
}

function extractBaseType(typeSignature) {
  let typeName = String(typeSignature || "").replace(/!/g, "").trim();
  while (typeName.startsWith("[") && typeName.endsWith("]")) {
    typeName = typeName.slice(1, -1).trim();
  }
  return typeName;
}

function sampleValueForType(typeSignature) {
  const baseType = extractBaseType(typeSignature);
  if (typeSignature.includes("[")) return [];
  if (baseType === "Int" || baseType === "Float") return 1;
  if (baseType === "Boolean") return true;
  if (baseType === "JSON") return {};
  if (baseType === "ID") return "1";
  return "value";
}

function sampleInputObject(fields) {
  const value = {};
  for (const field of fields || []) {
    if (field.inputFields?.length) {
      value[field.name] = sampleInputObject(field.inputFields);
      continue;
    }
    value[field.name] = sampleValueForType(field.type);
  }
  return value;
}

function sampleValueForArg(arg) {
  if (arg.inputFields?.length) {
    return sampleInputObject(arg.inputFields);
  }
  return sampleValueForType(arg.type);
}

function buildSelectionSet(fields, depth = 2) {
  if (!fields || fields.length === 0) return "";
  const lines = [];

  for (const field of fields) {
    const indent = "  ".repeat(depth);
    if (field.responseFields?.length) {
      lines.push(`${indent}${field.name} {`);
      lines.push(buildSelectionSet(field.responseFields, depth + 1));
      lines.push(`${indent}}`);
      continue;
    }
    lines.push(`${indent}${field.name}`);
  }

  return lines.join("\n");
}

function buildOperationExample(detail, override = {}) {
  if (override.example) return override.example;
  const operationKind = detail.operationType === "QUERY" ? "query" : "mutation";
  const args = detail.args || [];
  const hasObjectResponse = detail.response?.kind === "OBJECT" || detail.response?.kind === "MODEL";
  const selectionSet = hasObjectResponse ? buildSelectionSet(detail.response.fields || []) : "";
  const operationArgs = args.map((arg) => `${arg.name}: $${arg.name}`).join(", ");
  const operationHead = args.length ? `${detail.name}(${operationArgs})` : detail.name;
  const operationBody = selectionSet
    ? `${operationHead} {\n${selectionSet}\n  }`
    : operationHead;

  if (args.length === 0) {
    return `${operationKind} {\n  ${operationBody}\n}`;
  }

  const variableDefs = args.map((arg) => `$${arg.name}: ${arg.type}`).join(", ");
  const variables = {};
  for (const arg of args) {
    variables[arg.name] = sampleValueForArg(arg);
  }
  const variablesJson = JSON.stringify(variables, null, 2);
  return `${operationKind} ${detail.name}Example(${variableDefs}) {\n  ${operationBody}\n}\n\n# variables\n${variablesJson}`;
}

const operationDocs = graphqlOperationDetails.map((detail) => {
  const operationKey = `${detail.operationType}:${detail.name}`;
  const override = operationOverrides[operationKey] || {};

  const autoParams = detail.args?.length
    ? detail.args.flatMap((arg) => {
        const lines = [`${arg.name}: ${arg.type}`];
        if (arg.inputFields?.length) {
          lines.push(...flattenInputFields(arg.inputFields, arg.name));
        }
        return lines;
      })
    : [];
  const params = [
    ...autoParams,
    ...(override.params || []),
  ];
  if (params.length === 0) {
    params.push("No arguments.");
  }

  const response = [`Return type: ${override.returnType || detail.returnType}`];
  if (detail.response?.kind === "OBJECT" || detail.response?.kind === "MODEL") {
    const responseFields = flattenResponseFields(detail.response.fields || []);
    if (responseFields.length) {
      response.push(...responseFields);
    }
  } else if (detail.response?.kind === "ENUM") {
    const values = (detail.response.values || []).map((value) => `enum: ${value}`);
    if (values.length) response.push(...values);
  }
  if (override.response?.length) {
    response.push(...override.response);
  }

  return {
    id: toOperationId(detail.operationType, detail.name),
    title: toOperationTitle(detail.operationType, detail.name),
    method: detail.operationType,
    path: override.signature || detail.signature,
    stability: detail.stability,
    purpose: detail.summary,
    auth: detail.auth,
    params,
    body: [
      "GraphQL request body: { query, variables }",
      ...params,
    ],
    response,
    errors: override.errors || (detail.errorCodes?.length
      ? detail.errorCodes
      : ["Operation-specific GraphQL errors may be returned in errors[]."]),
    example: buildOperationExample(detail, override),
    source: detail.source,
  };
});

const queryDocs = operationDocs.filter((item) => item.method === "QUERY");
const mutationDocs = operationDocs.filter((item) => item.method === "MUTATION");

const inventoryRows = operationDocs.map((item) => ({
  method: item.method,
  path: item.path,
  scope: item.stability,
  auth: item.auth,
  summary: item.purpose,
  href: `#${item.id}`,
}));

const quickJumpNames = [
  "Query fetch",
  "Query search",
  "Query settings",
  "Mutation signInWithEthereum",
  "Mutation createPublication",
  "Mutation createConnection",
  "Mutation createComment",
  "Mutation updateSettings",
];

const quickJumpRows = quickJumpNames
  .map((name) => operationDocs.find((item) => item.title === name))
  .filter(Boolean);

export default function NodeGraphqlApiPage() {
  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white">epress node GraphQL API</h1>
        <p className="mt-3 leading-7 text-gray-300">
          GraphQL is served under <span className="font-mono">/api/graphql</span>. This chapter documents all current
          queries and mutations with arguments, response schema, error codes, and implementation links.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-300">
            Scope tags: Public/App | Internal/Operational
          </span>
          <span className="inline-flex rounded-full border border-primary/35 bg-primary/10 px-2 py-1 text-xs text-primary">
            Auth is operation-specific
          </span>
        </div>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">Most-used Operations</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {quickJumpRows.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-full border border-dark-border bg-dark-bg/60 px-3 py-1 text-xs text-gray-200 hover:border-primary/40 hover:text-primary"
            >
              {item.title}
            </a>
          ))}
        </div>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">Operation Inventory</h2>
        <p className="mt-2 text-sm text-dark-muted">Click any operation to jump to its full reference.</p>
        <div className="mt-4">
          <ApiReferenceTable items={inventoryRows} />
        </div>
      </article>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Query Operations</h2>
        {queryDocs.map((item) => (
          <OperationCard key={item.id} {...item} />
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Mutation Operations</h2>
        {mutationDocs.map((item) => (
          <OperationCard key={item.id} {...item} />
        ))}
      </section>
    </div>
  );
}
