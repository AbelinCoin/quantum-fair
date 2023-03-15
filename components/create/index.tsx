import { ethers } from "ethers";
import { FairHub } from "../abis";
import React, { useState } from "react";
import styled from "styled-components";

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
  cursor: pointer;
  margin-top: 2%;
  display: flex;
  font-family: "Poppins";
  min-height: 37px;
`;

const Typography = styled.h1`
  color: #000000;
  font-size: xx-large;
  font-family: "Poppins";
`;

const OneContent = styled.div`
  justify-content: center;
  background: #efefef;
  flex-direction: column;
  align-items: center;
  display: flex;
  transform: translateY(-175px);
  align-content: center;
  z-index: 12;
`;

function CreateRaffle() {
  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [winners, setWinners] = useState("");
  const [description, setDescription] = useState("");

  async function Initialize() {
    const FairContract = "0xa1eB5e2893442B0Eeb115eE0B31470790EE9D1a7";
    const ethereum = (window as any).ethereum;
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.providers.Web3Provider(ethereum);
    const walletAddress = accounts[0];
    const signer = provider.getSigner(walletAddress);
    const FairProxy = new ethers.Contract(FairContract, FairHub, signer);
    const Create = await FairProxy.createRaffle();
    console.log(Create);
  }

  return (
    <Flex>
      <OneContent>
        <Typography>Create Raffle 1/3</Typography>
        <Input
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
        />
        <Input
          onChange={(e) => {
            setStart(e.currentTarget.value);
          }}
        />
        <Input
          onChange={(e) => {
            setEnd(e.currentTarget.value);
          }}
        />
        <Input
          onChange={(e) => {
            setWinners(e.currentTarget.value);
          }}
        />
        <Input
          onChange={(e) => {
            setDescription(e.currentTarget.value);
          }}
        />
      </OneContent>
    </Flex>
  );
}

export default CreateRaffle;
