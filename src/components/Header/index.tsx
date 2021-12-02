import { HeaderContainer } from './styles';
import Logo from '../../assets/logo-loja.png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

export function Header() {
  const { pathname } = useRouter();

  return (
    <HeaderContainer>
      <Link href="/" passHref>
        <Image src={Logo} alt="Logo Sul Utilitarios" />
      </Link>
      <nav>
        <ul>
          <Link href="/"><a style={{ color: `${pathname === '/' ? 'red' : '#333333'}` }}>Principal</a></Link>
          <Link href="/storage"><a style={{ color: `${pathname === '/storage' ? 'red' : '#333333'}` }}>Estoque</a></Link>
          <Link href="/about"><a style={{ color: `${pathname === '/about' ? 'red' : '#333333'}` }}>Sobre</a></Link>
          <Link href="/contact"><a style={{ color: `${pathname === '/contact' ? 'red' : '#333333'}` }}>Contato</a></Link>
        </ul>
      </nav>
    </HeaderContainer>
  )
}