import { Avatar } from "@/components/Avatar/Avatar"

interface AuthorInfoProps {
  src: string
  name: string
}

export const AuthorInfo = ({ src, name }: AuthorInfoProps) => {
  return (
    <div className="flex items-center gap-3">
      <Avatar src={src} alt={name} size="sm" />
      <span className="text-sm text-[#6E6E6E]">{name}</span>
    </div>
  )
}
