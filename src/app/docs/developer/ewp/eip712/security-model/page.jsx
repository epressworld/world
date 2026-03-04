import { Eip712SequenceDiagram } from "@/components/developer/eip712-sequence-diagram";

const followFlow = {
  title: "Connection Handshake Security Boundary",
  nodes: [{ label: "Follower Node" }, { label: "Followee Node" }, { label: "Connection Store" }],
  exchanges: [
    { from: 0, to: 1, label: "POST /ewp/connections + typedData", tone: "amber" },
    { from: 1, to: 1, label: "recover signer + check timestamp", tone: "blue" },
    { from: 1, to: 2, label: "persist relationship if valid", tone: "amber" },
  ],
  footer: "Write accepted only after signer binding and freshness checks",
};

const replicationFlow = {
  title: "Replication Security Boundary",
  nodes: [{ label: "Publisher Node" }, { label: "Follower Node" }, { label: "Timeline Store" }],
  exchanges: [
    { from: 0, to: 1, label: "POST /ewp/replications + statementOfSource", tone: "amber" },
    { from: 1, to: 1, label: "verify signature + follow state", tone: "blue" },
    { from: 1, to: 2, label: "fetch content + commit publication", tone: "amber" },
  ],
  footer: "Content enters timeline only when proof and relationship are both valid",
};

const profileFlow = {
  title: "Node Profile Update Security Boundary",
  nodes: [{ label: "Publisher Node" }, { label: "Peer Node" }, { label: "Node Cache" }],
  exchanges: [
    { from: 0, to: 1, label: "PATCH /ewp/nodes/:address + typedData", tone: "amber" },
    { from: 1, to: 1, label: "address match + signer recovery", tone: "blue" },
    { from: 1, to: 2, label: "apply only if timestamp is newer", tone: "amber" },
  ],
  footer: "Monotonic timestamp rule prevents stale profile overwrite",
};

export default function Eip712SecurityModelPage() {
  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white">EIP-712 Security Model</h1>
        <p className="mt-3 leading-7 text-gray-300">
          In <span className="text-white">epress world protocol</span>, signatures are not only identity proofs. They are
          state-transition permissions for node-to-node actions. This model defines where trust is accepted, where payloads
          are rejected, and how replay and tampering risks are constrained.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">Security Guarantees</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <p className="text-sm font-semibold text-white">Signer Binding</p>
            <p className="mt-2 text-sm text-gray-300">
              Recovered signer address must match protocol identity fields inside the message.
            </p>
          </div>
          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <p className="text-sm font-semibold text-white">Replay Resistance</p>
            <p className="mt-2 text-sm text-gray-300">
              Timestamp windows reject expired payloads and stale update attempts.
            </p>
          </div>
          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <p className="text-sm font-semibold text-white">State Isolation</p>
            <p className="mt-2 text-sm text-gray-300">
              Even valid signatures cannot bypass relationship checks, resource checks, or ownership checks.
            </p>
          </div>
        </div>
      </article>

      <Eip712SequenceDiagram
        title={followFlow.title}
        nodes={followFlow.nodes}
        exchanges={followFlow.exchanges}
        footer={followFlow.footer}
      />

      <Eip712SequenceDiagram
        title={replicationFlow.title}
        nodes={replicationFlow.nodes}
        exchanges={replicationFlow.exchanges}
        footer={replicationFlow.footer}
      />

      <Eip712SequenceDiagram
        title={profileFlow.title}
        nodes={profileFlow.nodes}
        exchanges={profileFlow.exchanges}
        footer={profileFlow.footer}
      />
    </div>
  );
}
