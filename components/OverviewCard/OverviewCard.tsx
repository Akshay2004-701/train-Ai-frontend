import React from "react"
import RedBorderCard from "../RedBorderCard/RedBorderCard"
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline"

const OverviewCard = () => {
  return (
    <RedBorderCard>
      <div className="flex justify-between items-center font-light text-lg">
        Overview
        <EllipsisHorizontalIcon className="h-12 w-12 text-primary" />
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-secondary font-extralight mb-4">Number of models </p>
          <span className="font-semibold text-2xl">15</span>
        </div>
        <div>
          <p className="text-secondary font-extralight mb-4">Number of datasets </p>
          <span className="font-semibold text-2xl">89</span>
        </div>
      </div>
    </RedBorderCard>
  )
}

export default OverviewCard
