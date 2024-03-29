import { useEffect, useState } from 'react';
import { CarList, Spinner, AlertWrapper } from '../styles/Storage';
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LineHeaderRed } from "../components/LineHeaderRed";
import { VehiclesTypes } from "./index";
import { ImSpinner2 } from "react-icons/im";
import { LineTitle } from '../components/LineTitle';
import { Alert, AlertIcon } from '@chakra-ui/react';
import { BoxItem } from "../components/BoxItem";
import { db, collection, getDocs } from "../services/firebase";
import { ButtonWhatsApp } from '../components/ButtonWhatsapp';

export default function Storage() {
  const [cars, setCars] = useState<VehiclesTypes[]>([]);
  const [trucks, setTrucks] = useState<VehiclesTypes[]>([]);
  const [loading, setLoading] = useState(false);

  async function getVehicles() {
    const vehiclesCol = collection(db, 'vehicles');
    const vehicleSnapshot = await getDocs(vehiclesCol);
    const vehicleList = vehicleSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })) as Array<VehiclesTypes>;
    return vehicleList
  }

  async function renderVehicles() {
    try {
      setLoading(true);
      const resVehicles = await getVehicles();
      const trucksFiltered = resVehicles.filter((vehicle: VehiclesTypes) => vehicle.isTruck);
      const carsFiltered = resVehicles.filter((vehicle: VehiclesTypes) => !vehicle.isTruck);
      setTrucks(trucksFiltered)
      setCars(carsFiltered);
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    renderVehicles();
  }, [])

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
                  <Alert className="warning" status='warning'>
                    <AlertIcon /> Ainda não há carros em estoque...
                  </Alert>
                </AlertWrapper>
              ) : (
                cars.map(({ mainImage, title, description, priceFormatted, isTruck, id }, index) => (
                  <BoxItem
                    key={index}
                    mainImage={mainImage}
                    title={title}
                    description={description}
                    priceFormatted={priceFormatted}
                    id={id}
                    isVehicle={true}
                  />
                )
                ))}
            </div>
          </CarList>

          <LineTitle title="Caminhões" />
          <CarList>
            <div className="boxCars">
              {trucks.map(({ mainImage, title, description, priceFormatted, isTruck, id }, index) => (
                <BoxItem
                  isVehicle={false}
                  key={index}
                  mainImage={mainImage}
                  title={title}
                  description={description}
                  priceFormatted={priceFormatted}
                  id={id}
                />
              ))}
            </div>

            {!trucks.length && (
              <AlertWrapper>
                <Alert className="warning" status='warning'>
                  <AlertIcon /> Ainda não há caminhões em estoque...
                </Alert>
              </AlertWrapper>
            )}
          </CarList>
        </>
      )}

      <Footer marginTop="10" position="static" direction="0" />
    </>
  )
}
