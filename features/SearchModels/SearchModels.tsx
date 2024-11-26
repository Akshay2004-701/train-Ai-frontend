"use client"

import { Selector } from "@/components/Inputs/Selector"
import { SearchInput } from "@/components/SearchInput/SearchInput"

export const SearchModels = () => {
  return (
    <div className="flex flex-col gap-5 px-8">
      <SearchInput placeholder="Search Models" />
      <div className="flex flex-wrap gap-2">
        <div className="flex flex-row items-center gap-2">
          <Selector
            options={[{ value: "All Models", label: "All Models" }]}
            selected={{ value: "All Models", label: "All Models" }}
            onChange={() => {}}
          />
          <Selector
            options={[{ value: "Data Type", label: "Data Type" }]}
            selected={{ value: "Data Type", label: "Data Type" }}
            onChange={() => {}}
          />
          <Selector
            options={[{ value: "Size", label: "Size" }]}
            selected={{ value: "Size", label: "Size" }}
            onChange={() => {}}
          />
          <Selector
            options={[{ value: "Task", label: "Task" }]}
            selected={{ value: "Task", label: "Task" }}
            onChange={() => {}}
          />
          <Selector
            options={[{ value: "Publisher", label: "Publisher" }]}
            selected={{ value: "Publisher", label: "Publisher" }}
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  )
}
