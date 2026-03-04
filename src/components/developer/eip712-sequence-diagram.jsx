export function Eip712SequenceDiagram({ title, nodes, exchanges, footer }) {
  const width = Math.max(880, nodes.length * 250);
  const topY = 46;
  const nodeY = 74;
  const lineTop = 124;
  const lineBottom = 286;
  const baseX = 110;
  const step = (width - 220) / Math.max(nodes.length - 1, 1);
  const nodeX = nodes.map((_, index) => baseX + step * index);

  return (
    <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-5">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="mt-4 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg/50 p-3">
        <svg viewBox={`0 0 ${width} 340`} xmlns="http://www.w3.org/2000/svg" className="h-auto min-w-[760px] w-full">
          <rect x="8" y="8" width={width - 16} height="324" rx="12" fill="#0f0f0f" stroke="#27272a" />

          {nodes.map((node, index) => (
            <g key={`${title}-node-${node.label}`}>
              <rect x={nodeX[index] - 82} y={nodeY} width="164" height="42" rx="10" fill="#171717" stroke="#3f3f46" />
              <text x={nodeX[index]} y="100" textAnchor="middle" fill="#fafafa" fontSize="12">{node.label}</text>
              <line x1={nodeX[index]} y1={lineTop} x2={nodeX[index]} y2={lineBottom} stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="5 5" />
            </g>
          ))}

          {exchanges.map((exchange, idx) => {
            const fromX = nodeX[exchange.from];
            const toX = nodeX[exchange.to];
            const y = 152 + idx * 44;
            const color = exchange.tone === "blue" ? "#60a5fa" : "#fbbf24";
            const arrowLeft = toX < fromX;

            return (
              <g key={`${title}-exchange-${exchange.label}-${idx}`}>
                <line x1={fromX} y1={y} x2={toX} y2={y} stroke={color} strokeWidth="2" />
                {arrowLeft ? (
                  <polygon points={`${toX},${y} ${toX + 10},${y - 5} ${toX + 10},${y + 5}`} fill={color} />
                ) : (
                  <polygon points={`${toX},${y} ${toX - 10},${y - 5} ${toX - 10},${y + 5}`} fill={color} />
                )}
                <text x={(fromX + toX) / 2} y={y - 7} textAnchor="middle" fill={color} fontSize="10">
                  {exchange.label}
                </text>
              </g>
            );
          })}

          {footer ? (
            <text x={width / 2} y="314" textAnchor="middle" fill="#71717a" fontSize="10">
              {footer}
            </text>
          ) : null}
        </svg>
      </div>
    </article>
  );
}
