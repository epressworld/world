import { ApiReferenceTable } from "@/components/developer/api-reference-table";
import { OperationCard } from "@/components/developer/operation-card";
import nodeRestEndpoints from "@/content/developer/node-rest-endpoints.json";

const keyOperations = [
  {
    title: "Installation Status",
    method: "GET",
    path: "/api/install",
    stability: "Internal/Operational",
    purpose: "Returns installation status and lock metadata for setup flow.",
    auth: "None",
    params: ["No params"],
    body: ["No request body"],
    response: ["200 with installed boolean and lock details"],
    errors: ["500 internal install status error"],
    example: "curl https://node.example.com/api/install",
    source: "server/routes/api/install.mjs",
  },
  {
    title: "Run Installation",
    method: "POST",
    path: "/api/install",
    stability: "Internal/Operational",
    purpose: "Executes first-time installation, migration, and seed with typed-data verification.",
    auth: "Typed-data signature in request payload",
    params: ["No params"],
    body: ["typedData.message with node and settings", "signature"],
    response: ["200 with step result list"],
    errors: ["500 with step failure report"],
    example:
      "curl -X POST https://node.example.com/api/install -H 'Content-Type: application/json' -d '{\"typedData\":{},\"signature\":\"0x...\"}'",
    source: "server/routes/api/install.mjs",
  },
  {
    title: "SMTP Validation",
    method: "POST",
    path: "/api/smtp_check",
    stability: "Internal/Operational",
    purpose: "Validates SMTP transport config using nodemailer verify before persisting settings.",
    auth: "None",
    params: ["No params"],
    body: ["mailTransport string"],
    response: ["200 { valid: true } or 400 { valid: false, error }"],
    errors: ["400 invalid SMTP config", "500 server error"],
    example:
      "curl -X POST https://node.example.com/api/smtp_check -H 'Content-Type: application/json' -d '{\"mailTransport\":\"smtp://user:pass@smtp.example.com:587\"}'",
    source: "server/routes/api/smtp_check.mjs",
  },
  {
    title: "Visitors Tracking",
    method: "POST",
    path: "/api/visitors",
    stability: "Public/App",
    purpose: "Upserts online visitor heartbeat and triggers optional notification for new visitors.",
    auth: "None; payload address validation",
    params: ["No params"],
    body: ["address (Ethereum address)"],
    response: ["200 with success, address, lastActive"],
    errors: ["400 invalid address", "500 internal server error"],
    example:
      "curl -X POST https://node.example.com/api/visitors -H 'Content-Type: application/json' -d '{\"address\":\"0x...\"}'",
    source: "server/routes/api/visitors.mjs",
  },
  {
    title: "GraphQL Transport",
    method: "POST",
    path: "/api/graphql",
    stability: "Public/App",
    purpose: "GraphQL endpoint for queries and mutations; context includes JWT user and request cache.",
    auth: "Operation dependent",
    params: ["No params"],
    body: ["GraphQL query/mutation payload"],
    response: ["200 GraphQL response envelope"],
    errors: ["503 NOT_INSTALLED for GraphQL before installation"],
    example:
      "curl -X POST https://node.example.com/api/graphql -H 'Content-Type: application/json' -d '{\"query\":\"{ nodeStatus { version startedAt } }\"}'",
    source: "server/graphql/index.mjs",
  },
];

export default function NodeRestApiPage() {
  const rows = nodeRestEndpoints.map((item) => ({
    method: item.method,
    path: item.path,
    scope: item.stability,
    auth: item.auth,
    summary: item.summary,
  }));

  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white">epress node REST API</h1>
        <p className="mt-3 leading-7 text-gray-300">
          REST endpoints include operational setup APIs and application-level endpoints under
          <span className="font-mono"> /api</span>.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">Endpoint Inventory</h2>
        <p className="mt-2 text-sm text-dark-muted">Snapshot generated from /api route modules and GraphQL mount definition.</p>
        <div className="mt-4">
          <ApiReferenceTable items={rows} />
        </div>
      </article>

      {keyOperations.map((item) => (
        <OperationCard key={`${item.method}-${item.path}`} {...item} />
      ))}
    </div>
  );
}
