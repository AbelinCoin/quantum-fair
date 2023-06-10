import type { AppProps } from "next/app";
import { DAppProvider } from "@usedapp/core";
import './global.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DAppProvider config={{}}>
      <Component {...pageProps} />
      {/* <div className="flex justify-center items-center font-semibold text-4xl bg-white border border-gray-300 shadow-lg mx-6 my-12 p-4 rounded-lg py-12">Tailwind Test</div> */}
    </DAppProvider>
  );
}
