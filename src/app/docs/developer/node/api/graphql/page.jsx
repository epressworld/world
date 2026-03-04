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

  const params = detail.args?.length
    ? detail.args.flatMap((arg) => {
        const lines = [`${arg.name}: ${arg.type}`];
        if (arg.inputFields?.length) {
          lines.push(...flattenInputFields(arg.inputFields, arg.name));
        }
        return lines;
      })
    : (override.params || ["No arguments."]);

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

export default function NodeGraphqlApiPage() {
  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white">epress node GraphQL API</h1>
        <p className="mt-3 leading-7 text-gray-300">
          GraphQL is served under <span className="font-mono">/api/graphql</span>. This chapter documents all current
          queries and mutations with arguments, response schema, error codes, and implementation links.
        </p>
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
