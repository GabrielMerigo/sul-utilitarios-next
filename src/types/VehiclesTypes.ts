import { Timestamp } from 'firebase/firestore';
import { Dispatch, SetStateAction } from 'react';

export type FirebaseVehicleProps = {
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
  isNew: Boolean;
  imagesUrl: CloudImagesArrayProps;
  mainImageUrl: CloudMainImageImageProps;
};

export type CloudMainImageImageProps = {
  name: string;
  url: string;
};

export type CloudImagesArrayProps = {
  name: string;
  url: string;
}[];
