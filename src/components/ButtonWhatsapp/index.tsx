import * as S from './styles';
import { BsWhatsapp as IconWhatsApp } from 'react-icons/bs';

export function ButtonWhatsApp() {
  return (
    <S.Container>
      <a href="https://api.whatsapp.com/send?phone=5551999760312&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Como%20posso%20te%20ajudar%3F">
        <IconWhatsApp size={30}></IconWhatsApp>
      </a>
    </S.Container>
  )
}