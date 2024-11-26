import { SearchInput } from "@/components/SearchInput/SearchInput"
import { TagPill } from "@/components/TagPill/TagPill"

export const SearchDatasets = () => {
  return (
    <div className="flex flex-col gap-5 px-8">
      <SearchInput placeholder="Search Datasets" />
      <div className="flex flex-wrap gap-2">
        <TagPill>Filter 1</TagPill>
        <TagPill>Filter 2</TagPill>
        <TagPill>Filter 3</TagPill>
      </div>
    </div>
  )
}
