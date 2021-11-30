import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ContainerButton } from '../../styles/Contact'
import { RiWhatsappLine } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import { LineHeaderRed } from "../../components/LineHeaderRed";
import { LineTitle } from "../../components/LineTitle";

export function Contact() {
  return (
    <>
      <Header />
      <LineHeaderRed />
      <LineTitle title="Contato" />
      <ContainerButton>
        <button>
          Contatar pelo Whatsapp
          <RiWhatsappLine/>
        </button>
        <button>
          Contatar por E-mail
          <HiOutlineMail/>
        </button>
      </ContainerButton>
      <Footer marginTop="2" position="absolute" direction="0" ></Footer>
    </>
  )
}