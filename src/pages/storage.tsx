import { useCallback, useEffect, useState } from 'react';
import { CarList, Spinner } from '../styles/Storage';
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LineHeaderRed } from "../components/LineHeaderRed";
import { VehiclesTypes } from "./index";
import { ImSpinner2 } from "react-icons/im";
import { LineTitle } from '../components/LineTitle';
import { Alert, AlertIcon, Grid, Stack } from '@chakra-ui/react';
import { BoxItem } from "../components/BoxItem";
import { db, collection, getDocs } from "../services/firebase";

export default function Storage() {
  const [cars, setCars] = useState<VehiclesTypes[]>([]);
  const [trucks, setTrucks] = useState<VehiclesTypes[]>([]);
  const [loading, setLoading] = useState(false);

  async function getVehicles(db) {
    const vehiclesCol = collection(db, 'vehicles');
    const vehicleSnapshot = await getDocs(vehiclesCol);
    const vehicleList = vehicleSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })) as Array<VehiclesTypes>;
    return vehicleList
  }

  async function renderVehicles() {
    try {
      setLoading(true);
      const resVehicles = await getVehicles(db);
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
          <Stack direction={['column', 'row']} spacing="24px">
              {!cars.length ? (
                <Alert status='warning'>
                <AlertIcon /> Estamos com o estoque de carros zerado...
                </Alert>
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
            </Stack>
          </CarList>

          <LineTitle title="Caminhões" />
          <CarList>
            <Grid templateColumns="repeat(3, 1fr)" gap={3}>
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
            </Grid>
            
            {!trucks.length && (
              <Alert status='warning'>
                <AlertIcon />
                Estamos com o estoque de caminhões zerado...
              </Alert>
            )}
          </CarList>
        </>
      )}

      <Footer marginTop="2" position="static" direction="0" />
    </>
  )
}
