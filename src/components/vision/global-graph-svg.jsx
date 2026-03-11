export function GlobalGraphSvg() {
  return (
    <svg
      viewBox="0 0 600 320"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="globeGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a2a1a" />
          <stop offset="70%" stopColor="#0f1a12" />
          <stop offset="100%" stopColor="#0a0f0a" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <ellipse
        cx="300"
        cy="160"
        rx="250"
        ry="130"
        fill="url(#globeGrad)"
        stroke="#34D399"
        strokeOpacity="0.2"
      />

      <ellipse
        cx="300"
        cy="160"
        rx="250"
        ry="30"
        fill="none"
        stroke="#34D399"
        strokeOpacity="0.15"
      />
      <ellipse
        cx="300"
        cy="160"
        rx="180"
        ry="100"
        fill="none"
        stroke="#34D399"
        strokeOpacity="0.1"
      />
      <ellipse
        cx="300"
        cy="160"
        rx="100"
        ry="60"
        fill="none"
        stroke="#34D399"
        strokeOpacity="0.1"
      />
      <line
        x1="50"
        y1="160"
        x2="550"
        y2="160"
        stroke="#34D399"
        strokeOpacity="0.1"
      />
      <line
        x1="300"
        y1="30"
        x2="300"
        y2="290"
        stroke="#34D399"
        strokeOpacity="0.1"
      />

      {[
        [120, 80],
        [200, 60],
        [280, 50],
        [360, 55],
        [440, 70],
        [500, 90],
        [80, 130],
        [160, 110],
        [240, 100],
        [320, 95],
        [400, 105],
        [480, 125],
        [70, 180],
        [140, 170],
        [220, 160],
        [300, 155],
        [380, 165],
        [460, 175],
        [530, 190],
        [90, 230],
        [170, 220],
        [250, 210],
        [330, 215],
        [410, 225],
        [490, 240],
        [130, 270],
        [210, 260],
        [290, 255],
        [370, 265],
        [450, 280],
      ].map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r="6"
          fill="#0f1a12"
          stroke="#F7931A"
          strokeWidth="1"
          filter="url(#glow)"
        />
      ))}

      {[
        [
          [120, 80],
          [200, 60],
        ],
        [
          [200, 60],
          [280, 50],
        ],
        [
          [280, 50],
          [360, 55],
        ],
        [
          [360, 55],
          [440, 70],
        ],
        [
          [160, 110],
          [240, 100],
        ],
        [
          [240, 100],
          [320, 95],
        ],
        [
          [320, 95],
          [400, 105],
        ],
        [
          [140, 170],
          [220, 160],
        ],
        [
          [220, 160],
          [300, 155],
        ],
        [
          [300, 155],
          [380, 165],
        ],
        [
          [380, 165],
          [460, 175],
        ],
        [
          [170, 220],
          [250, 210],
        ],
        [
          [250, 210],
          [330, 215],
        ],
        [
          [330, 215],
          [410, 225],
        ],
        [
          [120, 80],
          [160, 110],
        ],
        [
          [200, 60],
          [240, 100],
        ],
        [
          [280, 50],
          [320, 95],
        ],
        [
          [360, 55],
          [400, 105],
        ],
        [
          [440, 70],
          [480, 125],
        ],
        [
          [160, 110],
          [140, 170],
        ],
        [
          [240, 100],
          [220, 160],
        ],
        [
          [320, 95],
          [300, 155],
        ],
        [
          [400, 105],
          [380, 165],
        ],
        [
          [480, 125],
          [460, 175],
        ],
        [
          [140, 170],
          [170, 220],
        ],
        [
          [220, 160],
          [250, 210],
        ],
        [
          [300, 155],
          [330, 215],
        ],
        [
          [380, 165],
          [410, 225],
        ],
        [
          [460, 175],
          [490, 240],
        ],
        [
          [200, 60],
          [160, 110],
        ],
        [
          [280, 50],
          [240, 100],
        ],
        [
          [360, 55],
          [320, 95],
        ],
        [
          [440, 70],
          [400, 105],
        ],
        [
          [170, 220],
          [210, 260],
        ],
        [
          [250, 210],
          [290, 255],
        ],
        [
          [330, 215],
          [370, 265],
        ],
        [
          [410, 225],
          [450, 280],
        ],
        [
          [120, 80],
          [240, 100],
        ],
        [
          [280, 50],
          [400, 105],
        ],
        [
          [360, 55],
          [240, 100],
        ],
        [
          [140, 170],
          [300, 155],
        ],
        [
          [220, 160],
          [380, 165],
        ],
        [
          [460, 175],
          [300, 155],
        ],
        [
          [170, 220],
          [330, 215],
        ],
        [
          [250, 210],
          [410, 225],
        ],
      ].map(([[x1, y1], [x2, y2]], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#F7931A"
          strokeWidth="0.5"
          strokeOpacity="0.3"
        />
      ))}

      <circle cx="300" cy="155" r="10" fill="#F7931A" filter="url(#glow)">
        <animate
          attributeName="r"
          values="10;12;10"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

      <text
        x="300"
        y="310"
        textAnchor="middle"
        fill="#F7931A"
        fontSize="11"
        fontFamily="monospace"
      >
        A global network of thought — connected by you
      </text>
    </svg>
  )
}
