import Link from "next/link"

function FlowCard({ title, description, children }) {
  return (
    <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="mt-2 text-sm text-gray-300">{description}</p>
      <div className="mt-4 rounded-lg border border-dark-border bg-dark-bg/50 p-3">
        {children}
      </div>
    </article>
  )
}

function FollowFlowChart() {
  return (
    <svg
      viewBox="0 0 860 210"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full"
    >
      <rect
        x="20"
        y="60"
        width="220"
        height="90"
        rx="12"
        fill="#171717"
        stroke="#3f3f46"
      />
      <text x="130" y="95" textAnchor="middle" fill="#fafafa" fontSize="14">
        Follower Node
      </text>
      <text x="130" y="116" textAnchor="middle" fill="#a1a1aa" fontSize="11">
        sign typedData + signature
      </text>

      <rect
        x="320"
        y="60"
        width="220"
        height="90"
        rx="12"
        fill="#171717"
        stroke="#3f3f46"
      />
      <text x="430" y="95" textAnchor="middle" fill="#fafafa" fontSize="14">
        Followee Node
      </text>
      <text x="430" y="116" textAnchor="middle" fill="#a1a1aa" fontSize="11">
        verify signature + timestamp
      </text>

      <rect
        x="620"
        y="60"
        width="220"
        height="90"
        rx="12"
        fill="#171717"
        stroke="#3f3f46"
      />
      <text x="730" y="95" textAnchor="middle" fill="#fafafa" fontSize="14">
        Relationship State
      </text>
      <text x="730" y="116" textAnchor="middle" fill="#a1a1aa" fontSize="11">
        connection persisted
      </text>

      <path d="M240 105 L320 105" stroke="#fbbf24" strokeWidth="2" />
      <polygon points="320,105 309,99 309,111" fill="#fbbf24" />
      <path d="M540 105 L620 105" stroke="#60a5fa" strokeWidth="2" />
      <polygon points="620,105 609,99 609,111" fill="#60a5fa" />

      <text x="280" y="93" textAnchor="middle" fill="#fbbf24" fontSize="10">
        POST /ewp/connections
      </text>
      <text x="580" y="93" textAnchor="middle" fill="#93c5fd" fontSize="10">
        201 created
      </text>
    </svg>
  )
}

function ReplicationFlowChart() {
  return (
    <svg
      viewBox="0 0 860 210"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full"
    >
      <rect
        x="20"
        y="60"
        width="220"
        height="90"
        rx="12"
        fill="#171717"
        stroke="#3f3f46"
      />
      <text x="130" y="95" textAnchor="middle" fill="#fafafa" fontSize="14">
        Publisher Node
      </text>
      <text x="130" y="116" textAnchor="middle" fill="#a1a1aa" fontSize="11">
        sign statementOfSource
      </text>

      <rect
        x="320"
        y="60"
        width="220"
        height="90"
        rx="12"
        fill="#171717"
        stroke="#3f3f46"
      />
      <text x="430" y="95" textAnchor="middle" fill="#fafafa" fontSize="14">
        Follower Node
      </text>
      <text x="430" y="116" textAnchor="middle" fill="#a1a1aa" fontSize="11">
        check follow + verify payload
      </text>

      <rect
        x="620"
        y="60"
        width="220"
        height="90"
        rx="12"
        fill="#171717"
        stroke="#3f3f46"
      />
      <text x="730" y="95" textAnchor="middle" fill="#fafafa" fontSize="14">
        Local Timeline
      </text>
      <text x="730" y="116" textAnchor="middle" fill="#a1a1aa" fontSize="11">
        pull content and persist
      </text>

      <path d="M240 105 L320 105" stroke="#fbbf24" strokeWidth="2" />
      <polygon points="320,105 309,99 309,111" fill="#fbbf24" />
      <path d="M540 105 L620 105" stroke="#60a5fa" strokeWidth="2" />
      <polygon points="620,105 609,99 609,111" fill="#60a5fa" />

      <text x="280" y="93" textAnchor="middle" fill="#fbbf24" fontSize="10">
        POST /ewp/replications
      </text>
      <text x="580" y="93" textAnchor="middle" fill="#93c5fd" fontSize="10">
        201 replicated
      </text>
    </svg>
  )
}

