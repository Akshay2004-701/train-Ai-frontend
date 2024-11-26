import React from "react"

interface SimpleInputProps {
  label: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SimpleInput = ({ label, placeholder, value, onChange }: SimpleInputProps) => {
  return (
    <div>
      <label htmlFor="name" className="ml-px block text-sm/6 font-medium text-secondary">
        {label}
      </label>
      <div className="mt-2">
        <input
          id="name"
          name="name"
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="block w-full rounded-full border-0 px-6 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm/6"
        />
      </div>
    </div>
  )
}

export default SimpleInput
