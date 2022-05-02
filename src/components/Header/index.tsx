import * as S from './styles';
import Logo from '../../assets/logo-loja.png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Button
} from '@chakra-ui/react'

export function Header() {
  const { pathname } = useRouter();

  function verifyPathName(pathname: string, value: string){
    return pathname === value ? '#eb2d2d' : '#333333'
  }

  return (
    <S.HeaderContainer>
      <Link href="/" passHref>
        <Image src={Logo} alt="Logo Sul Utilitarios" />
      </Link>
      <nav>
        <ul>
          <Link href="/"><a style={{ color: verifyPathName(pathname, '/') }}>Principal</a></Link>
          <Link href="/storage"><a style={{ color: verifyPathName(pathname, '/storage') }}>Estoque</a></Link>
          <Link href="/about"><a style={{ color: verifyPathName(pathname, '/about') }}>Sobre</a></Link>
          <Link href="/contact"><a style={{ color: verifyPathName(pathname, '/contact')  }}>Contato</a></Link>
        </ul>
      </nav>
  
      <S.MenuHamburguer>
        <Menu>
          <MenuButton as={Button} backgroundColor="#c22323" color="white">
            <GiHamburgerMenu></GiHamburgerMenu>
          </MenuButton>
          <MenuList>
            <MenuGroup>
              <Link passHref href="/"><a style={{ color: verifyPathName(pathname, '/') }}><MenuItem>Principal</MenuItem></a></Link>
              <Link passHref href="/storage"><a style={{ color: verifyPathName(pathname, '/storage') }}><MenuItem>Estoque</MenuItem></a></Link>
              <Link passHref href="/about"><a style={{ color: verifyPathName(pathname, '/about') }}><MenuItem>Sobre</MenuItem></a></Link>
              <Link passHref href="/contact"><a style={{ color: verifyPathName(pathname, '/contact') }}><MenuItem>Contato</MenuItem></a></Link>
            </MenuGroup>
          </MenuList>
        </Menu>
      </S.MenuHamburguer>
    </S.HeaderContainer>
  )
}