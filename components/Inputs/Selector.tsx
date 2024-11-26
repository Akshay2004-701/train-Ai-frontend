"use client"

import { joinClasses } from "@/utils/joinClasses"
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react"
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid"

interface SelectorProps {
  label?: string
  options: SelectorOption[]
  selected: SelectorOption
  onChange: (value: SelectorOption) => void
}

export interface SelectorOption {
  value: string
  label: string
  icon?: React.ReactNode
}

export const Selector = ({ label, options, selected, onChange }: SelectorProps) => {
  return (
    <Listbox value={selected} onChange={onChange}>
      {label && <Label className="block text-sm/6 font-medium text-secondary">{label}</Label>}
      <div className="relative mt-2">
        <ListboxButton className="relative w-full cursor-default rounded-full bg-white py-3.5 pl-6 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm/6">
          <span className="flex items-center">
            {selected.icon ? selected.icon : null}
            <span className={selected.icon ? "ml-3 block truncate" : "block truncate"}>
              {selected.label}
            </span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon aria-hidden="true" className="size-5 text-gray-400" />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {options.map((option) => (
            <ListboxOption
              key={option.value}
              value={option}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-primary/60 data-[focus]:text-white"
            >
              <div className="flex items-center">
                {option.icon ? option.icon : null}
                <span
                  className={joinClasses(
                    option.icon ? "ml-3" : null,
                    `block truncate font-normal group-data-[selected]:font-semibold`
                  )}
                >
                  {option.label}
                </span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-primary group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="size-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  )
}
