import { Button } from "@/components/Button/Button"
import { EntryAuthor } from "@/components/EntryAuthor/EntryAuthor"
import { EntryHeading } from "@/components/EntryHeading/EntryHeading"
import { CodeIcon } from "@/components/icons/CodeIcon/CodeIcon"
import { ModelNavigation } from "@/components/ModelNavigation/ModelNavigation"

export default function ModelLayout({ children }: { children: React.ReactNode }) {
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
            <Button variant="outlined" icon={<CodeIcon />}>
              Code
            </Button>
            <Button variant="black">Download</Button>
          </div>
        </div>
        <EntryHeading
          title="mobilenet_v2"
          subTitle="google/mobilenet_v2-api"
          description="SSD-based object detection model trained on Open Images V4 with ImageNet pre-trained MobileNet V2 as image feature extractor."
          imageSrc="/img/dataset-image.png"
        />
      </div>
      <ModelNavigation />
      {children}
    </>
  )
}
