"use client"

import mermaid from "mermaid"
import { useEffect, useId, useState } from "react"

let initialized = false

export function MermaidDiagram({ chart }) {
  const id = useId().replace(/:/g, "")
  const [svg, setSvg] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    let active = true
    const render = async () => {
      try {
        if (!initialized) {
          mermaid.initialize({
            startOnLoad: false,
            theme: "dark",
            securityLevel: "loose",
          })
          initialized = true
        }
        const { svg: output } = await mermaid.render(`mermaid-${id}`, chart)
        if (active) {
          setSvg(output)
          setError("")
        }
      } catch (err) {
        if (active) {
          setError(err instanceof Error ? err.message : "Mermaid render failed")
        }
      }
    }
    render()
    return () => {
      active = false
    }
  }, [chart, id])

  if (error) {
    return (
      <pre className="my-6 overflow-x-auto rounded-xl border border-dark-border bg-dark-bg p-4 text-sm text-gray-300">
        <code>{chart}</code>
      </pre>
    )
  }

  return <div className="mermaid" dangerouslySetInnerHTML={{ __html: svg }} />
}
