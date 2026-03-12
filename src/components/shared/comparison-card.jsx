import { cn } from "@/lib/utils"

export function ComparisonCard({
  variant = "default",
  title,
  children,
  caption,
  className,
}) {
  const variantStyles = {
    default: "landing-card",
    warning: "landing-card-warning",
    success: "landing-card-success",
  }

  return (
    <div className={cn(variantStyles[variant], className)}>
      {title && (
        <h3 className="font-sans text-lg font-semibold mb-4">{title}</h3>
      )}
      <div className="mb-4">{children}</div>
      {caption && <p className="text-sm text-dark-muted">{caption}</p>}
    </div>
  )
}
