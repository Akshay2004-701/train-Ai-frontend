import { Accordion } from "@/components/Accordion/Accordion"
import faq from "./faq.json"

interface FaqSectionProps {
  title?: string
  description?: string
}

export const FaqSection = ({
  title = "Frequently Asked Questions",
  description = "Everything you need to know about the product and billing.",
}: FaqSectionProps) => {
  return (
    <section className="w-full py-40">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-inter text-5xl font-medium leading-[58px] tracking-[-0.03em] text-black mb-9">
          {title}
        </h2>

        <p className="text-center font-inter text-xl font-normal leading-6 tracking-[-0.03em] text-[#6E6E6E] mb-[60px] max-w-2xl mx-auto">
          {description}
        </p>

        <div className="max-w-3xl mx-auto border border-primary rounded-[20px] p-10">
          {faq.map((item, index) => (
            <Accordion key={index} title={item.question} content={item.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
