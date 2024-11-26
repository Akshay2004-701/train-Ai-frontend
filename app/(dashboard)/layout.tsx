"use client"
import { useEffect, useState } from "react"
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import { DashboardNavigationLink } from "@/components/DashboardNavigation/DashboardNavigationLink"
import { ModelsIcon } from "@/components/icons/ModelsIcon/ModelsIcon"
import { DatasetsIcon } from "@/components/icons/DatasetsIcon/DatasetsIcon"
import { StarIcon } from "@/components/icons/StarIcon/StarIcon"
import { HomeIcon } from "@/components/icons/HomeIcon/HomeIcon"
import { SettingsIcon } from "@/components/icons/SettingsIcon/SettingsIcon"
import { HelpIcon } from "@/components/icons/HelpIcon/HelpIcon"
import Drawer from "@/components/Drawer/Drawer"
import ProfilePreviewPanel from "@/components/Profile/SidePanel/ProfilePreviewPanel"
import { SignUpButton } from "@/features/SignUpButton/SignUpButton"

const navigation = [
  { name: "Home", href: "/", icon: <HomeIcon /> },
  { name: "Models", href: "/models", icon: <ModelsIcon /> },
  { name: "Datasets", href: "/datasets", icon: <DatasetsIcon /> },
  { name: "Ranking", href: "/rankings", icon: <StarIcon /> },
]
const bottomNavigation = [
  { name: "Settings", href: "/settings", icon: <SettingsIcon /> },
  { name: "Help", href: "/help", icon: <HelpIcon /> },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  // const { connected } = useConnection()
  const [user, setUser] = useState(null)
  const [open, setOpen] = useState(false)
  const connected = false
  const getRandomInfo = async () => {
    const response = await fetch("https://randomuser.me/api/")
    const data = await response.json()
    setUser(data.results[0])
  }
  useEffect(() => {
    if (connected) {
      getRandomInfo()
    }
  }, [connected])

  return (
    <>
      <div>
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="-m-2.5 p-2.5"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                  </button>
                </div>
              </TransitionChild>
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                <div className="flex h-16 shrink-0 items-center">
                  <Link href="/dashboard">
                    <Image
                      src="/img/logo.svg"
                      alt="Dashboard Home"
                      width={100}
                      height={24}
                      className="h-10 w-auto "
                    />
                  </Link>
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <DashboardNavigationLink
                              icon={item.icon}
                              label={item.name}
                              href={item.href}
                            />
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                  <ul role="list" className="mt-auto">
                    {bottomNavigation.map((item) => (
                      <li key={item.name}>
                        <DashboardNavigationLink
                          icon={item.icon}
                          label={item.name}
                          href={item.href}
                        />
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-10 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
            <div className="flex h-36 shrink-0 items-center pl-7">
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
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <DashboardNavigationLink
                          icon={item.icon}
                          label={item.name}
                          href={item.href}
                        />
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
              <ul role="list" className="mt-auto">
                {bottomNavigation.map((item) => (
                  <li key={item.name}>
                    <DashboardNavigationLink icon={item.icon} label={item.name} href={item.href} />
                  </li>
                ))}
                {!connected && (
                  <li className="flex justify-center my-8">
                    <SignUpButton />
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-20 lg:px-16 lg:hidden">
            <div className="flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none">
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              >
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>

              {/* <DashboardHeader /> */}
            </div>
          </div>

          <main className="py-10">{children}</main>
        </div>
      </div>

      <Drawer open={open} setOpen={setOpen} title="Profile">
        <ProfilePreviewPanel user={user} />
      </Drawer>
    </>

    // <div className="grid grid-cols-[280px_1fr] min-h-screen">
    //   <aside className="border-r border-gray-200">
    //     <DashboardNavigation />
    //   </aside>
    //   <main className="flex flex-col py-8">
    //     <DashboardHeader />
    //     {children}
    //   </main>
    // </div>
  )
}
