import { DatasetNavigationLink } from "@/components/DatasetNavigation/DatasetNavigationLink"

export const DatasetNavigation = () => {
  return (
    <div className="flex flex-row gap-10 px-8 border-b border-[#C4C4C4]">
      <DatasetNavigationLink href="">Data Card</DatasetNavigationLink>
      <DatasetNavigationLink href="/code">Code (421)</DatasetNavigationLink>
      <DatasetNavigationLink href="/discussions">Discussions (2)</DatasetNavigationLink>
      <DatasetNavigationLink href="/suggestions">Suggestions (1)</DatasetNavigationLink>
    </div>
  )
}
