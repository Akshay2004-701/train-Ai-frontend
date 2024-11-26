"use client"

import classNames from "classnames"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface DashboardNavigationLinkProps {
  icon: React.ReactNode
  label: string
  href: string
}

export const DashboardNavigationLink = ({ icon, label, href }: DashboardNavigationLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname.startsWith(href) && (href === "/" ? pathname === "/" : true)

  return (
    <Link
      href={href}
      className={classNames("flex flex-1 flex-row px-10 py-4 rounded-lg hover:text-primary", {
        "border border-primary text-primary bg-[#FFE1DA]/[0.21]": isActive,
        "text-icon": !isActive,
      })}
    >
      {icon}
      <span className="ml-4 text-sm font-medium">{label}</span>
    </Link>
  )
}
