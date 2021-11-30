import {
  FooterContainer
} from './styles';


interface FooterProps {
  position: string;
  direction: string;
  marginTop: string;
}

export function Footer(props: FooterProps) {
  return (
    <FooterContainer marginTop={props.marginTop} position={props.position} direction={props.direction}>
      <p>Todos os direitos reservados, Sul Utilitários - Porto Alegre (RS)</p>
      <p>Desenvolvido por <span>Gabriel Merigo</span></p>
    </FooterContainer>
  )
}