import { EntryDetails } from "@/components/EntryDetails/EntryDetails"
import { EntrySubHeading } from "@/components/EntrySubHeading/EntrySubHeading"
import { FileDetails } from "@/components/FileDetails/FileDetails"

export default function ModelCardPage() {
  return (
    <div className="px-8 py-6">
      <div className="flex flex-row gap-20">
        <div className="flex flex-col gap-10">
          <EntrySubHeading title="Model Details">
            <h3 className="font-inter font-medium text-xl text-black">Model Summary</h3>
            <p>
              SSD-based object detection model trained on Open Images V4 with ImageNet pre-trained
              MobileNet V2 as image feature extractor.
            </p>
          </EntrySubHeading>
          <FileDetails fileName="Carbon_(CO2)_Emissions_by_Country.csv" fileSize="1.2MB">
            <p>
              This dataset provides a comprehensive look at carbon dioxide (CO₂) emissions on a
              country-by-country basis, enabling analysis of both historical trends and recent
              developments in global emissions.
            </p>
            <p>
              Sourced from data.gov.in and curated for accuracy and usability, this dataset includes
              annual emissions data for numerous countries, categorized by year and region.
            </p>
          </FileDetails>
        </div>
        <EntryDetails />
      </div>
    </div>
  )
}
