import { FirebaseVehicleProps } from './../types/VehiclesTypes';
import { onSnapshot } from 'firebase/firestore';
import { vehiclesCollection } from './../services/firebase';
import { Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';

export const fetchVehicles = async () => {
  try {
    onSnapshot(vehiclesCollection, (snapshot) => {
      const vehicles = snapshot.docs.map((doc) => doc.data() as FirebaseVehicleProps);
      const orderedVehicles = vehicles.sort((a, b) => {
        return b.created_at.toDate().getTime() - a.created_at.toDate().getTime();
      });
      return orderedVehicles;
    });
  } catch ({ message, name }) {
    toast('Houve um erro ao carregar os dados veiculos:\n' + `${message}:${name}`, {
      className: 'error',
    });
  }
};
