"use client"

import { useState } from "react"
import classNames from "classnames"

interface AccordionProps {
  title: string
  content: string
  defaultOpen?: boolean
}

export const Accordion = ({ title, content, defaultOpen = false }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="[&:not(:last-child)]:border-b border-[#C7C7C7] py-6 px-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left"
        aria-expanded={isOpen}
      >
        <span
          className={classNames(
            "font-normal text-2xl leading-[29px] tracking-[-0.03em] font-inter flex items-center",
            {
              "text-black": !isOpen,
              "text-primary": isOpen,
            }
          )}
        >
          {title}
        </span>
        <svg
          className={classNames(
            "w-5 h-5 transition-transform duration-200 text-primary",
            isOpen ? "rotate-180" : ""
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={classNames(
          "overflow-hidden transition-all duration-200",
          isOpen ? "max-h-96" : "max-h-0"
        )}
        aria-hidden={!isOpen}
      >
        <div
          className={classNames(
            "font-normal text-xl leading-6 tracking-[-0.03em] text-[#6E6E6E] font-inter pt-8 transition-opacity duration-200",
            {
              "opacity-100": isOpen,
              "opacity-0": !isOpen,
            }
          )}
        >
          {content}
        </div>
      </div>
    </div>
  )
}
