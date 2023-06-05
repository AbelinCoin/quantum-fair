import type { AppProps } from "next/app";
import { DAppProvider } from "@usedapp/core";
import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import theme from "../theme";
import Navbar from "../ui/navbar";
import config from "../../next-seo.config";
import "../styles/icons.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...config} />
      <ChakraProvider resetCSS theme={theme}>
        <DAppProvider config={{}}>
          <Navbar />
          <Component {...pageProps} />
        </DAppProvider>
      </ChakraProvider>
    </>
  );
}
