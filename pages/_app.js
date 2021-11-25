import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { GlobalStyles } from "../styles/GlobalStyles";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
