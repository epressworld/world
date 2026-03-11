import { cn } from "@/lib/utils"

export function MiniDiagram({ children, className }) {
  return <div className={cn("diagram-frame", className)}>{children}</div>
}
