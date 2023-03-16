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
  margin-top: 5%;
  display: flex;
  background: transparent;
  min-width: 30rem;
  height: 5vh;
  font-family: "Poppins";
`;

const InputDesc = styled.input`
  border-radius: 10px;
  color: #00000;
  background: transparent;
  margin-top: 5%;
  display: flex;
  min-width: 30rem;
  height: 15vh;
  font-family: "Poppins";
`;

const Button = styled.button`
  background: #ede500;
  border: none;
  margin-left: 10px;
  align-items: center;
  border-radius: 10px;
  color: #000000;
  cursor: pointer;
  margin-top: 4%;
  display: flex;
  font-family: "Poppins";
  min-height: 37px;
  min-width: 6rem;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  transform: translateX(183px);
`;

const Typography = styled.h1`
  color: #000000;
  font-size: xx-large;
  font-family: "Poppins";
`;

const LabelStart = styled.label`
  color: #000000;
  font-size: initial;
  font-weight: bold;
  font-family: "Poppins";
  transform: translate(-218px, 15px);
`;

const LabelEnd = styled.label`
  color: #000000;
  font-size: initial;
  font-weight: bold;
  font-family: "Poppins";
  transform: translate(-220px, 15px);
`;

const LabelWinners = styled.label`
  color: #000000;
  font-size: initial;
  font-weight: bold;
  font-family: "Poppins";
  transform: translate(-205px, 15px);
`;

const LabelDesc = styled.label`
  color: #000000;
  font-size: initial;
  font-weight: bold;
  font-family: "Poppins";
  transform: translate(-190px, 15px);
`;

const LabelName = styled.label`
  color: #000000;
  font-size: initial;
  font-weight: bold;
  font-family: "Poppins";
  transform: translate(-185px, 15px);
`;

const OneContent = styled.div`
  justify-content: center;
  background: #efefef;
  flex-direction: column;
  align-items: center;
  display: flex;
  transform: translateY(0px);
  align-content: center;
  z-index: 12;
`;

function CreateRaffle() {
  const [screen, setScreen] = useState(false);
  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [winners, setWinners] = useState("");
  const [description, setDescription] = useState("");
  const arr = [name, start, end, winners, description];

  async function Agrs() {
    localStorage.arr = await JSON.stringify(arr);
  }

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
        <Typography>CREATE RAFFLE 1/3</Typography>
        <LabelName>Raffle Name</LabelName>
        <Input
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
        />
        <LabelStart>Start</LabelStart>
        <Input
          onChange={(e) => {
            setStart(e.currentTarget.value);
          }}
        />
        <LabelEnd>End</LabelEnd>
        <Input
          onChange={(e) => {
            setEnd(e.currentTarget.value);
          }}
        />
        <LabelWinners>Winners</LabelWinners>
        <Input
          onChange={(e) => {
            setWinners(e.currentTarget.value);
          }}
        />
        <LabelDesc>Description</LabelDesc>
        <InputDesc
          onChange={(e) => {
            setDescription(e.currentTarget.value);
          }}
        />
        <Button>Next</Button>
      </OneContent>
    </Flex>
  );
}

export default CreateRaffle;
