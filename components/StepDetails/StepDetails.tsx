import { StepIcon } from "@/components/StepIcon/StepIcon"
import Image from "next/image"

interface StepDetailProps {
  image: string
  step: number
  title: string
  description: string
}

export const StepDetail = ({ image, step, title, description }: StepDetailProps) => {
  return (
    <div className="flex flex-row items-center gap-10 z-50">
      <div className="flex flex-col gap-4 mt-10 z-50 bg-white">
        <StepIcon>
          <Image src={image} alt={title} width={37} height={33} />
        </StepIcon>
      </div>
      <div className="flex flex-col">
        <span className="text-xl text-primary mb-7 uppercase">Step {step}</span>
        <h3 className="text-2xl font-medium text-black mb-4 whitespace-nowrap">{title}</h3>
        <p className="text-lg font-normal text-secondary">{description}</p>
      </div>
    </div>
  )
}
