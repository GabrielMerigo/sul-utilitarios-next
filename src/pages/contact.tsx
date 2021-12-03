import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ContainerButton } from '../styles/Contact'
import { RiWhatsappLine } from 'react-icons/ri';
import { LineHeaderRed } from "../components/LineHeaderRed";
import { LineTitle } from "../components/LineTitle";
import router from 'next/router'

export default function Contact() {
  return (
    <>
      <Header />
      <LineHeaderRed />
      <LineTitle title="Contato" />
      <ContainerButton>
        <button onClick={() => router.push('https://api.whatsapp.com/send?phone=5551999760312&text=Ol%C3%A1%2C%20poderia%20me%20ajudar%3F')}>
          Contatar pelo Whatsapp
          <RiWhatsappLine/>
        </button>
      </ContainerButton>
      <Footer marginTop="0" position="static" direction="0"></Footer>
    </>
  )
}