function ProfileSyncChart() {
  return (
    <svg
      viewBox="0 0 860 210"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full"
    >
      <rect
        x="20"
        y="60"
        width="220"
        height="90"
        rx="12"
        fill="#171717"
        stroke="#3f3f46"
      />
      <text x="130" y="95" textAnchor="middle" fill="#fafafa" fontSize="14">
        Publisher Node
      </text>
      <text x="130" y="116" textAnchor="middle" fill="#a1a1aa" fontSize="11">
        sign profile payload
      </text>

      <rect
        x="320"
        y="60"
        width="220"
        height="90"
        rx="12"
        fill="#171717"
        stroke="#3f3f46"
      />
      <text x="430" y="95" textAnchor="middle" fill="#fafafa" fontSize="14">
        Peer Node
      </text>
      <text x="430" y="116" textAnchor="middle" fill="#a1a1aa" fontSize="11">
        verify signer + timestamp
      </text>

      <rect
        x="620"
        y="60"
        width="220"
        height="90"
        rx="12"
        fill="#171717"
        stroke="#3f3f46"
      />
      <text x="730" y="95" textAnchor="middle" fill="#fafafa" fontSize="14">
        Node Cache
      </text>
      <text x="730" y="116" textAnchor="middle" fill="#a1a1aa" fontSize="11">
        update if newer only
      </text>

      <path d="M240 105 L320 105" stroke="#fbbf24" strokeWidth="2" />
      <polygon points="320,105 309,99 309,111" fill="#fbbf24" />
      <path d="M540 105 L620 105" stroke="#60a5fa" strokeWidth="2" />
      <polygon points="620,105 609,99 609,111" fill="#60a5fa" />

      <text x="280" y="93" textAnchor="middle" fill="#fbbf24" fontSize="10">
        PATCH /ewp/nodes/:address
      </text>
      <text x="580" y="93" textAnchor="middle" fill="#93c5fd" fontSize="10">
        204 acknowledged
      </text>
    </svg>
  )
}

function UnfollowFlowChart() {
  return (
    <svg
      viewBox="0 0 860 210"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full"
    >
      <rect
        x="20"
        y="60"
        width="220"
        height="90"
        rx="12"
        fill="#171717"
        stroke="#3f3f46"
      />
      <text x="130" y="95" textAnchor="middle" fill="#fafafa" fontSize="14">
        Initiator Node
      </text>
      <text x="130" y="116" textAnchor="middle" fill="#a1a1aa" fontSize="11">
        sign unfollow payload
      </text>

      <rect
        x="320"
        y="60"
        width="220"
        height="90"
        rx="12"
        fill="#171717"
        stroke="#3f3f46"
      />
      <text x="430" y="95" textAnchor="middle" fill="#fafafa" fontSize="14">
        Receiver Node
      </text>
      <text x="430" y="116" textAnchor="middle" fill="#a1a1aa" fontSize="11">
        verify signer orientation
      </text>

      <rect
        x="620"
        y="60"
        width="220"
        height="90"
        rx="12"
        fill="#171717"
        stroke="#3f3f46"
      />
      <text x="730" y="95" textAnchor="middle" fill="#fafafa" fontSize="14">
        Connection Removed
      </text>
      <text x="730" y="116" textAnchor="middle" fill="#a1a1aa" fontSize="11">
        state transition complete
      </text>

      <path d="M240 105 L320 105" stroke="#fbbf24" strokeWidth="2" />
      <polygon points="320,105 309,99 309,111" fill="#fbbf24" />
      <path d="M540 105 L620 105" stroke="#60a5fa" strokeWidth="2" />
      <polygon points="620,105 609,99 609,111" fill="#60a5fa" />

      <text x="280" y="93" textAnchor="middle" fill="#fbbf24" fontSize="10">
        DELETE /ewp/connections
      </text>
      <text x="580" y="93" textAnchor="middle" fill="#93c5fd" fontSize="10">
        204 acknowledged
      </text>
    </svg>
  )
}

export default function EwpFlowsPage() {
  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white">EWP Core Flows</h1>
        <p className="mt-3 leading-7 text-gray-300">
          These flows describe how{" "}
          <span className="text-white">epress world protocol</span> is executed
          by interoperating <span className="text-white">epress node</span>{" "}
          instances.
        </p>
        <div className="mt-4">
          <Link
            href="/docs/developer/ewp/eip712/verification-rules"
            className="btn-secondary"
          >
            View EIP-712 Verification Rules
          </Link>
        </div>
      </article>

      <FlowCard
        title="Follow Handshake Flow"
        description="Follower signs a follow intent, followee verifies trust conditions, then both nodes persist relationship state."
      >
        <FollowFlowChart />
      </FlowCard>

      <FlowCard
        title="Content Replication Flow"
        description="Signed publication payloads are pushed, verified by followers, then resolved into local timeline data."
      >
        <ReplicationFlowChart />
      </FlowCard>

      <FlowCard
        title="Node Profile Sync Flow"
        description="Profile changes are broadcast as signed updates and applied only when the incoming timestamp is newer."
      >
        <ProfileSyncChart />
      </FlowCard>

      <FlowCard
        title="Unfollow Flow"
        description="Unfollow requests are signed and verified with role-aware orientation, then connection state is removed."
      >
        <UnfollowFlowChart />
      </FlowCard>
    </div>
  )
}
