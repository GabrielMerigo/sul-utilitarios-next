import { HeaderContainer } from './styles';
import Logo from '../../assets/logo-loja.png';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const { pathname } = useLocation();
  console.log(pathname === '/contact')
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo Sul Utilitarios" />
      <nav>
        <ul>
          <Link to="/"><span style={{ color: `${pathname === '/' ? 'red' : '#333333'}`}}>Principal</span></Link>
          <Link to="/storage"><span style={{ color: `${pathname === '/storage' ? 'red' : '#333333'}`}}>Estoque</span></Link>
          <Link to="/about"><span style={{ color: `${pathname === '/about' ? 'red' : '#333333'}`}}>Sobre</span></Link>
          <Link to="/contact"><span style={{ color: `${pathname === '/contact' ? 'red' : '#333333'}`}}>Contato</span></Link>
        </ul>
      </nav>
    </HeaderContainer>
  )
}