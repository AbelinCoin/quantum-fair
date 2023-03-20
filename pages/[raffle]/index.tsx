import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../../components/nav";
import { Flex, CardSearch } from "../../components/styles/div";
import { RffId } from "../../components/styles/typography";

function Heading() {
  return (
    <>
      <Head>
        <title>Raffle Board | Quantum Fair</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
    </>
  );
}

function Search() {
  const { query } = useRouter();
  return (
    <>
      <Heading />
      <Navbar />
      <Flex>
        <CardSearch>
          <RffId>Raffle N #{query.id}</RffId>
        </CardSearch>
      </Flex>
    </>
  );
}

export default Search;
