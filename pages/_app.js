import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { GlobalStyles } from "../styles/GlobalStyles";

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
