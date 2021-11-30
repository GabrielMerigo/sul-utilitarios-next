import { Header } from "../components/Header";
import Banner from '../../assets/banner-black.png';
import { Footer } from "../components/Footer";
import { Grid } from '@chakra-ui/react';
import Image from 'next/image';
import { createServer, Model } from 'miragejs';
import {
  CarList,
  Description,
  Local,
  Map
} from '../styles/Home';

import ArrowRight from '../../assets/arrow-right.png';
import ArrowLeft from '../../assets/arrow-left.png';
import { api } from "../services/api";
import { useEffect, useState } from "react";
import { LineTitle } from "../components/LineTitle";
import { BoxItem } from "../components/BoxItem";
import { ImSpinner2 } from "react-icons/im";
import { Spinner } from "../styles/Storage";

export interface VehiclesTypes {
  img: string;
  title: string;
  subtitle: string;
  formattedPrice: number;
  id: number;
}


const vehicles = 'vehicles';
const url = '/vehicles';

createServer({
  models: {
    vehicles: Model
  },

  seeds(server){
    server.db.loadData({
      vehicles: [
        {
          img: 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/1.png',
          title: 'FORD ECOSPORT 2005 XLS',
          subtitle: '1.6 Ano 2004/2005 com gnv completa, financia, recebemos troca.'
        },
        {
          img: 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/4.png',
          title: 'VW GOLF 1.6 GNV',
          subtitle: 'Completo 0KM. Perfeita condições. Vale a pena comprar.'
        },
        {
          img: 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/6.png',
          title: 'Audi 8000 - 1.6',
          subtitle: 'Financiado único dono. Sem gravame.'
        },
        {
          img: 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/1.png',
          title: 'FORD ECOSPORT 2005 XLS',
          subtitle: '1.6 Ano 2004/2005 com gnv completa, financia, recebemos troca.'
        },
        {
          img: 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/4.png',
          title: 'VW GOLF 1.6 GNV',
          subtitle: 'Unico dono e Novas rodas. 0KM rodado. Esse tá bom hein!'
        },
        {
          img: 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/6.png',
          title: 'VW GOLF 1.6 GNV',
          subtitle: 'Porshe KN a diesel e 100 mil KM rodado. Bem baratinho.'
        },
        {
          img: 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/6.png',
          title: 'VW GOLF 1.6 GNV',
          subtitle: 'Porshe KN a diesel e 100 mil KM rodado. Bem baratinho.'
        },
        {
          img: 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/6.png',
          title: 'VW GOLF 1.6 GNV',
          subtitle: 'Porshe KN a diesel e 100 mil KM rodado. Bem baratinho.'
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/vehicles', () => {
      return this.schema.all(vehicles);
    })

    this.post(url, (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create(vehicles, data)
    })
  }
})

export function Home() {
  const [vehicles, setVehicles] = useState<VehiclesTypes[]>([]);
  const [firstSixVehicles, setFirstSixVehicles] = useState<VehiclesTypes[]>([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    api.get('/vehicles')
      .then(async response => {
        const data = response.data.vehicles;
        setVehicles(data);
        setFirstSixVehicles(vehicles.slice(0, 6))
      })
      .catch(() => {
        console.log('erro ao carregamento de dados.');
      })
      .finally(() => {
        setLoading(false);
      })
  }, [vehicles])

  return (
    <>
      <Header />
      <div>
        <Image src={Banner} alt="Banner" />
      </div>
      <LineTitle title="Adicionados Recentemente" />

      <CarList>,
        {loading ? (
          <Spinner>
            <ImSpinner2 className="loader" />
          </Spinner>
        ) : (
          <>
            <Grid templateColumns="repeat(3, 1fr)" gap={3}>
              {firstSixVehicles.map(({ img, title, subtitle, formattedPrice }, index) => (
                <BoxItem
                  key={index}
                  img={img}
                  title={title}
                  description={subtitle}
                  formattedPrice={formattedPrice}
                  isNew={true}
                />
              ))}
            </Grid>
          </>
        )}
      </CarList>

      <Description>
        <div>
          <div>
            <h2>Serviços</h2>
            <ul>
              <li>Compra</li>
              <li>Venda</li>
              <li>Financia</li>
              <li>Consultoria</li>
              <li>Indicação de Mecanicos e Peças</li>
            </ul>
          </div>
          <button>Saiba Mais</button>
        </div>

        <div>
          <h2>Depoimentos</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptates necessitatibus culpa, ratione deleniti magnam ullam vero consectetur voluptatibus incidunt est quos quidem, aperiam officiis repellendus, labore veniam possimus dolor!</p>
          <div>
            <span>
              <Image src={ArrowLeft} alt="ArrowRight" />
              <Image src={ArrowRight} alt="ArrowRight" />
            </span>
            <h3>- João Tavares</h3>
          </div>
        </div>
      </Description>
      <Local>
        <div className="line-title">
          <div></div>
          <h2>Onde Estamos</h2>
        </div>

        <Map>
          <div>
            <iframe src="https://maps.google.com/maps?width=595&height=400&hl=en&q=Avenida%20sertorio,7140%20Porto%20Alegre+(Loja%20-%20Sul%20Ultilit%C3%A1rios)&t=&z=16&ie=UTF8&iwloc=B&output=embed"></iframe>
          </div>
        </Map>
      </Local>
      <Footer marginTop="0" position="static" direction="0" />
    </>
  )
}