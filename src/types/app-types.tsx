export type Feature = {
  center: [number, number]
  color: string
  geometry: [number, number][]
}

export type PreviewProps = {
  feature: Feature
  isOpen: boolean
  setIsOpen: any
}