import OverviewCard from "@/components/OverviewCard/OverviewCard"
import RewardsCard from "@/components/RewardsCard/RewardsCard"
import Image from "next/image"
import React from "react"

const ProfilePreviewPanel = ({ user }) => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col justify-center">
        <Image
          src={user?.picture?.large}
          alt="User"
          className="rounded-full mx-auto"
          width={150}
          height={150}
        />
        {user.name?.first && user.name?.last && (
          <div className="text-center mt-8">
            <h1 className="text-3xl font-semibold">
              {user.name.first} {user.name.last}
            </h1>
            <p className="text-sm text-gray-500">Joined Nov 2024</p>
          </div>
        )}
      </div>
      <RewardsCard />
      <OverviewCard />
    </div>
  )
}

export default ProfilePreviewPanel
