import Link from "next/link"

export default function EwpQuickStartPage() {
  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white">EWP Quick Start</h1>
        <p className="mt-3 leading-7 text-gray-300">
          Implement a minimal EWP-compatible node in under an hour. This guide
          walks through the essential endpoints and signing requirements.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">Prerequisites</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
          <li>Familiarity with HTTP APIs and JSON</li>
          <li>Understanding of elliptic curve signatures (secp256k1)</li>
          <li>Access to an Ethereum wallet for signing</li>
        </ul>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">
          Step 1: Implement Profile Endpoint
        </h2>
        <p className="mt-2 text-gray-300">
          The profile endpoint returns your node public metadata.
        </p>
        <div className="mt-4 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4">
          <p className="text-sm text-dark-muted">GET /ewp/profile</p>
          <pre className="mt-2 text-sm text-primary">
            <code>{`{
  "address": "0xYourWalletAddress",
  "title": "My EWP Node",
  "url": "https://my-node.example.com",
  "description": "A minimal EWP implementation",
  "created_at": "2026-01-01T00:00:00.000Z",
  "updated_at": "2026-03-01T00:00:00.000Z"
}`}</code>
          </pre>
        </div>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">
          Step 2: Implement Publications Index
        </h2>
        <p className="mt-2 text-gray-300">
          Return pageable publication metadata for your node content.
        </p>
        <div className="mt-4 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4">
          <p className="text-sm text-dark-muted">
            GET /ewp/publications?since=2026-01-01&amp;limit=50&amp;page=1
          </p>
          <pre className="mt-2 text-sm text-primary">
            <code>{`{
  "data": [
    {
      "content_hash": "0xHashOfContent",
      "title": "My First Post",
      "created_at": "2026-01-15T10:30:00.000Z",
      "updated_at": "2026-01-15T10:30:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 1,
    "totalPages": 1,
    "hasNextPage": false,
    "hasPrevPage": false
  }
}`}</code>
          </pre>
        </div>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">
          Step 3: Implement Content Fetch
        </h2>
        <p className="mt-2 text-gray-300">
          Return actual content by hash. Support range requests for large files.
        </p>
        <div className="mt-4 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4">
          <p className="text-sm text-dark-muted">
            GET /ewp/contents/:content_hash
          </p>
          <pre className="mt-2 text-sm text-primary">
            <code>{`# Response headers
Content-Type: text/markdown; charset=utf-8
X-Content-Hash: 0xHashOfContent
X-Created-At: 2026-01-15T10:30:00.000Z

# Response body: markdown content or binary`}</code>
          </pre>
        </div>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">
          Step 4: Implement EIP-712 Signing
        </h2>
        <p className="mt-2 text-gray-300">
          Sign publications with EIP-712 typed data. This proves authorship.
        </p>
        <div className="mt-4 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4">
          <p className="text-sm text-dark-muted">Typed Data Structure</p>
          <pre className="mt-2 text-sm text-primary">
            <code>{`{
  "domain": {
    "name": "Epress",
    "version": "1",
    "chainId": 1
  },
  "types": {
    "Publication": [
      { "name": "contentHash", "type": "bytes32" },
      { "name": "authorAddress", "type": "address" },
      { "name": "timestamp", "type": "uint256" }
    ]
  },
  "primaryType": "Publication",
  "message": {
    "contentHash": "0xHashOfContent",
    "authorAddress": "0xYourAddress",
    "timestamp": 1705312800
  }
}`}</code>
          </pre>
        </div>
        <p className="mt-3 text-sm text-gray-300">
          See the{" "}
          <Link
            href="/docs/developer/ewp/eip712"
            className="text-primary hover:underline"
          >
            EIP-712 Signing Spec
          </Link>{" "}
          for complete type definitions.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">
          Step 5: Handle Connection Requests
        </h2>
        <p className="mt-2 text-gray-300">
          Accept follow requests from other nodes with signed handshakes.
        </p>
        <div className="mt-4 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4">
          <p className="text-sm text-dark-muted">POST /ewp/connections</p>
          <pre className="mt-2 text-sm text-primary">
            <code>{`# Request body
{
  "typedData": { /* EIP-712 Connection typed data */ },
  "signature": "0x..."
}

# Success response
{ "status": "created" }`}</code>
          </pre>
        </div>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">
          Step 6: Verify Incoming Signatures
        </h2>
        <p className="mt-2 text-gray-300">
          Always verify signatures on incoming requests:
        </p>
        <ol className="mt-3 list-decimal space-y-2 pl-6 text-gray-300">
          <li>Recover signer address from signature and typed data</li>
          <li>Verify signer matches the claimed address in the message</li>
          <li>Check timestamp is recent (prevent replay attacks)</li>
          <li>Verify the domain matches Epress domain spec</li>
        </ol>
      </article>

      <article className="rounded-xl border border-primary/35 bg-primary/10 p-6">
        <h2 className="text-xl font-semibold text-white">
          Testing Your Implementation
        </h2>
        <p className="mt-2 text-gray-300">
          Test against the reference epress node implementation:
        </p>
        <pre className="mt-4 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4 text-primary">
          <code>{`# Get profile
curl https://reference-node.example.com/ewp/profile

# Get publications
curl 'https://reference-node.example.com/ewp/publications?limit=10'

# Get content
curl 'https://reference-node.example.com/ewp/contents/0xHash'`}</code>
        </pre>
      </article>

      <div className="flex flex-wrap gap-3">
        <Link href="/docs/developer/ewp/reference" className="btn-primary">
          Full API Reference
        </Link>
        <Link href="/docs/developer/ewp/eip712" className="btn-secondary">
          EIP-712 Signing Spec
        </Link>
      </div>
    </div>
  )
}
