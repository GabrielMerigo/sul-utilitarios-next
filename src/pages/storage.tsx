import { useCallback, useEffect, useState } from 'react';
import { CarList, Spinner } from '../styles/Storage';
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LineHeaderRed } from "../components/LineHeaderRed";
import { VehiclesTypes } from "./index";
import { ImSpinner2 } from "react-icons/im";
import { LineTitle } from '../components/LineTitle';
import { Grid } from '@chakra-ui/react';
import { BoxItem } from "../components/BoxItem";
import { db, collection, getDocs } from "../services/firebase";

export default function Storage() {
  const [vehicles, setVehicles] = useState<VehiclesTypes[]>([]);
  const [trucks, setTrucks] = useState<VehiclesTypes[]>([]);
  const [loading, setLoading] = useState(false);

  async function getVehicles(db) {
    const vehiclesCol = collection(db, 'vehicles');
    const vehicleSnapshot = await getDocs(vehiclesCol);
    const vehicleList = vehicleSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })) as Array<VehiclesTypes>;
    return vehicleList
  }

  async function getTrucks(db) {
    const trucksCol = collection(db, 'trucks');
    const trucksSnapshot = await getDocs(trucksCol);
    const trucksList = trucksSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })) as Array<VehiclesTypes>;
    return trucksList
  }

  async function getCars() {
    try {
      setLoading(true);
      const resVehicles = await getVehicles(db);
      const resTrucks = await getTrucks(db);
      setVehicles(resVehicles);
      setTrucks(resTrucks);
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false);
    }
  }



  useEffect(() => {
    getCars();
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
            <Grid templateColumns="repeat(3, 1fr)" gap={3}>
              {vehicles.map(({ mainImage, title, description, priceFormatted, id }, index) => (
                <BoxItem
                  key={index}
                  mainImage={mainImage}
                  title={title}
                  description={description}
                  priceFormatted={priceFormatted}
                  id={id}
                  isVehicle={true}
                />
              ))}
            </Grid>
          </CarList>

          <LineTitle title="Caminhões" />
          <CarList>
            <Grid templateColumns="repeat(3, 1fr)" gap={3}>
              {trucks.map(({ mainImage, title, description, priceFormatted, id }, index) => (
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
          </CarList>
        </>
      )}

      <Footer marginTop="2" position="static" direction="0" />
    </>
  )
}