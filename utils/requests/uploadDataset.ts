export interface UploadDatasetResponse {
  id: string
  status: string
  message: string
}

export interface UploadDatasetPayload {
  dataset_name: string
  field_of_study: string
  domain: string
  method: string
  is_data_clean: boolean
  zipfile: File
  walletAddress: string
}

export async function uploadDataset(payload: UploadDatasetPayload): Promise<UploadDatasetResponse> {
  const formData = new FormData()

  const { zipfile, ...restPayload } = payload

  formData.append("zipfile", zipfile)

  Object.entries(restPayload).forEach(([key, value]) => {
    formData.append(key, String(value))
  })

  const response = await fetch("http://localhost:3000/auth/upload/zip", {
    method: "POST",
    body: formData,
  })

  if (!response.ok) {
    throw new Error(`Upload failed: ${response.statusText}`)
  }

  return response.json()
}
