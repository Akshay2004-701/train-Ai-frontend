import React, { useState } from "react"
import SimpleInput from "../Inputs/SimpleInput"
import { Selector, SelectorOption } from "../Inputs/Selector"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid"
import { Description, Field, Label, Switch } from "@headlessui/react"
import EstimatedErnings from "../EstimatedErnings/EstimatedErnings"
import { Button } from "../Button/Button"

interface NewModel {
  name: string
  visibility: string
  fieldOfStudy: string
  domains: string
  methods: string
  clean: boolean
}

const visibilityOptions = [
  { value: "public", label: "Public", icon: <EyeIcon className="size-5 text-secondary" /> },
  { value: "private", label: "Private", icon: <EyeSlashIcon className="size-5 text-secondary" /> },
]

const fieldOfStudyOptions = [
  { value: "machine-learning", label: "Machine Learning" },
  { value: "data-science", label: "Data Science" },
  { value: "artificial-intelligence", label: "Artificial Intelligence" },
]

const domainOptions = [
  { value: "nlp", label: "Natural Language Processing" },
  { value: "cv", label: "Computer Vision" },
  { value: "rl", label: "Reinforcement Learning" },
]

const methodOptions = [
  { value: "classification", label: "Classification" },
  { value: "regression", label: "Regression" },
  { value: "dataVisualization", label: "Data Visualization" },
]

const NewModelForm = () => {
  const [newModel, setNewModel] = useState<NewModel>({
    name: "",
    visibility: "",
    fieldOfStudy: "",
    domains: "",
    methods: "",
    clean: false,
  })
  const handleSubmit = () => {
    console.log(newModel)
  }
  return (
    <>
      <form className="space-y-6">
        {/* Model Name */}
        <SimpleInput
          label="Model Name"
          placeholder="Enter model title"
          value={newModel.name}
          onChange={(e) => setNewModel({ ...newModel, name: e.target.value })}
        />
        {/* Visibility */}
        <Selector
          label="Visibility"
          selected={
            visibilityOptions.find((option) => option.value === newModel.visibility) ||
            visibilityOptions[0]
          }
          onChange={(option: SelectorOption) =>
            setNewModel({ ...newModel, visibility: option.value })
          }
          options={visibilityOptions}
        />

        {/* Field of Study */}
        <Selector
          label="Field of Study"
          selected={
            fieldOfStudyOptions.find((option) => option.value === newModel.fieldOfStudy) ||
            fieldOfStudyOptions[0]
          }
          onChange={(option: SelectorOption) =>
            setNewModel({ ...newModel, fieldOfStudy: option.value })
          }
          options={fieldOfStudyOptions}
        />

        {/* Domains */}
        <Selector
          label="Domains"
          selected={
            domainOptions.find((option) => option.value === newModel.domains) || domainOptions[0]
          }
          onChange={(option: SelectorOption) => setNewModel({ ...newModel, domains: option.value })}
          options={domainOptions}
        />

        {/* Methods */}
        <Selector
          label="Methods"
          selected={
            methodOptions.find((option) => option.value === newModel.methods) || methodOptions[0]
          }
          onChange={(option: SelectorOption) => setNewModel({ ...newModel, methods: option.value })}
          options={methodOptions}
        />

        {/* Clean */}

        <Field className="flex items-center justify-between ">
          <span className="flex grow flex-col">
            <Label as="span" passive className="text-sm/6  font-medium text-gray-900">
              Clean Dataset
            </Label>
            <Description as="span" className="text-sm text-secondary">
              Define if the dataset is clean or not.
            </Description>
          </span>
          <Switch
            checked={newModel.clean}
            onChange={(checked) => setNewModel({ ...newModel, clean: checked })}
            className="group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 data-[checked]:bg-primary"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none inline-block size-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
            />
          </Switch>
        </Field>

        <button
          type="button"
          className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 48 48"
            aria-hidden="true"
            className="mx-auto size-12 text-gray-400"
          >
            <path
              d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="mt-2 block text-sm font-semibold text-secondary">
            Drag And Drop file here
          </span>
        </button>
      </form>
      {/* Submit  */}
      <div className="flex-1 flex items-center py-8 justify-between mt-12 border-t">
        <EstimatedErnings number={100} />
        <Button variant="secondary" className="text-secondary" onClick={handleSubmit}>
          Create
        </Button>
      </div>
    </>
  )
}

export default NewModelForm
