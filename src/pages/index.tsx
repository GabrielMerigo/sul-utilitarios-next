import { Header } from "../components/Header";
import Banner from '../assets/air-landing-hero.png';
import { Footer } from "../components/Footer";
import { Grid, HStack, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import {
  CarList,
  Description,
  Local,
  Map,
  WrapperBanner
} from '../styles/Home';

import { useEffect, useState } from "react";
import { LineTitle } from "../components/LineTitle";
import { BoxItem } from "../components/BoxItem";
import { ImSpinner2 } from "react-icons/im";
import { Spinner } from "../styles/Storage";
import { db, collection, getDocs } from "../services/firebase";
import { MainImage } from "../components/BoxItem/BoxItem";
import { GetStaticProps } from "next";

export interface VehiclesTypes {
  createdAt: string;
  mainImage: MainImage;
  childImages: String[];
  title: string;
  description: string;
  priceFormatted: number;
  id: string;
  isTruck: boolean;
}

export default function Home({ vehiclesJSON }) {
  const vehiclesReturned = JSON.parse(vehiclesJSON)

  return (
    <>
      <Header />
      <WrapperBanner>
        <div>
          <h1>O melhor do comércio automotivo é na <span style={{ color: '#fa5d41' }}>Sul Ultilitários</span>.</h1>
        </div>
        <span className="img">
          <Image
            src={Banner}
            alt="Banner"
            width={1000}
            height={450}
          />
        </span>
      </WrapperBanner>
      <LineTitle title="Adicionados Recentemente" />

      <CarList>
        <div className="boxCars" >
          {vehiclesReturned.slice(0, 6).map(({ mainImage, title, description, priceFormatted, id }) => (
            <BoxItem
              key={id}
              id={id}
              mainImage={mainImage}
              title={title}
              description={description}
              priceFormatted={priceFormatted}
              isNew={true}
              isVehicle={true}
            />
          ))}
        </div>
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
            <h3>- Everson Merigo</h3>
          </div>
        </div>
      </Description>
      <Local>
        <div className="line-title">
          <div></div>
          <h2>Onde Estamos?</h2>
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

export const getStaticProps: GetStaticProps = async () => {
  const vehiclesCol = collection(db, 'vehicles');
  const vehicleSnapshot = await getDocs(vehiclesCol);
  const vehicles = vehicleSnapshot.docs.map(doc => ({...doc.data(), id: doc.id})) as Array<VehiclesTypes>
  const vehiclesJSON = JSON.stringify(vehicles)

  return {
    props: {
      vehiclesJSON
    },
    revalidate: 60
  }
}