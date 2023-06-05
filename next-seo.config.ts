import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  titleTemplate: `%s @ Quantum Fair.`,
  title: `Quantum Fair`,
  description: `Quantum Fair - Raffles`,
  canonical: `https://olivefoodsco.com`,
  openGraph: {
    type: `website`,
    locale: `en_US`,
    url: `https://ut5ktg-3000.csb.app/`,
    title: `Quantum Fair`,
    siteName: `Quantum Fair`,
    description: `Quantum Fair - Raffles`,
    images: [
      {
        url: `https://github.com/ronniekram/olive-foods/blob/dev/web/public/opengraph.png`,
        width: 1200,
        height: 630,
        alt: `Quantum Fair - Raffles`,
        type: `image/png`,
      },
    ],
  },
  twitter: {
    cardType: `summary_large_image`,
  },
  additionalMetaTags: [
    {
      name: `viewport`,
      content: `width=device-width, initial-scale=1.0`,
    },
  ],
};

export default config;