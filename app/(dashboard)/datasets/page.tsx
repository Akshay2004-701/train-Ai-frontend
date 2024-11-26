import { SearchDatasets } from "@/features/SearchDatasets/SearchDatasets"
import { DatasetsHeading } from "@/components/DatasetsHeading/DatasetsHeading"
import { Dataset } from "@/components/Dataset/Dataset"

export default function Dashboard() {
  return (
    <>
      <DatasetsHeading
        title="Explore Datasets"
        description="Explore and utilize a diverse range of machine learning models, from advanced diffusion models to cutting-edge large language models (LLMs), tailored to meet various needs and applications."
      />
      <SearchDatasets />
      <Dataset
        title="Dataset 1"
        authorName="Author 1"
        updatedTimeAgo="1 day ago"
        authorProfileUrl="https://example.com"
        likesCount={100}
        usability={7.5}
        numberOfFiles={1}
        weightOfFiles={100}
      />
      <Dataset
        title="Dataset 1"
        authorName="Author 1"
        updatedTimeAgo="1 day ago"
        authorProfileUrl="https://example.com"
        likesCount={100}
        usability={7.5}
        numberOfFiles={1}
        weightOfFiles={100}
      />
      <Dataset
        title="Dataset 1"
        authorName="Author 1"
        updatedTimeAgo="1 day ago"
        authorProfileUrl="https://example.com"
        likesCount={100}
        usability={7.5}
        numberOfFiles={1}
        weightOfFiles={100}
      />
      <Dataset
        title="Dataset 1"
        authorName="Author 1"
        updatedTimeAgo="1 day ago"
        authorProfileUrl="https://example.com"
        likesCount={100}
        usability={7.5}
        numberOfFiles={1}
        weightOfFiles={100}
      />
      <Dataset
        title="Dataset 1"
        authorName="Author 1"
        updatedTimeAgo="1 day ago"
        authorProfileUrl="https://example.com"
        likesCount={100}
        usability={7.5}
        numberOfFiles={1}
        weightOfFiles={100}
      />
    </>
  )
}
