import React from "react"

import { ReactNode } from "react"

const RedBorderCard = ({ children }: { children: ReactNode }) => {
  return <div className="border rounded-2xl border-primary p-8 flex flex-col">{children}</div>
}

export default RedBorderCard
