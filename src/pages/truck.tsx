import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { InfoVehicle, DescriptionVehicle, WrapperInfo, ParentImage } from '../styles/Vehicle';
import { LineTitle } from "../components/LineTitle";
import { LineHeaderRed } from "../components/LineHeaderRed";
import Slider from "react-slick";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { db, getDoc, doc } from "../services/firebase";
import { useCallback, useEffect, useState, useMemo } from "react";
import { ImSpinner2 } from "react-icons/im";
import { Spinner } from "../styles/Storage";
import { createHtmlElementRed, verifyPrice } from '../utils/methods';

interface ChildImages {
  error: boolean
  id: string
  name: string
  preview: string
  progress: number
  readableSize: string
  uploaded: boolean
  url: string
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

export default function Vehicle() {
  const router = useRouter();
  const id: string = useMemo(() => router.query.id as string, [router.query]);
  const [vehicle, setVehicle] = useState<Vehicle | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const getVehicle = useCallback(async () => {
    if (id) {
      setLoading(true)
      const docRef = doc(db, 'vehicles', id);
      await getDoc(docRef)
        .then((docSnap) => {
          setVehicle({
            createdAt: docSnap.data().createdAt,
            mainImage: docSnap.data().mainImage,
            childImages: docSnap.data().childImages,
            priceFormatted: docSnap.data().priceFormatted,
            description: docSnap.data().description,
            title: docSnap.data().title,
            id,
            brand: docSnap.data().marca,
            modelCar: docSnap.data().modelo,
            traction: docSnap.data().tracao,
            bodywork: docSnap.data().carroceria,
            yearModel: docSnap.data().anoModelo,
            yearFabrication: docSnap.data().anoFabricacao,
          });
        })
        .catch(err => console.log)
        .finally(() => setLoading(false))
    }
  }, [id])

  useEffect(() => {
    getVehicle();
  }, [getVehicle]);

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <FaArrowAltCircleLeft
        className={className}
        style={{ ...style, display: "block", color: "#b21e1e" }}
        onClick={onClick}
      />
    );
  }

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <FaArrowAltCircleRight
        className={className}
        style={{ ...style, display: "block", color: '#b21e1e' }}
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
    prevArrow: <SamplePrevArrow />
  };

  const formattedPrice = Number(vehicle?.priceFormatted).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });


  return (
    <>
      <Header />
      <WrapperInfo>
        <LineHeaderRed />
        {loading ? (
          <Spinner>
            <ImSpinner2 className="loader" />
          </Spinner>
        ) : (
          <>
            <LineTitle title={vehicle?.title} />
            <InfoVehicle>
              <Slider {...settings}>
                {vehicle?.childImages.map((img, index) => (
                  <div key={index}>
                    <ParentImage>
                      <img src={img.url} alt={vehicle?.title} />
                    </ParentImage>
                  </div>
                ))}
              </Slider>
            </InfoVehicle>

            <DescriptionVehicle>
              <h2>Preço: {verifyPrice(formattedPrice)}</h2>
              <p>{createHtmlElementRed('Descrição', vehicle?.description)}{vehicle?.description}</p>
              <p>{createHtmlElementRed('Marca', vehicle?.brand)}{vehicle?.brand}</p>
              <p>{createHtmlElementRed('Modelo do Carro', vehicle?.modelCar)}{vehicle?.modelCar}</p>
              <p>{createHtmlElementRed('Tração', vehicle?.traction)}{vehicle?.traction}</p>
              <p>{createHtmlElementRed('Carroceria', vehicle?.bodywork)}{vehicle?.bodywork}</p>
              <p>{createHtmlElementRed('Ano Modelo', vehicle?.yearModel)}{vehicle?.yearModel}</p>
              <p>{createHtmlElementRed('Ano Fabricação', vehicle?.yearFabrication)}{vehicle?.yearFabrication}</p>
              <button><a href="">Entre em Contato</a></button>
            </DescriptionVehicle>
          </>
        )}

      </WrapperInfo>
      <Footer marginTop="4" position="static" direction="10" />
    </>
  )
}