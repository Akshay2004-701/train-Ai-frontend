"use client"

import Link from "next/link"
import { ReactNode } from "react"
import { useParams, usePathname } from "next/navigation"
import classNames from "classnames"

interface ModelNavigationLinkProps {
  children: ReactNode
  href: string
}

export const ModelNavigationLink = ({ children, href }: ModelNavigationLinkProps) => {
  const pathname = usePathname()
  const params = useParams()
  const fullHref = `/models/${params.slug}${href}`
  const isActive = pathname === fullHref

  return (
    <Link
      href={fullHref}
      className={classNames(
        "inline-block py-4 font-inter text-lg border-b-2 transition-colors mb-[-1px]",
        isActive
          ? "text-primary border-primary"
          : "text-[#6E6E6E] border-transparent hover:text-primary"
      )}
    >
      {children}
    </Link>
  )
}
