"use client"

import { Button } from "@/components/Button/Button"
import { homepageNavItems } from "@/components/HomepageHeader/HomepageHeader"
import Link from "next/link"
import { useRef, useState } from "react"

export const HomepageHeaderMobileNavigation = () => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="md:hidden">
        <button
          ref={buttonRef}
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div
          className="absolute left-0 right-0 md:hidden bg-white shadow-lg z-50"
          style={{
            top: buttonRef.current
              ? buttonRef.current.offsetTop + buttonRef.current.offsetHeight
              : 0,
          }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-w-7xl mx-auto">
            {homepageNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-md font-inter text-[18px] leading-[22px] text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              >
                {item.label}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button fullWidth>Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
