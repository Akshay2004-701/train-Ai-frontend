"use client"

import { useState } from "react"
import { useConnection, useActiveAddress } from "arweave-wallet-kit"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { BarLoader } from "react-spinners"
import { Button } from "@/components/Button/Button"

export const SignUpButton = () => {
  const { connect, disconnect, connected } = useConnection()
  const activeAddress = useActiveAddress()
  const [connecting, setConnecting] = useState(false)

  const handleConnect = async () => {
    setConnecting(true)

    try {
      await connect()
    } catch (error) {
      console.error("Error connecting", error)
    } finally {
      setConnecting(false)
    }
  }

  const handleDisconnect = () => {
    disconnect()
  }

  if (connected && activeAddress) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="text-black text-md cursor-pointer border rounded-full px-6 py-2 hover:text-white hover:bg-primary h-[44px]">
              {activeAddress.slice(0, 6)}...{activeAddress.slice(-4)}
            </span>
          </TooltipTrigger>
          <TooltipContent>
            <p>{activeAddress}</p>
            <Button onClick={handleDisconnect} type="button">
              Disconnect
            </Button>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  } else if (connecting) {
    return (
      <Button disabled className="py-5">
        <BarLoader color="#fff" />
      </Button>
    )
  } else {
    return <Button onClick={handleConnect}>Connect Wallet</Button>
  }
}
