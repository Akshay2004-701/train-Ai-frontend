import { ButtonHTMLAttributes } from "react"
import classNames from "classnames"

export const baseStyles =
  "flex flex-row gap-2 items-center px-8 py-2.5 rounded-full font-medium transition-colors"

export const variantStyles = {
  primary: "bg-primary text-white hover:bg-primary/80 active:bg-primary/90",
  secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300",
  ghost: "bg-transparent text-black hover:bg-gray-100 active:bg-gray-200",
  outlined:
    "bg-transparent text-primary border border-primary hover:bg-primary/10 active:bg-primary/20",
  black: "bg-black text-white hover:bg-black/80 active:bg-black/90",
} as const

export interface ButtonProps {
  icon?: React.ReactNode
  className?: string
  variant?: keyof typeof variantStyles
  fullWidth?: boolean
  children: React.ReactNode
}

export const Button = ({
  icon,
  variant = "primary",
  fullWidth = false,
  children,
  className = "",
  ...props
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
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
      {icon}
      {children}
    </button>
  )
}
