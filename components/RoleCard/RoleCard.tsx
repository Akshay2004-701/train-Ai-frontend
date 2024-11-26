import { Button } from "@/components/Button/Button"
import classNames from "classnames"

interface RoleCardProps {
  title: string
  description: string
  buttonText: string
  selected?: boolean
  onClick?: () => void
}

export const RoleCard = ({ title, description, buttonText, selected, onClick }: RoleCardProps) => {
  return (
    <div
      role="option"
      aria-selected={selected}
      aria-label={title}
      tabIndex={0}
      className={classNames("text-left p-10 border rounded-3xl transition-all duration-150 bg-white", {
        "border-[#C4C4C4]": !selected,
        "border-primary shadow-card bg-[#FFE1DA]/[0.21]": selected,
      })}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-4">
        <h3
          className={classNames("text-black text-2xl font-semibold", {
            "text-primary": selected,
          })}
        >
          {title}
        </h3>
        <button
          className={classNames(
            "w-[26px] h-[26px] rounded-full border p-2 flex items-center justify-center",
            {
              "border-[#C4C4C4]": !selected,
              "border-primary": selected,
            }
          )}
        >
          {selected && <div className="w-full h-full rounded-full bg-primary" />}
        </button>
      </div>

      <p className="text-secondary text-lg">{description}</p>
      {selected && (
        <div className="text-left mt-6">
          <Button>{buttonText}</Button>
        </div>
      )}
    </div>
  )
}
