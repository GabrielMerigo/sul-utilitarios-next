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
import { db, collection, getDocs } from "../services/firebase";

export default function Vehicle() {
  const { id } = useRouter().query;
  console.log(collection(db,'vehicles'))

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

  return (
    <WrapperInfo>
      <Header />
      <LineHeaderRed />
      <LineTitle title="Ecosport 2005 XLS" />
      <InfoVehicle>
        <Slider {...settings}>
          <div>
            <div style={{ border: '1px solid black' }}>
              <Image height={450} width={850} src={Carro} alt="carro" />
            </div>
          </div>
          <div>
            <div style={{ border: '1px solid black' }}>
              <Image height={450} width={850} src={Carro} alt="carro" />
            </div>
          </div>
          <div>
            <div style={{ border: '1px solid black' }}>
              <Image height={450} width={850} src={Carro} alt="carro" />
            </div>
          </div>
          <div>
            <div style={{ border: '1px solid black' }}>
              <Image height={450} width={850} src={Carro} alt="carro" />
            </div>
          </div>
        </Slider>
      </InfoVehicle>

      <DescriptionVehicle>
        <h2>R$26.000,00</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <button><a href="">Entre em Contato</a></button>
      </DescriptionVehicle>
      <Footer marginTop="2" position="static" direction="10" />
    </WrapperInfo>
  )
}