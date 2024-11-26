import Image from "next/image"
import Link from "next/link"

export const HomepageFooter = () => {
  return (
    <footer>
      <div className="container mx-auto py-8 border-t border-[#C4C4C4]">
        <div className="flex justify-between items-center">
          <nav>
            <ul className="flex gap-10">
              <li>
                <Link
                  href="/privacy"
                  className="font-inter text-[#6E6E6E] hover:text-black font-medium text-base underline tracking-[-0.03em]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="font-inter text-[#6E6E6E] hover:text-black font-medium text-base underline tracking-[-0.03em]"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-inter text-[#6E6E6E] hover:text-black font-medium text-base underline tracking-[-0.03em]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Image src="/icons/copyright.svg" alt="TrainAI Logo" width={20} height={20} />
            <span className="font-inter text-[#6E6E6E] font-medium text-base tracking-[-0.03em]">
              Copyright 2024 - TrainAI
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
