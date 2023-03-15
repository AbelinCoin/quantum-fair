import React, { useState } from "react";
import styled from "styled-components";
import ethers from 'ethers'

const Flex = styled.div`
  justify-content: center;
  background: #efefef;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  display: flex;
  align-content: center;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

const Card = styled.div`
  justify-content: center;
  background: #efefef;
  flex-direction: column;
  border-radius: 10px;
  border: 2px solid;
  border-color: #000000;
  align-items: center;
  display: block;
  align-content: center;
  height: 28vh;
  width: 35vh;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

const Table = styled.div`
  justify-content: center;
  background: #efefef;
  flex-direction: column;
  align-items: center;
  display: block;
  align-content: center;
  height: 28vh;
  width: 35vh;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

const OneContent = styled.div`
  justify-content: center;
  background: #efefef;
  flex-direction: column;
  align-items: center;
  display: flex;
  transform: translateY(-245px);
  align-content: center;
  z-index: 12;
`;

const Row = styled.div`
  justify-content: center;
  background: #efefef;
  flex-direction: row;
  align-items: center;
  display: flex;
  align-content: center;
  z-index: 12;
`;

const Typography = styled.h1`
  transform: translateY(30px);
  color: #000000;
  font-size: xx-large;
  font-family: "Poppins";
`;

const Typographo = styled.h1`
  font-size: initial;
  font-family: "Poppins";
  font-weight: unset;
`;

const Typographe = styled.h1`
  font-size: initial;
  font-family: "Poppins";
  font-weight: unset;
`;

const Input = styled.input`
  border-radius: 10px;
  color: #000000;
  margin-top: 2%;
  display: flex;
  height: 5vh;
  font-family: "Poppins";
`;

const Button = styled.button`
  background: #edd8d8;
  border: none;
  margin-left: 10px;
  align-items: center;
  border-radius: 10px;
  color: #000000;
  margin-top: 2%;
  display: flex;
  font-family: "Poppins";
  min-height: 37px;
`;

function NoData() {
  return (
    <Flex>
      <Typographe>No there active raffles yet</Typographe>
    </Flex>
  );
}

function RaffleSearcher() {
  
  async function FindID() {
  const FairContract = "0x173D4A72d8096C97E191104c248475E50DA2d1d3";
  const ethereum = (window as any).ethereum;
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const provider = new ethers.providers.Web3Provider(ethereum);
  const walletAddress = accounts[0];
  const signer = provider.getSigner(walletAddress);
  const RaffleContract = new ethers.Contract(FairContract, QuantumHub, signer)}
  
  return (
    <>
      <OneContent>
        <Typography>Raffle Board</Typography>
        <Typographo>Choose the raffle you want to run.</Typographo>
        <Row>
          <Input />
          <Button onClick={FindID}>Raffle ID</Button>
        </Row>
      </OneContent>
    </>
  );
}

function RaffleTable() {
  const [active, setActive] = useState(true);
  return <Table>{active ? <Card /> : <NoData />}</Table>;
}

function OneBake() {
  return (
    <Flex>
      <RaffleSearcher />
    </Flex>
  );
}

export default OneBake;
