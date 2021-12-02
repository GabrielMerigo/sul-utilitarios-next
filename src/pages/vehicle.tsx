import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import Carro from '../assets/carro-do-pai.jpg'
import { InfoVehicle, DescriptionVehicle, WrapperInfo } from '../styles/Vehicle';
import Image from 'next/image';
import { LineTitle } from "../components/LineTitle";
import { LineHeaderRed } from "../components/LineHeaderRed";
import Slider from "react-slick";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { db, getDoc, doc } from "../services/firebase";
import { useCallback, useEffect, useState, useMemo } from "react";
import { ImSpinner2 } from "react-icons/im";
import { Spinner } from "../styles/Storage";

interface Vehicle {
  createdAt: string;
  mainImage: string;
  childImages: string[];
  priceFormatted: string;
  subtitle: string;
  title: string;
  id: string;
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
            subtitle: docSnap.data().subtitle,
            title: docSnap.data().title,
            id
          });
        })
        .catch(err => console.log)
        .finally(() => setLoading(false))
    }
  }, [id])

  useEffect(() => {
    getVehicle();
  }, [getVehicle])


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
  })

  return (
    <WrapperInfo>
      <Header />
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
                  <div style={{ border: '1px solid black' }}>
                    <img style={{ height: '450px', width: '100%' }} src={img} alt={vehicle?.title} />
                  </div>
                </div>
              ))}
            </Slider>
          </InfoVehicle>

          <DescriptionVehicle>
            <h2>R$ {formattedPrice}</h2>
            <p>{vehicle?.subtitle}</p>
            <button><a href="">Entre em Contato</a></button>
          </DescriptionVehicle>
        </>
      )}

      <Footer marginTop="2" position="static" direction="10" />
    </WrapperInfo>
  )
}