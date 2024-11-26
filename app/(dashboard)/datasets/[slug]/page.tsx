import { EntryDetails } from "@/components/EntryDetails/EntryDetails"
import { EntrySubHeading } from "@/components/EntrySubHeading/EntrySubHeading"
import { FileDetails } from "@/components/FileDetails/FileDetails"

export default function DatasetDataCardPage() {
  return (
    <div className="px-8 py-6">
      <div className="flex flex-row gap-20">
        <div className="flex flex-col gap-10">
          <EntrySubHeading title="About Dataset">
            <p>
              The dataset includes data about all songs released by The Beatles as a group. The
              songs released by individual members of The Beatles after they stopped working as a
              group in 1970 are not included in the dataset.
            </p>
            <p>
              Each of the 285 songs in the dataset is described by 45 features, roughly belonging to
              4 categories.
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
