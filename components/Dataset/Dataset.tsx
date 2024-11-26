import { EllipsisIcon } from "@/components/icons/EllipsisIcon/EllipsisIcon"
import { HeartIcon } from "@/components/icons/HeartIcon/HeartIcon"
import classNames from "classnames"
import Link from "next/link"
import { slugify } from "@/utils/slugify"

interface DatasetProps {
  title: string
  authorName: string
  updatedTimeAgo: string
  usability: number
  numberOfFiles: number
  weightOfFiles: number
  authorProfileUrl: string
  likesCount: number
}

export const Dataset = ({
  title,
  authorName,
  updatedTimeAgo,
  usability,
  numberOfFiles,
  weightOfFiles,
  authorProfileUrl,
  likesCount,
}: DatasetProps) => {
  const slug = slugify(title)

  return (
    <div className="flex flex-row items-start space-between py-8 border-b border-[#C4C4C4] mx-8">
      <div className="flex flex-row flex-1 gap-6">
        <Link href={`/datasets/${slug}`}>
          <div className="h-[130px] w-[130px] flex-shrink-0 bg-gray-200 rounded-lg">
            {/* <Image
          src="https://placehold.co/130x130"
          alt={`${title} thumbnail`}
          width={130}
          height={130}
          className="rounded-lg"
            /> */}
          </div>
        </Link>

        <div className="pt-[18px]">
          <Link href={`/datasets/${slug}`} className="text-black hover:text-primary">
            <h3 className="font-inter text-xl font-medium">{title}</h3>
          </Link>
          <div className="flex flex-row items-center gap-4 mb-6">
            <Link
              href={authorProfileUrl}
              className="font-inter text-sm text-[#6e6e6e] underline hover:text-black"
            >
              {authorName}
            </Link>
            <span className="font-inter text-sm text-[#6e6e6e]">Updated {updatedTimeAgo}</span>
          </div>
          <div className="flex flex-row items-center gap-6">
            <span
              className={classNames("font-inter text-sm", {
                "text-[#00D715]": usability >= 7,
                "text-[#FF9900]": usability < 7 && usability >= 4,
                "text-[#D70000]": usability < 4,
              })}
            >
              Usability {usability.toFixed(1)}
            </span>
            <span className="font-inter text-sm text-[#6e6e6e]">
              {numberOfFiles} {numberOfFiles === 1 ? "File" : "Files"}
            </span>
            <span className="font-inter text-sm text-[#6e6e6e]">{weightOfFiles}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between h-full items-end">
        <div className="flex flex-row gap-2 pt-[18px] font-inter text-sm font-medium">
          {likesCount}
          <HeartIcon />
        </div>
        <div className="text-primary mb-6">
          <EllipsisIcon />
        </div>
      </div>
    </div>
  )
}
