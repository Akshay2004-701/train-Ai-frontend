import React from "react"

interface EstimatedErningsProps {
  number: number
}

const EstimatedErnings = ({ number }: EstimatedErningsProps) => {
  return (
    <>
      <p className="text-primary">
        Estimated Ernings{" "}
        <span className="text-black font-medium pl-2 text-lg ">
          {number} <span className="text-secondary text-sm">AR</span>
        </span>
      </p>
    </>
  )
}

export default EstimatedErnings
