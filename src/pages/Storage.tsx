import { useEffect, useState } from 'react';
import { CarList, Spinner } from '../styles/Storage';
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LineHeaderRed } from "../components/LineHeaderRed";
import { VehiclesTypes } from "../index";
import { api } from "../services/api";
import { ImSpinner2 } from "react-icons/im";
import { LineTitle } from '../components/LineTitle';

export function Storage() {
  const [vehicles, setVehicles] = useState<VehiclesTypes[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/vehicles')
      .then(async response => {
        const data = response.data.vehicles;
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
            
          </CarList>

          <LineTitle title="Caminhões" />
          <CarList>
           
          </CarList>
        </>
      )}

      <Footer marginTop="2" position="static" direction="0" />
    </>
  )
}