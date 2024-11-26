"use client"

import { Button } from "@/components/Button/Button"
import { AddIcon } from "@/components/icons/AddIcon/AddIcon"
import { useState } from "react"
import Drawer from "../Drawer/Drawer"
import NewModelForm from "../NewModelForm/NewModelForm"

interface ModelsHeadingProps {
  title: string
  description: string
}

export const ModelsHeading = ({ title, description }: ModelsHeadingProps) => {
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
        <div className="flex flex-row gap-3">
          <Button icon={<AddIcon />} onClick={() => setIsPanelOpen(true)}>
            New Model
          </Button>
          <Button variant="black">Your Work</Button>
        </div>
      </div>
      <Drawer open={isPanelOpen} setOpen={() => setIsPanelOpen(false)} title="Upload Model">
        <NewModelForm />
      </Drawer>
    </>
  )
}
