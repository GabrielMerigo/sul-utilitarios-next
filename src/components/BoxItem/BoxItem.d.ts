export interface MainImage {
  error: boolean;
  id: string;
  idMainImage: string;
  name: string;
  preview: string;
  progress: number;
  readableSize: string;
  uploaded: boolean;
  url: string;
}

export interface BoxItemProps {
  vehicleId: string;
  vehicleType: string;
  vehicleName: string;
  vehiclePrice: number;
  brand: string;
  model: string;
  manufactureYear: number;
  manufactureModel: number;
  traction: string;
  bodywork: string;
  description: string;
  created_at: Timestamp;
  imagesUrl: CloudImagesArrayProps;
  mainImageUrl: CloudMainImageImageProps;
}
