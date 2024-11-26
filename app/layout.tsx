import { Inter } from "next/font/google"
import { Metadata } from "next"
import "./globals.css"
import { Providers } from "@/features/Providers/Providers"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Train AI",
  description: "Defining AI training in a collaborative data marketplace",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
