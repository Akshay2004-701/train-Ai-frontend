import classNames from "classnames"
import Link from "next/link"
import { ButtonProps } from "@/components/Button/Button"

const baseStyles = "px-8 py-2.5 rounded-full font-medium transition-colors"

const variantStyles = {
  primary: "bg-primary text-white hover:bg-primary/80 active:bg-primary/90",
  secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300",
  ghost: "bg-transparent text-black hover:bg-gray-100 active:bg-gray-200",
} as const

interface ButtonLinkProps extends ButtonProps {
  href: string
}

export const ButtonLink = ({
  variant = "primary",
  fullWidth = false,
  href,
  children,
  className = "",
  ...props
}: ButtonLinkProps) => {
  return (
    <Link
      href={href}
      className={classNames(
        baseStyles,
        variantStyles[variant],
        {
          "w-full": fullWidth,
        },
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
