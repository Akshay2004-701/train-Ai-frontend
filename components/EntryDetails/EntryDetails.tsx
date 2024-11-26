import { TagPill } from "@/components/TagPill/TagPill"

export const EntryDetails = () => {
  return (
    <div className="flex flex-col gap-7 w-52 flex-shrink-0">
      <div className="flex flex-col gap-2">
        <p className="font-inter text-xl font-medium text-black">Usability</p>
        <p className="font-inter text-md text-[#6E6E6E]">4.8</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-inter text-xl font-medium text-black">License</p>
        <p className="font-inter text-md text-[#6E6E6E]">CC0: Public Domain</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-inter text-xl font-medium text-black">Tags</p>
        <div className="flex flex-row flex-wrap gap-2">
          <TagPill size="small">Tag 1</TagPill>
          <TagPill size="small">Tag 2</TagPill>
          <TagPill size="small">Tag 3</TagPill>
        </div>
      </div>
    </div>
  )
}
