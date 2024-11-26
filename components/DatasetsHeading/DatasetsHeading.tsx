"use client"

import { Button } from "@/components/Button/Button"
import { AddIcon } from "@/components/icons/AddIcon/AddIcon"
import { useState } from "react"
import Drawer from "../Drawer/Drawer"
import NewDatasetForm from "../NewDatasetForm/NewDatasetForm"

interface DatasetsHeadingProps {
  title: string
  description: string
}

export const DatasetsHeading = ({ title, description }: DatasetsHeadingProps) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  return (
    <>
      <div className="mb-10 px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-[48px] font-medium font-inter text-black">{title}</h1>
        </div>
        <p className="font-inter text-[18px] font-normal text-[#6E6E6E] tracking-[-0.03em] mb-[40px]">
          {description}
        </p>
        <Button icon={<AddIcon />} onClick={() => setIsPanelOpen(true)}>
          New Dataset
        </Button>
      </div>
      <Drawer open={isPanelOpen} setOpen={() => setIsPanelOpen(false)} title="Upload Dataset">
        <NewDatasetForm />
      </Drawer>
    </>
  )
}
