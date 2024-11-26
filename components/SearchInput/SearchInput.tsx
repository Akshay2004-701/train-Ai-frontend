import Image from "next/image"

interface SearchInputProps {
  placeholder: string
}

export const SearchInput = ({ placeholder }: SearchInputProps) => {
  return (
    <label
      htmlFor="search"
      className="flex flex-row flex-1 items-center px-6 py-3.5 border border-[#C4C4C4] rounded-full"
    >
      <Image src="/icons/search.svg" alt="Search" width={16} height={16} className="mr-7" />
      <input
        type="text"
        id="search"
        className="border-none outline-none focus:ring-0 top-2 ml-2 placeholder:font-inter placeholder:font-medium placeholder:text-xl placeholder:leading-6 placeholder:tracking-[-0.03em] placeholder:text-[#6E6E6E]"
        placeholder={placeholder}
      />
    </label>
  )
}
