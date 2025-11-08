import Link from 'next/link'
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  isActive?: boolean
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ href, children, className, isActive, ...props }, ref) => {
    return (
      <Link
        href={href}
        ref={ref}
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          isActive ? "text-primary" : "text-muted-foreground",
          className
        )}
        {...props}
      >
        {children}
      </Link>
    )
  }
)

NavLink.displayName = "NavLink"

export { NavLink }