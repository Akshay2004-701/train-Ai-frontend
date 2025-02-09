import { EllipsisIcon } from "@/components/icons/EllipsisIcon/EllipsisIcon"
import { HeartIcon } from "@/components/icons/HeartIcon/HeartIcon"
import Link from "next/link"
import { slugify } from "@/utils/slugify"
import { Avatar } from "@/components/Avatar/Avatar"

interface ModelProps {
  title: string
  authorName: string
  description: string
  authorProfileUrl: string
  modelName: string
  variationNumber: number
  notebookNumber: number
  likesCount: number
}

export const Model = ({
  title,
  authorName,
  description,
  authorProfileUrl,
  modelName,
  variationNumber,
  notebookNumber,
  likesCount,
}: ModelProps) => {
  const slug = slugify(title)

  return (
    <div className="flex flex-row items-start justify-between py-8 border-b border-[#C4C4C4] mx-8">
      {/* Left Section */}
      <div className="flex flex-row flex-1 gap-6">
        <Link href={`/models/${slug}`} className="mt-5">
          <Avatar src={authorProfileUrl || "/default-avatar.png"} alt={authorName || "Author"} />
        </Link>

        <div className="pt-[18px]">
          {/* Title */}
          <Link
            href={`/models/${slug}`}
            className="inline-block text-black hover:text-primary mb-2"
          >
            <h3 className="font-inter text-xl font-medium">{title}</h3>
          </Link>

          {/* Description */}
          <p className="font-inter text-sm text-[#6e6e6e] mb-4">{description}</p>

          {/* Model Details */}
          <div className="flex flex-row items-center gap-2 font-inter font-medium text-sm text-[#6e6e6e]">
            <p>{authorName}</p>
            <div className="size-0.5 rounded-full bg-[#6e6e6e]" />
            <p>{modelName}</p>
            <div className="size-0.5 rounded-full bg-[#6e6e6e]" />
            <p>
              {variationNumber} {variationNumber === 1 ? "Variation" : "Variations"}
            </p>
            <div className="size-0.5 rounded-full bg-[#6e6e6e]" />
            <p>
              {notebookNumber} {notebookNumber === 1 ? "Notebook" : "Notebooks"}
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-between items-end">
        {/* Likes */}
        <div className="flex flex-row gap-2 pt-[18px] font-inter text-sm font-medium">
          {likesCount}
          <HeartIcon />
        </div>

        {/* More Options */}
        <div className="text-primary mb-6">
          <EllipsisIcon />
        </div>
      </div>
    </div>
  )
}
