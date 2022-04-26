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
  MenuDivider,
  MenuGroup,
  Button
} from '@chakra-ui/react'

export function Header() {
  const { pathname } = useRouter();

  return (
    <S.HeaderContainer>
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
  
      <S.MenuHamburguer>
        <Menu>
          <MenuButton zIndex={9999} as={Button} background="gray" color="white">
            <GiHamburgerMenu></GiHamburgerMenu>
          </MenuButton>
          <MenuList>
            <MenuGroup title='Profile'>
              <MenuItem>My Account</MenuItem>
              <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title='Help'>
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </S.MenuHamburguer>
    </S.HeaderContainer>
  )
}