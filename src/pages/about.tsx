import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LineHeaderRed } from "../components/LineHeaderRed";
import { LineTitle } from "../components/LineTitle";
import { AboutContent, AboutContainer } from '../styles/AboutContainer';
import BackgroundImage from '../assets/background.jpg'
import Image from 'next/image'
import { ButtonWhatsApp } from "../components/ButtonWhatsapp";

export default function About() {
  return (
    <AboutContainer>
      <ButtonWhatsApp />
      <Header />
      <LineHeaderRed />
      <LineTitle title="Sobre" />
      <AboutContent>
        <div className="imgCompany">
          <Image src={BackgroundImage} alt="foto de um caminhão virado para direita" />
        </div>

        <div className="aboutCompany">
          <h2>Conheça a Sul Utilitários</h2>
          <p>Em meados de 2004 o comerciante e empresario natural da cidade de Veranópolis começou as atividades no ramo
            de revenda de veículos especificamente camionetas localizada na Av. Assis Brasil na cidade de Porto Alegre,
            bairro Sarandi RS, onde iniciou suas atividades, procurando trabalhar sempre com seriedade e honestidade e
            transparência com a clientela.</p>
        </div>

        <div className="aboutOwner">
          <p>
            Trabalhando desta forma obteve muito sucesso no ramo de venda de veículos fidelizando a clientela com um
            trabalho serio e eficiente. Mais tarde mudou a razão social para Sul Utilitários, se especializando na venda
            de caminhões semi novos, conquistando cada vez mais este mercado satisfazendo os clientes que são a base do
            nosso negócio. Trabalhando desta forma obteve muito sucesso no ramo de venda de veículos fidelizando a clientela com um
            trabalho serio e eficiente. Mais tarde mudou a razão social para Sul Utilitários, se especializando na venda
            de caminhões semi novos, conquistando cada vez mais este mercado satisfazendo os clientes que são a base do
            nosso negócio.
          </p>
        </div>
      </AboutContent>
      <Footer marginTop="5" position="static" direction="0" />
    </AboutContainer>
  )
}