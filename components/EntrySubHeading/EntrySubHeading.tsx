import { ReactNode } from "react"

interface EntrySubHeadingProps {
  title: string
  children: ReactNode
}

export const EntrySubHeading = ({ title, children }: EntrySubHeadingProps) => {
  return (
    <div className="flex flex-row items-start justify-between gap-10">
      <div className="flex-1">
        <h2 className="mb-6 font-inter text-2xl font-medium text-black">{title}</h2>
        <div className="flex flex-col gap-4 font-inter text-md text-[#6E6E6E]">{children}</div>
      </div>
    </div>
  )
}
