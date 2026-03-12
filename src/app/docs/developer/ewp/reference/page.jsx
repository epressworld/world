import Link from "next/link"
import { OperationCard } from "@/components/developer/operation-card"

const operations = [
  {
    title: "Node Profile",
    method: "GET",
    path: "/ewp/profile",
    stability: "Public/Protocol",
    purpose:
      "Returns canonical profile metadata for the current node instance.",
    auth: "None",
    params: ["No params"],
    body: ["No request body"],
    response: [
      "200 with address, title, url, description, created_at, updated_at",
    ],
    errors: ["404 NODE_NOT_FOUND", "500 INTERNAL_ERROR"],
    example: "curl https://node.example.com/ewp/profile",
    jsonResponse: `{
  "address": "0x1234567890abcdef1234567890abcdef12345678",
  "title": "My Epress Node",
  "url": "https://mynode.example.com",
  "description": "Personal blog and social hub",
  "created_at": "2026-01-01T00:00:00.000Z",
  "updated_at": "2026-03-01T12:00:00.000Z"
}`,
  },
  {
    title: "Node Avatar",
    method: "GET",
    path: "/ewp/avatar",
    stability: "Public/Protocol",
    purpose: "Returns avatar binary from node settings with default fallback.",
    auth: "None",
    params: ["No params"],
    body: ["No request body"],
    response: ["200 image binary with Content-Type from stored data URI"],
    errors: ["500 Internal Server Error"],
    example: "curl -L https://node.example.com/ewp/avatar --output avatar.png",
  },
  {
    title: "Create Connection",
    method: "POST",
    path: "/ewp/connections",
    stability: "Public/Protocol",
    purpose:
      "Accepts signed follow handshake payload and persists follower-followee relationship.",
    auth: "Typed-data signature in body",
    params: ["No path params"],
    body: ["typedData (domain/types/primaryType/message)", "signature"],
    response: ["201 { status: created }"],
    errors: [
      "400 INVALID_PAYLOAD",
      "400 INVALID_SIGNATURE",
      "400 INVALID_TIMESTAMP",
      "400 INVALID_URL_FORMAT",
      "401 FOLLOWEE_IDENTITY_MISMATCH",
      "409 CONNECTION_ALREADY_EXISTS",
      "500 INTERNAL_ERROR",
    ],
    example:
      'curl -X POST https://node.example.com/ewp/connections -H \'Content-Type: application/json\' -d \'{"typedData":{},"signature":"0x..."}\'',
    jsonRequest: `{
  "typedData": {
    "domain": {
      "name": "Epress",
      "version": "1",
      "chainId": 1
    },
    "types": {
      "Connection": [
        { "name": "followerAddress", "type": "address" },
        { "name": "followeeAddress", "type": "address" },
        { "name": "timestamp", "type": "uint256" }
      ]
    },
    "primaryType": "Connection",
    "message": {
      "followerAddress": "0xfollower...",
      "followeeAddress": "0xfollowee...",
      "timestamp": 1705312800
    }
  },
  "signature": "0x3040..."
}`,
    jsonResponse: `{
  "status": "created"
}`,
    errorExamples: {
      "400 INVALID_PAYLOAD": `{"error": "INVALID_PAYLOAD", "message": "Missing required field: typedData"}`,
      "400 INVALID_SIGNATURE": `{"error": "INVALID_SIGNATURE", "message": "Signature verification failed"}`,
      "409 CONNECTION_ALREADY_EXISTS": `{"error": "CONNECTION_ALREADY_EXISTS", "message": "Connection already exists"}`,
    },
  },
  {
    title: "Destroy Connection",
    method: "DELETE",
    path: "/ewp/connections",
    stability: "Public/Protocol",
    purpose: "Accepts signed unfollow payload and removes relationship state.",
    auth: "Typed-data signature in body",
    params: ["No path params"],
    body: [
      "typedData.message with followeeAddress, followerAddress, timestamp",
      "signature",
    ],
    response: ["204 empty"],
    errors: [
      "400 INVALID_PAYLOAD",
      "400 INVALID_TIMESTAMP",
      "400 INVALID_SIGNATURE",
    ],
    example:
      'curl -X DELETE https://node.example.com/ewp/connections -H \'Content-Type: application/json\' -d \'{"typedData":{},"signature":"0x..."}\'',
  },
  {
    title: "Publication Index",
    method: "GET",
    path: "/ewp/publications",
    stability: "Public/Protocol",
    purpose: "Returns pageable publication metadata for node-owned content.",
    auth: "None",
    params: [
      "Query: since (ISO datetime)",
      "Query: limit (1..1000)",
      "Query: page (>=1)",
    ],
    body: ["No request body"],
    response: [
      "200 { data: Publication[], pagination: { page, limit, total, totalPages, hasNextPage, hasPrevPage } }",
    ],
    errors: [
      "400 INVALID_LIMIT",
      "400 INVALID_PAGE",
      "400 INVALID_SINCE_FORMAT",
      "500 INTERNAL_ERROR",
    ],
    example:
      "curl 'https://node.example.com/ewp/publications?since=2026-01-01T00:00:00.000Z&limit=50&page=1'",
    jsonResponse: `{
  "data": [
    {
      "content_hash": "0xabc123...",
      "title": "My First Publication",
      "description": "Introduction to my blog",
      "created_at": "2026-01-15T10:30:00.000Z",
      "updated_at": "2026-01-15T10:30:00.000Z"
    },
    {
      "content_hash": "0xdef456...",
      "title": "Second Post",
      "description": "More thoughts",
      "created_at": "2026-02-01T14:00:00.000Z",
      "updated_at": "2026-02-01T14:00:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 2,
    "totalPages": 1,
    "hasNextPage": false,
    "hasPrevPage": false
  }
}`,
  },
  {
    title: "Content Fetch",
    method: "GET",
    path: "/ewp/contents/:content_hash",
    stability: "Public/Protocol",
    purpose:
      "Fetches markdown or binary content by content hash with optional timestamp and thumbnail options.",
    auth: "None",
    params: [
      "Path: content_hash",
      "Query: timestamp (unix seconds)",
      "Query: thumb (sm|md|lg for images)",
    ],
    body: ["No request body"],
    response: [
      "200 markdown or file stream with range support and metadata headers",
    ],
    errors: [
      "400 INVALID_TIMESTAMP",
      "400 INVALID_THUMBNAIL_SIZE",
      "404 PUBLICATION_NOT_FOUND",
      "404 CONTENT_NOT_FOUND",
      "500 INTERNAL_ERROR",
    ],
    example:
      "curl -L 'https://node.example.com/ewp/contents/0xCONTENT_HASH?thumb=md' --output content.bin",
    responseHeaders: `Content-Type: text/markdown; charset=utf-8
X-Content-Hash: 0xabc123...
X-Created-At: 2026-01-15T10:30:00.000Z
X-Updated-At: 2026-01-15T10:30:00.000Z
Content-Length: 1234`,
  },
  {
    title: "Replication Ingest",
    method: "POST",
    path: "/ewp/replications",
    stability: "Public/Protocol",
    purpose:
      "Accepts signed replication requests from followed publishers and syncs publication content.",
    auth: "Connection relationship + typed-data signature",
    params: ["No path params"],
    body: [
      "typedData.message with contentHash, publisherAddress, timestamp",
      "signature",
    ],
    response: ["201 { status: replicated }"],
    errors: [
      "400 INVALID_PAYLOAD",
      "400 CONTENT_HASH_MISMATCH",
      "400 CONTENT_DESCRIPTION_MISSING",
      "400 INVALID_SIGNATURE",
      "401 NOT_FOLLOWING",
      "409 REPLICATION_ALREADY_EXISTS",
      "500 INTERNAL_ERROR",
    ],
    example:
      'curl -X POST https://node.example.com/ewp/replications -H \'Content-Type: application/json\' -d \'{"typedData":{},"signature":"0x..."}\'',
    jsonRequest: `{
  "typedData": {
    "domain": {
      "name": "Epress",
      "version": "1",
      "chainId": 1
    },
    "types": {
      "Replication": [
        { "name": "contentHash", "type": "bytes32" },
        { "name": "publisherAddress", "type": "address" },
        { "name": "timestamp", "type": "uint256" }
      ]
    },
    "primaryType": "Replication",
    "message": {
      "contentHash": "0xabc123...",
      "publisherAddress": "0xpublisher...",
      "timestamp": 1705312800
    }
  },
  "signature": "0x3040..."
}`,
    jsonResponse: `{
  "status": "replicated"
}`,
    errorExamples: {
      "401 NOT_FOLLOWING": `{"error": "NOT_FOLLOWING", "message": "You must follow this node before replicating"}`,
      "409 REPLICATION_ALREADY_EXISTS": `{"error": "REPLICATION_ALREADY_EXISTS", "message": "Content already replicated"}`,
    },
  },
  {
    title: "Remote Node Profile Update",
    method: "PATCH",
    path: "/ewp/nodes/:address",
    stability: "Public/Protocol",
    purpose:
      "Accepts signed profile update payloads and applies updates only when timestamp is newer.",
    auth: "Typed-data signature",
    params: ["Path: address (publisher address)"],
    body: [
      "typedData.message with publisherAddress, url, title, description, timestamp",
      "signature",
    ],
    response: ["204 empty"],
    errors: [
      "400 INVALID_PAYLOAD",
      "400 ADDRESS_MISMATCH",
      "400 INVALID_ADDRESS",
      "400 INVALID_SIGNATURE",
    ],
    example:
      'curl -X PATCH https://node.example.com/ewp/nodes/0xPublisher -H \'Content-Type: application/json\' -d \'{"typedData":{},"signature":"0x..."}\'',
    jsonRequest: `{
  "typedData": {
    "domain": {
      "name": "Epress",
      "version": "1",
      "chainId": 1
    },
    "types": {
      "ProfileUpdate": [
        { "name": "publisherAddress", "type": "address" },
        { "name": "url", "type": "string" },
        { "name": "title", "type": "string" },
        { "name": "description", "type": "string" },
        { "name": "timestamp", "type": "uint256" }
      ]
    },
    "primaryType": "ProfileUpdate",
    "message": {
      "publisherAddress": "0x1234...",
      "url": "https://updated.example.com",
      "title": "Updated Node Title",
      "description": "New description",
      "timestamp": 1705312800
    }
  },
  "signature": "0x3040..."
}`,
  },
]

export default function EwpReferencePage() {
  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white">EWP API Reference</h1>
        <p className="mt-3 leading-7 text-gray-300">
          Endpoint-level reference for the current{" "}
          <span className="text-white">epress world protocol</span> baseline.
          These interfaces define interoperable behavior between nodes.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/docs/developer/ewp/eip712/typed-data-catalog"
            className="btn-secondary"
          >
            Typed Data Catalog
          </Link>
          <Link
            href="/docs/developer/ewp/eip712/verification-rules"
            className="btn-secondary"
          >
            Verification Rules
          </Link>
        </div>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">
          Error Response Format
        </h2>
        <p className="mt-2 text-sm text-gray-300">
          All errors follow a consistent JSON structure:
        </p>
        <pre className="mt-4 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4 text-primary text-sm">
          <code>{`{
  "error": "ERROR_CODE",
  "message": "Human-readable description"
}`}</code>
        </pre>
      </article>

      {operations.map((item) => (
        <OperationCard key={`${item.method}-${item.path}`} {...item} />
      ))}
    </div>
  )
}
