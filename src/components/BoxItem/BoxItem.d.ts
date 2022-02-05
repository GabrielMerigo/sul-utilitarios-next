export interface MainImage {
  error: boolean
  id: string
  idMainImage: string
  name: string
  preview: string
  progress: number
  readableSize: string
  uploaded: boolean
  url: string
}

export interface BoxItemProps {
  mainImage: MainImage
  title: string;
  description: string;
  priceFormatted: number;
  isNew?: boolean;
  id: number | string
  isVehicle: boolean;
}