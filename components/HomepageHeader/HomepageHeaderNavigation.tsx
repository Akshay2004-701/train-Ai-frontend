"use client"

import { homepageNavItems } from "@/components/HomepageHeader/HomepageHeader"
import dynamic from "next/dynamic"
import Link from "next/link"

const SignUpButton = dynamic(
  () => import("@/features/SignUpButton/SignUpButton").then((mod) => mod.SignUpButton),
  {
    ssr: false,
  }
)

export const HomepageHeaderNavigation = () => {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {homepageNavItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="font-inter text-md text-gray-500 hover:text-gray-900 transition-colors"
        >
          {item.label}
        </Link>
      ))}
      <SignUpButton />
    </nav>
  )
}
