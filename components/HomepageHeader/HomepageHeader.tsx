import Link from "next/link"
import Image from "next/image"
import { HomepageHeaderNavigation } from "@/components/HomepageHeader/HomepageHeaderNavigation"
import { HomepageHeaderMobileNavigation } from "@/components/HomepageHeader/HomepageHeaderMobileNavigation"

interface NavItem {
  label: string
  href: string
}

export const homepageNavItems: NavItem[] = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Datasets", href: "/datasets" },
  { label: "Models", href: "/models" },
  { label: "FAQs", href: "/faqs" },
]

export const HomepageHeader = () => {
  return (
    <header className="w-full bg-white mt-11">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/img/logo.svg"
                alt="Logo"
                width={100}
                height={24}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          <HomepageHeaderNavigation />

          <HomepageHeaderMobileNavigation />
        </div>
      </div>
    </header>
  )
}
