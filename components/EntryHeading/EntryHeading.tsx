import Image from "next/image"

interface EntryHeadingProps {
  title: string
  subTitle?: string
  description: string
  imageSrc: string
}

export const EntryHeading = ({ title, subTitle, description, imageSrc }: EntryHeadingProps) => {
  return (
    <div className="flex flex-row items-start justify-between gap-10">
      <div className="flex-1">
        <h1 className="mb-6 font-inter text-4xl font-medium text-black">{title}</h1>
        {subTitle && <span className="mb-6 font-inter text-lg text-[#6E6E6E]">{subTitle}</span>}
        <p className="font-inter text-sm text-[#6E6E6E]">{description}</p>
      </div>
      <div className="flex-shrink-0">
        <Image src={imageSrc} alt={title} width={242} height={130} className="rounded-xl" />
      </div>
    </div>
  )
}
