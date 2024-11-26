import classNames from "classnames"
import Image from "next/image"

export type AvatarSize = "sm" | "md"

interface AvatarProps {
  src: string
  alt: string
  size?: AvatarSize
  className?: string
}

const sizeStyles: Record<AvatarSize, { width: number; height: number }> = {
  sm: { width: 38, height: 38 },
  md: { width: 50, height: 50 },
}

export const Avatar = ({ src, alt, size = "sm", className }: AvatarProps) => {
  const { width, height } = sizeStyles[size]

  return (
    <div
      className={classNames("relative rounded-full overflow-hidden bg-gray-100", className)}
      style={{ width, height }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={`${Math.max(width, height)}px`}
      />
    </div>
  )
}
