import React, { useState } from "react";
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import styled from "styled-components";
import Navbar from "../../components/nav"
import { ethers } from "ethers";
import { Raffle } from "../../components/abis";
import { Flex, EachCard, Row, Content, Table } from "../../components/styles/div";
import { InputSearch } from "../../components/styles/input";
import { ButtonID } from "../../components/styles/button";
import { Typograph, Typographo, Typographe } from "../../components/styles/typography";


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
  )
}

function NoData() {
  return (
    <Flex>
      <Typographe>No there active raffles yet</Typographe>
    </Flex>
  );
}

const Button = (id: any) => (
  <Link href={`/search?id=${id}`}>
   <ButtonID>Search</ButtonID>
  </Link>
)

function RaffleBoard() {

  const [raffleId, setraffleId] = useState('');  

  return (
    <>
      <Heading />
      <Navbar /> 
      <Flex>
      <Content>
        <Typograph>Raffle Board</Typograph>
        <Typographo>Choose the raffle you want to run.</Typographo>
        <Row>
          <InputSearch onChange={(e) => { setraffleId(e.currentTarget.value)}}/>
          <Button id={raffleId} />
        </Row>
      </Content>
      </Flex>
    </>
  );
}

function RaffleTable() {
  const [active, setActive] = useState(true);
  return <Table>{active ? <EachCard /> : <NoData />}</Table>;
}

export default RaffleBoard


