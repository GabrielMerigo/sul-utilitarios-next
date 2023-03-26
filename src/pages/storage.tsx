import { useEffect, useState } from 'react';
import { CarList, Spinner, AlertWrapper } from '../styles/Storage';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { LineHeaderRed } from '../components/LineHeaderRed';
import { ImSpinner2 } from 'react-icons/im';
import { LineTitle } from '../components/LineTitle';
import { Alert, AlertIcon } from '@chakra-ui/react';
import { BoxItem } from '../components/BoxItem';
import { vehiclesCollection } from '../services/firebase';
import { ButtonWhatsApp } from '../components/ButtonWhatsapp';
import { FirebaseVehicleProps } from '../types/VehiclesTypes';
import { getDocs } from 'firebase/firestore';

export default function Storage() {
  const [cars, setCars] = useState<FirebaseVehicleProps[]>([]);
  const [trucks, setTrucks] = useState<FirebaseVehicleProps[]>([]);
  const [loading, setLoading] = useState(false);

  async function getVehicles() {
    const vehicleSnapshot = await getDocs(vehiclesCollection);
    const vehicles = vehicleSnapshot.docs.map((doc) => ({
      ...doc.data(),
    })) as FirebaseVehicleProps[];
    const orderedVehicles = vehicles.sort((a, b) => {
      return b.created_at.toDate().getTime() - a.created_at.toDate().getTime();
    });
    return orderedVehicles;
  }

  async function renderVehicles() {
    try {
      setLoading(true);
      const resVehicles = await getVehicles();
      const trucksFiltered = resVehicles.filter((vehicle) => vehicle.vehicleType === 'Caminhão');
      const carsFiltered = resVehicles.filter((vehicle) => vehicle.vehicleType === 'Carro');
      setTrucks(trucksFiltered);
      setCars(carsFiltered);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    renderVehicles();
  }, []);

  return (
    <>
      <ButtonWhatsApp />
      <Header />
      <LineHeaderRed />

      {loading ? (
        <Spinner>
          <ImSpinner2 className="loader" />
        </Spinner>
      ) : (
        <>
          <LineTitle title="Carros" />
          <CarList>
            <div className="boxCars">
              {!cars.length ? (
                <AlertWrapper>
                  <Alert className="warning" status="warning">
                    <AlertIcon /> Ainda não há carros em estoque...
                  </Alert>
                </AlertWrapper>
              ) : (
                cars.map(({ ...vehicle }) => (
                  <BoxItem
                    key={vehicle.vehicleId}
                    vehicleId={vehicle.vehicleId}
                    mainImageUrl={vehicle.mainImageUrl}
                    vehicleName={vehicle.vehicleName}
                    description={vehicle.description}
                    vehiclePrice={vehicle.vehiclePrice}
                    vehicleType={vehicle.vehicleType}
                  />
                ))
              )}
            </div>
          </CarList>

          <LineTitle title="Caminhões" />
          <CarList>
            <div className="boxCars">
              {trucks.map(({ ...vehicle }) => (
                <BoxItem
                  key={vehicle.vehicleId}
                  mainImageUrl={vehicle.mainImageUrl}
                  vehicleName={vehicle.vehicleName}
                  description={vehicle.description}
                  vehiclePrice={vehicle.vehiclePrice}
                  vehicleId={vehicle.vehicleId}
                />
              ))}
            </div>

            {!trucks.length && (
              <AlertWrapper>
                <Alert className="warning" status="warning">
                  <AlertIcon /> Ainda não há caminhões em estoque...
                </Alert>
              </AlertWrapper>
            )}
          </CarList>
        </>
      )}

      <Footer marginTop="10" position="static" direction="0" />
    </>
  );
}
