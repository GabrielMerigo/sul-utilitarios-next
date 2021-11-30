import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Storage } from "./pages/Storage";
import { theme } from "./styles/theme";
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/storage" element={<Storage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;