"use client"

import { useForm, Controller } from "react-hook-form"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid"
import { Description, Field, Label, Switch } from "@headlessui/react"
import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import classNames from "classnames"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"

import SimpleInput from "../Inputs/SimpleInput"
import { Selector, SelectorOption } from "../Inputs/Selector"
import EstimatedErnings from "../EstimatedErnings/EstimatedErnings"
import { Button } from "../Button/Button"
import { useActiveAddress } from "arweave-wallet-kit"
import { uploadDataset } from "@/utils/requests/uploadDataset"

interface DatasetFormValues {
  name: string
  visibility: string
  fieldOfStudy: string
  domains: string
  method: string
  clean: boolean
  file?: File
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

const NewDatasetForm = () => {
  const walletAddress = useActiveAddress()
  const { control, handleSubmit, setValue, reset } = useForm<DatasetFormValues>({
    defaultValues: {
      name: "",
      visibility: "public",
      fieldOfStudy: "machine-learning",
      domains: "nlp",
      method: "classification",
      clean: false,
    },
  })

  const uploadMutation = useMutation({
    mutationFn: uploadDataset,
    onSuccess: () => {
      toast.success("Dataset uploaded successfully")
      reset() // Reset form after successful upload
    },
    onError: (error: Error) => {
      toast.error(`Failed to upload dataset: ${error.message}`)
    },
  })

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        setValue("file", acceptedFiles[0])
      }
    },
    [setValue]
  )

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    onDrop,
    accept: {
      "application/zip": [".zip"],
    },
    maxFiles: 1,
  })

  const onSubmit = (data: DatasetFormValues) => {
    if (!data.file) {
      toast.error("Please select a file to upload")
      return
    }

    if (!walletAddress) {
      toast.error("Please connect your wallet")
      return
    }

    const payload = {
      dataset_name: data.name,
      field_of_study: data.fieldOfStudy,
      domain: data.domains,
      method: data.method,
      is_data_clean: data.clean,
      zipfile: data.file,
      walletAddress,
    }

    console.log({ payload })

    uploadMutation.mutate(payload)
  }

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          rules={{ required: "Dataset name is required" }}
          render={({ field }) => (
            <SimpleInput label="Dataset Name" placeholder="Enter dataset title" {...field} />
          )}
        />

        <Controller
          name="visibility"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Selector
              label="Visibility"
              selected={
                visibilityOptions.find((option) => option.value === value) || visibilityOptions[0]
              }
              onChange={(option: SelectorOption) => onChange(option.value)}
              options={visibilityOptions}
            />
          )}
        />

        <Controller
          name="fieldOfStudy"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Selector
              label="Field of Study"
              selected={
                fieldOfStudyOptions.find((option) => option.value === value) ||
                fieldOfStudyOptions[0]
              }
              onChange={(option: SelectorOption) => onChange(option.value)}
              options={fieldOfStudyOptions}
            />
          )}
        />

        <Controller
          name="domains"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Selector
              label="Domains"
              selected={domainOptions.find((option) => option.value === value) || domainOptions[0]}
              onChange={(option: SelectorOption) => onChange(option.value)}
              options={domainOptions}
            />
          )}
        />

        <Controller
          name="method"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Selector
              label="Methods"
              selected={methodOptions.find((option) => option.value === value) || methodOptions[0]}
              onChange={(option: SelectorOption) => onChange(option.value)}
              options={methodOptions}
            />
          )}
        />

        <Controller
          name="clean"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Field className="flex items-center justify-between">
              <span className="flex grow flex-col">
                <Label as="span" passive className="text-sm/6 font-medium text-gray-900">
                  Clean Dataset
                </Label>
                <Description as="span" className="text-sm text-secondary">
                  Define if the dataset is clean or not.
                </Description>
              </span>
              <Switch
                checked={value}
                onChange={onChange}
                className="group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 data-[checked]:bg-primary"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none inline-block size-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
                />
              </Switch>
            </Field>
          )}
        />

        <div
          {...getRootProps()}
          className={classNames(
            "relative block w-full rounded-lg border-2 border-dashed p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
            {
              "border-gray-300 hover:border-gray-400": !isDragActive,
              "border-primary bg-primary/5": isDragActive,
              "opacity-50 cursor-not-allowed": uploadMutation.isPending,
            }
          )}
        >
          <input {...getInputProps()} disabled={uploadMutation.isPending} />
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
            {isDragActive
              ? "Drop the ZIP file here"
              : acceptedFiles.length > 0
                ? acceptedFiles[0].name
                : "Drag and drop ZIP file here, or click to select"}
          </span>
          {acceptedFiles.length > 0 && (
            <span className="mt-1 block text-xs text-gray-500">
              {(acceptedFiles[0].size / (1024 * 1024)).toFixed(2)} MB
            </span>
          )}
        </div>

        <div className="flex-1 flex items-center py-8 justify-between mt-12 border-t">
          <EstimatedErnings number={100} />
          <div className="flex items-center gap-4">
            {uploadMutation.isPending && (
              <span className="text-sm text-secondary">Uploading dataset...</span>
            )}
            <Button
              type="submit"
              variant="secondary"
              className={classNames("text-secondary", {
                "opacity-50 cursor-not-allowed": uploadMutation.isPending,
              })}
              disabled={uploadMutation.isPending}
            >
              {uploadMutation.isPending ? "Uploading..." : "Create"}
            </Button>
          </div>
        </div>

        {uploadMutation.isError && (
          <div className="text-sm text-red-600">
            {uploadMutation.error instanceof Error ? uploadMutation.error.message : "Upload failed"}
          </div>
        )}
      </form>
    </>
  )
}

export default NewDatasetForm
