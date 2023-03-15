import Head from "next/head"
import Navbar from "../../components/nav"
import OneBake from "../../components/board"

function Heading() {
  return (
    <>
      <Head>
        <title>Raffle Board | Quantum Fair</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://i.ibb.co/xJxBBbv/QF-Media-kit-ref.png" />
      </Head>
    </>
  )
}

function Board() {
    return (
  <>
    <Heading />
    <Navbar /> 
    <OneBake />     
  </>
 )
}

export default Board