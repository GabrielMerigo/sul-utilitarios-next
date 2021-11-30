import { GlobalStyle } from '../styles/global';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider resetCSS theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp