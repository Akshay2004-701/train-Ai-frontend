import { ReactNode } from "react"
import classNames from "classnames"

interface TagPillProps {
  children: ReactNode
  className?: string
  isActive?: boolean
  size?: "small" | "medium"
}

export const TagPill = ({
  children,
  className,
  isActive = false,
  size = "medium",
}: TagPillProps) => {
  return (
    <div
      className={classNames(
        "cursor-pointer inline-flex items-center border border-[#C4C4C4] rounded-full font-inter text-base font-normal text-[#6E6E6E] tracking-[-0.03em] hover:border-black hover:text-black",
        {
          "bg-primary-500 text-white border-primary-500": isActive,
          "px-[21px] py-[10px]": size === "medium",
          "px-4 py": size === "small",
        },
        className
      )}
    >
      {children}
    </div>
  )
}
