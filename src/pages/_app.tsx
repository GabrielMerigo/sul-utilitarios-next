import * as S from './_appStyles';
import { GlobalStyle } from '../styles/global';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider resetCSS theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
        <S.StyledToastContainer />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
