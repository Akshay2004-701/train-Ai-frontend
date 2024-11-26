"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ArweaveWalletKit } from "arweave-wallet-kit"
import { ReactNode } from "react"
import { Toaster } from "sonner"

const queryClient = new QueryClient()

interface ProvidersProps {
  children: ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ArweaveWalletKit
      config={{
        permissions: ["ACCESS_ADDRESS"],
        ensurePermissions: true,
        appInfo: { name: "Train AI", logo: "/img/logo.svg" },
      }}
      theme={{
        displayTheme: "light",
        accent: { r: 0, g: 122, b: 255 },
        radius: "minimal",
      }}
    >
      <QueryClientProvider client={queryClient}>
        {children}
        <Toaster position="top-right" />
      </QueryClientProvider>
    </ArweaveWalletKit>
  )
}
