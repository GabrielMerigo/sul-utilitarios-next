import { useEffect, useState } from 'react';
import { CarList, Spinner } from '../styles/Storage';
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LineHeaderRed } from "../components/LineHeaderRed";
import { VehiclesTypes } from "./index";
import { api } from "../services/api";
import { ImSpinner2 } from "react-icons/im";
import { LineTitle } from '../components/LineTitle';
import { Grid } from '@chakra-ui/react';
import { BoxItem } from "../components/BoxItem";

export default function Storage() {
  const [vehicles, setVehicles] = useState<VehiclesTypes[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/vehicles')
      .then(async response => {
        const data = response.data;
        setVehicles(data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
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
              {vehicles.map(({ img, title, subtitle, formattedPrice, id }, index) => (
                <BoxItem
                  key={index}
                  img={img}
                  title={title}
                  description={subtitle}
                  formattedPrice={formattedPrice}
                  id={id}
                />
              ))}
            </Grid>
          </CarList>

          <LineTitle title="Caminhões" />
          <CarList>
            <Grid templateColumns="repeat(3, 1fr)" gap={3}>
              {vehicles.map(({ img, title, subtitle, formattedPrice, id }, index) => (
                <BoxItem
                  key={index}
                  img={img}
                  title={title}
                  description={subtitle}
                  formattedPrice={formattedPrice}
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