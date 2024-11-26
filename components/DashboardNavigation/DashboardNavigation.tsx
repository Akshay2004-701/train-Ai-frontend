import { DashboardNavigationLink } from "@/components/DashboardNavigation/DashboardNavigationLink"
import { DatasetsIcon } from "@/components/icons/DatasetsIcon/DatasetsIcon"
import { HelpIcon } from "@/components/icons/HelpIcon/HelpIcon"
import { HomeIcon } from "@/components/icons/HomeIcon/HomeIcon"
import { ModelsIcon } from "@/components/icons/ModelsIcon/ModelsIcon"
import { SettingsIcon } from "@/components/icons/SettingsIcon/SettingsIcon"
import { StarIcon } from "@/components/icons/StarIcon/StarIcon"
import Image from "next/image"
import Link from "next/link"

export const DashboardNavigation = () => {
  return (
    <aside
      className="flex flex-col h-screen pt-11 px-4"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="ml-10 mb-12">
        <Link href="/dashboard">
          <Image
            src="/img/logo.svg"
            alt="Dashboard Home"
            width={100}
            height={24}
            className="h-10 w-auto"
          />
        </Link>
      </div>
      <div className="flex flex-col flex-1 justify-between">
        <nav aria-label="Dashboard sections" className="flex-1">
          <ul role="list" className="space-y-1">
            <li>
              <DashboardNavigationLink icon={<HomeIcon />} label="Home" href="/" />
            </li>
            <li>
              <DashboardNavigationLink icon={<ModelsIcon />} label="Models" href="/models" />
            </li>
            <li>
              <DashboardNavigationLink icon={<DatasetsIcon />} label="Datasets" href="/datasets" />
            </li>
            <li>
              <DashboardNavigationLink icon={<StarIcon />} label="Rankings" href="/rankings" />
            </li>
          </ul>
        </nav>
        <nav aria-label="User settings" className="mb-2">
          <ul role="list">
            <li>
              <DashboardNavigationLink icon={<SettingsIcon />} label="Settings" href="/settings" />
            </li>
            <li>
              <DashboardNavigationLink icon={<HelpIcon />} label="Help" href="/help" />
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}
