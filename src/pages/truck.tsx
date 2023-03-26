import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { InfoVehicle, DescriptionVehicle, WrapperInfo, ParentImage } from '../styles/Vehicle';
import { LineTitle } from '../components/LineTitle';
import { LineHeaderRed } from '../components/LineHeaderRed';
import Slider from 'react-slick';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState, useMemo } from 'react';
import { ImSpinner2 } from 'react-icons/im';
import { Spinner } from '../styles/Storage';
import { createHtmlElementRed, createNumberHtmlElementRed, verifyPrice } from '../utils/methods';
import { vehiclesCollection } from '../services/firebase';
import { getDocs } from 'firebase/firestore';
import { CloudImagesArrayProps, FirebaseVehicleProps } from '../types/VehiclesTypes';
interface ChildImages {
  error: boolean;
  id: string;
  name: string;
  preview: string;
  progress: number;
  readableSize: string;
  uploaded: boolean;
  url: string;
}

interface Vehicle {
  createdAt: string;
  mainImage: string;
  childImages: ChildImages[];
  priceFormatted: string;
  description: string;
  title: string;
  id: string;
  brand: string;
  modelCar: string;
  traction: string;
  bodywork: string;
  yearModel: string;
  yearFabrication: string;
}

export default function Truck() {
  const router = useRouter();
  const id: string = useMemo(() => router.query.id as string, [router.query]);
  const [vehicle, setVehicle] = useState<FirebaseVehicleProps | undefined>(undefined);
  const [images, setImages] = useState<CloudImagesArrayProps>([]);
  const [loading, setLoading] = useState(false);

  const getVehicle = useCallback(async () => {
    if (id) {
      const vehicleSnapshot = await getDocs(vehiclesCollection);
      const vehicles = vehicleSnapshot.docs.map((doc) => ({
        ...doc.data(),
      })) as FirebaseVehicleProps[];
      const vehicle = vehicles.find((vehicle) => id === vehicle.vehicleId);
      setVehicle(vehicle);
      setImages([vehicle.mainImageUrl, ...vehicle.imagesUrl]);
    }
  }, [id]);

  useEffect(() => {
    getVehicle();
  }, [getVehicle]);

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <FaArrowAltCircleLeft
        className={className}
        style={{ ...style, display: 'block', color: '#b21e1e' }}
        onClick={onClick}
      />
    );
  }

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <FaArrowAltCircleRight
        className={className}
        style={{ ...style, display: 'block', color: '#b21e1e' }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const formattedPrice = Number(vehicle?.vehiclePrice).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <>
      <WrapperInfo>
        <Header />
        <LineHeaderRed />
        {loading ? (
          <Spinner>
            <ImSpinner2 className="loader" />
          </Spinner>
        ) : (
          <>
            <LineTitle title={vehicle?.vehicleName} />
            <InfoVehicle>
              <Slider {...settings}>
                {images.map((img) => (
                  <div key={img.url}>
                    <ParentImage>
                      <img
                        style={{ height: '450px', width: '100%' }}
                        src={img.url}
                        alt={img.name}
                      />
                    </ParentImage>
                  </div>
                ))}
              </Slider>
            </InfoVehicle>

            <DescriptionVehicle>
              <h2>Preço: {verifyPrice(formattedPrice)}</h2>
              <p>
                {createHtmlElementRed('Descrição', vehicle?.description)}
                {vehicle?.description}
              </p>
              <p>
                {createHtmlElementRed('Marca', vehicle?.brand)}
                {vehicle?.brand}
              </p>
              <p>
                {createHtmlElementRed('Modelo do Carro', vehicle?.model)}
                {vehicle?.model}
              </p>
              <p>
                {createHtmlElementRed('Tração', vehicle?.traction)}
                {vehicle?.traction}
              </p>
              <p>
                {createHtmlElementRed('Carroceria', vehicle?.bodywork)}
                {vehicle?.bodywork}
              </p>
              <p>
                {createNumberHtmlElementRed('Ano Modelo', vehicle?.manufactureModel)}
                {vehicle?.manufactureModel}
              </p>
              <p>
                {createNumberHtmlElementRed('Ano Fabricação', vehicle?.manufactureYear)}
                {vehicle?.manufactureYear}
              </p>
              <button>
                <a href="https://api.whatsapp.com/send?phone=5551999760312&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Como%20posso%20te%20ajudar%3F">
                  Entre em Contato
                </a>
              </button>
            </DescriptionVehicle>
          </>
        )}
      </WrapperInfo>
      <Footer marginTop="4" position="static" direction="10" />
    </>
  );
}
