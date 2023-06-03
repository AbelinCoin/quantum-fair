import type { AppProps } from "next/app";
import { DAppProvider } from "@usedapp/core";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import Navbar from "../ui/navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DAppProvider config={{}}>
        <Navbar />
        <Component {...pageProps} />
      </DAppProvider>
    </ChakraProvider>
  );
}
