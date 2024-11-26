import { ReactNode } from "react"

interface StepIconProps {
  children: ReactNode
}

export const StepIcon = ({ children }: StepIconProps) => {
  return (
    <div className="gradient-border flex w-[80px] h-[80px] rounded-full border border-transparent items-center justify-center overflow-hidden z-50">
      <div className="w-full h-full rounded-full bg-[#FFE1DA]/[0.21] flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}
