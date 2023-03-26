import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import moment from 'moment';
import { LineTitle } from '../components/LineTitle';
import { BoxItem } from '../components/BoxItem';
import { vehiclesCollection } from '../services/firebase';
import { MainImage } from '../components/BoxItem/BoxItem';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

import { CarList, Description, Local, Map, WrapperBanner } from '../styles/Home';
import { ButtonWhatsApp } from '../components/ButtonWhatsapp';
import { FirebaseVehicleProps } from '../types/VehiclesTypes';
import { getDocs } from 'firebase/firestore';
export interface VehiclesTypes {
  createdAt: { seconds: number };
  mainImage: MainImage;
  childImages: String[];
  title: string;
  description: string;
  priceFormatted: number;
  id: string;
  isTruck: boolean;
}

export default function Home({ vehiclesJSON }) {
  const vehiclesReturned = JSON.parse(vehiclesJSON);

  const verifyData = (seconds: number) => {
    const actualData = moment();
    const created = moment(seconds * 1000).format('DD/MM/YYYY');
    const diff = moment(actualData, 'DD/MM/YYYY').diff(moment(created, 'DD/MM/YYYY'));
    const diffrence = Math.floor(moment.duration(diff).asDays());
    return diffrence > 7 ? false : true;
  };

  return (
    <>
      <Header />
      <ButtonWhatsApp />
      <WrapperBanner>
        <div>
          <div className="img" style={{ height: '300px' }}>
            <h1>
              O melhor negócio para caminhões utilitários é na {<br />}{' '}
              <span style={{ color: '#fa5d41' }}>Sul Ultilitários</span>.
            </h1>
          </div>
        </div>
      </WrapperBanner>
      <LineTitle title="Adicionados Recentemente" />

      <CarList>
        <div className="boxCars">
          {vehiclesReturned.slice(0, 6).map(({ ...vehicle }: FirebaseVehicleProps) => (
            <BoxItem
              key={vehicle.vehicleId}
              vehicleId={vehicle.vehicleId}
              mainImageUrl={vehicle.mainImageUrl}
              vehicleName={vehicle.vehicleName}
              description={vehicle.description}
              vehiclePrice={vehicle.vehiclePrice}
              vehicleType={vehicle.vehicleType}
              isNew={verifyData(vehicle.created_at.seconds)}
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
          <Link passHref href="/about">
            <button>Saiba Mais</button>
          </Link>
        </div>

        <div>
          <h2>Depoimentos</h2>
          <p>
            Sul Ultilitários é uma ótima empresa! Sempre foi exemplo no ramo onde sempre tive
            orgulho de excer meu trabalho.
          </p>
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
          <iframe src="https://maps.google.com/maps?width=595&height=400&hl=en&q=Avenida%20sertorio,7140%20Porto%20Alegre+(Loja%20-%20Sul%20Ultilit%C3%A1rios)&t=&z=16&ie=UTF8&iwloc=B&output=embed"></iframe>
        </Map>
      </Local>
      <Footer marginTop="0" position="static" direction="0" />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const vehicleSnapshot = await getDocs(vehiclesCollection);
  const vehicles = vehicleSnapshot.docs.map((doc) => ({
    ...doc.data(),
  })) as FirebaseVehicleProps[];
  const orderedVehicles = vehicles.sort((a, b) => {
    return b.created_at.toDate().getTime() - a.created_at.toDate().getTime();
  });

  const vehiclesJSON = JSON.stringify(orderedVehicles);
  return {
    props: {
      vehiclesJSON,
    },
  };
};
