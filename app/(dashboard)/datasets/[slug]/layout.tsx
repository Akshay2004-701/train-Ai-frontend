import { Button } from "@/components/Button/Button"
import { EntryAuthor } from "@/components/EntryAuthor/EntryAuthor"
import { EntryHeading } from "@/components/EntryHeading/EntryHeading"
import { DatasetNavigation } from "@/components/DatasetNavigation/DatasetNavigation"
import { AddIcon } from "@/components/icons/AddIcon/AddIcon"

export default function DatasetLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="px-8">
        <div className="flex flex-row justify-between mb-14">
          <EntryAuthor
            src="/img/small-avatar.png"
            name="John Doe"
            updatedAt="2024-01-01"
            createdAt="2024-01-01"
            likes={10}
          />
          <div className="flex flex-row gap-3">
            <Button variant="outlined" icon={<AddIcon />}>
              New Notebook
            </Button>
            <Button variant="black">Download</Button>
          </div>
        </div>
        <EntryHeading
          title="Students Performance | Clean Dataset"
          description="Explore and utilize a diverse range of machine learning models, from advanced diffusion models to cutting-edge large language models (LLMs), tailored to meet various needs and applications."
          imageSrc="/img/dataset-image.png"
        />
      </div>
      <DatasetNavigation />
      {children}
    </>
  )
}
