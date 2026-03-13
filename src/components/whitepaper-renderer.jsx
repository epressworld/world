import ReactMarkdown from "react-markdown"
import rehypeKatex from "rehype-katex"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import { MermaidDiagram } from "@/components/mermaid-diagram"

export function WhitepaperRenderer({ content }) {
  return (
    <div className="whitepaper-markdown markdown-body leading-relaxed">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeSlug]}
        components={{
          code(props) {
            const { className, children } = props
            const text = String(children).replace(/\n$/, "")
            const match = /language-(\w+)/.exec(className || "")
            const language = match ? match[1] : ""
            if (language === "mermaid") {
              return <MermaidDiagram chart={text} />
            }
            if (className) {
              return <code className={className}>{children}</code>
            }
            return <code>{children}</code>
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
