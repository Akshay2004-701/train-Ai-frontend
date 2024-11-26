import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import React from "react"
import RedBorderCard from "../RedBorderCard/RedBorderCard"
import { Button } from "../Button/Button"

const RewardsCard = () => {
  return (
    <RedBorderCard>
      <div className="flex justify-between items-center font-light text-lg">
        Rewards
        <EllipsisHorizontalIcon className="h-12 w-12 text-primary" />
      </div>
      <div className="mt-3">
        <p className="text-secondary font-extralight">Current Earnings </p>
        <div className="flex items-center mt-4  justify-between">
          <div className="flex items-center space-x-4">
            <div className="gradient-border w-12 h-12 rounded-full border border-transparent items-center justify-center overflow-hidden ">
              <div className="w-full h-full rounded-full bg-[#FFE1DA]/[0.21] flex items-center justify-center">
                <Image src="/icons/cash.svg" alt="Earning" width={15} height={15} />
              </div>
            </div>
            <span className="font-semibold text-2xl">573</span>
          </div>
          <Button variant="black">Redeem</Button>
        </div>
      </div>
    </RedBorderCard>
  )
}

export default RewardsCard
