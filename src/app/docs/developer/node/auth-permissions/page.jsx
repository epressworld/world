export default function NodeAuthPermissionsPage() {
  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white">Auth and Permissions</h1>
        <p className="mt-3 leading-7 text-gray-300">
          <span className="text-white">epress node</span> combines SIWE
          authentication, JWT audience scoping, and operation-level permission
          checks via <span className="font-mono">request.cani(permission)</span>
          .
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">SIWE Sign-In Flow</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-6 text-gray-300">
          <li>
            Client requests SIWE message through GraphQL query{" "}
            <span className="font-mono">getSiweMessage</span>.
          </li>
          <li>Node issues nonce JWT encoded in SIWE nonce field.</li>
          <li>
            Client signs SIWE message and submits to{" "}
            <span className="font-mono">signInWithEthereum</span>.
          </li>
          <li>
            Server verifies SIWE signature, nonce JWT, and owner address before
            issuing JWT token.
          </li>
        </ol>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">JWT Audience Model</h2>
        <div className="mt-3 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-dark-border text-left text-gray-300">
                <th className="px-2 py-2">aud</th>
                <th className="px-2 py-2">Intent</th>
                <th className="px-2 py-2">Verification</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-dark-border/60">
                <td className="px-2 py-2 font-mono text-primary">client</td>
                <td className="px-2 py-2">Owner session token</td>
                <td className="px-2 py-2">
                  DB token verification + owner address check
                </td>
              </tr>
              <tr className="border-b border-dark-border/60">
                <td className="px-2 py-2 font-mono text-primary">
                  integration
                </td>
                <td className="px-2 py-2">Scoped integration token</td>
                <td className="px-2 py-2">
                  DB token verification + scope check
                </td>
              </tr>
              <tr className="border-b border-dark-border/60">
                <td className="px-2 py-2 font-mono text-primary">nonce</td>
                <td className="px-2 py-2">SIWE challenge nonce</td>
                <td className="px-2 py-2">
                  Signature and expiration verification
                </td>
              </tr>
              <tr>
                <td className="px-2 py-2 font-mono text-primary">comment</td>
                <td className="px-2 py-2">Email comment confirm token</td>
                <td className="px-2 py-2">
                  Signature and expiration verification
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">Permission Checks</h2>
        <p className="mt-2 text-gray-300">
          Route and GraphQL resolvers call{" "}
          <span className="font-mono">request.cani(permission)</span>. For
          <span className="font-mono"> client</span> audience it returns full
          access; for
          <span className="font-mono"> integration</span> audience it validates
          requested permission against JWT scope.
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
          <li>
            Publication creation requires create permission and valid owner
            identity.
          </li>
          <li>
            Search and fetch permissions gate visibility of non-public or
            non-owned data.
          </li>
          <li>
            Sensitive settings fields are conditionally exposed by auth context.
          </li>
        </ul>
      </article>
    </div>
  )
}
