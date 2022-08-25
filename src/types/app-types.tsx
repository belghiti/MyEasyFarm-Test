export type Feature = {
  center: [number, number]
  color: string
  geometry: [number, number][]
}

export type PreviewProps = {
  isOpen: boolean
}

export type MapState = {
  previewOpen: boolean
  feature: Feature | null
}