import { UploadIcon } from "@/components/icons/UploadIcon/UploadIcon"
import { ReactNode } from "react"

interface FileDetailsProps {
  children: ReactNode
  fileName: string
  fileSize: string
}

export const FileDetails = ({ children, fileName, fileSize }: FileDetailsProps) => {
  return (
    <div className="flex flex-col border border-[#c4c4c4] rounded-2xl">
      <button className="flex flex-row items-center justify-between gap-6 px-12 pt-11 pb-10 text-black hover:text-primary">
        <div className="flex flex-row items-center gap-6">
          <div className="font-inter text-xl font-medium">{fileName}</div>
          <div className="font-inter text-base text-[#6E6E6E]">({fileSize})</div>
        </div>
        <div>
          <UploadIcon />
        </div>
      </button>
      <div className="flex flex-col gap-6 px-12 pt-6 pb-10 bg-[#FAF9F8]">
        <h3 className="font-inter text-xl font-medium text-black">About this file</h3>
        <div className="flex flex-col gap-4 font-inter text-md text-[#6E6E6E]">{children}</div>
      </div>
    </div>
  )
}
