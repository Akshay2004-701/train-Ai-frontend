import { Model } from "@/components/Model/Model"
import { ModelsHeading } from "@/components/ModelsHeading/ModelsHeading"
import { SearchModels } from "@/features/SearchModels/SearchModels"

export default function ModelsPage() {
  return (
    <>
      <ModelsHeading
        title="Models"
        description="Explore and contribute to cutting-edge AI models, from sentiment analysis to image recognition. Join our community to share labeled data, train models and earn rewards."
      />
      <SearchModels />
      <Model
        title="mobilenet_v2"
        authorName="Google"
        description="SSD-based object detection model trained on Open Images V4 with ImageNet pre-trained MobileNet V2 as image feature extractor."
        authorProfileUrl="/img/medium-avatar.png"
        modelName="MobileNet V2"
        variationNumber={1}
        notebookNumber={1}
        likesCount={100}
      />
      <Model
        title="mobilenet_v2"
        authorName="Google"
        description="SSD-based object detection model trained on Open Images V4 with ImageNet pre-trained MobileNet V2 as image feature extractor."
        authorProfileUrl="/img/medium-avatar.png"
        modelName="MobileNet V2"
        variationNumber={1}
        notebookNumber={1}
        likesCount={100}
      />
      <Model
        title="mobilenet_v2"
        authorName="Google"
        description="SSD-based object detection model trained on Open Images V4 with ImageNet pre-trained MobileNet V2 as image feature extractor."
        authorProfileUrl="/img/medium-avatar.png"
        modelName="MobileNet V2"
        variationNumber={1}
        notebookNumber={1}
        likesCount={100}
      />
      <Model
        title="mobilenet_v2"
        authorName="Google"
        description="SSD-based object detection model trained on Open Images V4 with ImageNet pre-trained MobileNet V2 as image feature extractor."
        authorProfileUrl="/img/medium-avatar.png"
        modelName="MobileNet V2"
        variationNumber={1}
        notebookNumber={1}
        likesCount={100}
      />
      <Model
        title="mobilenet_v2"
        authorName="Google"
        description="SSD-based object detection model trained on Open Images V4 with ImageNet pre-trained MobileNet V2 as image feature extractor."
        authorProfileUrl="/img/medium-avatar.png"
        modelName="MobileNet V2"
        variationNumber={1}
        notebookNumber={1}
        likesCount={100}
      />
    </>
  )
}
