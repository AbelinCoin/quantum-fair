import { ethers } from "ethers";
import { FairHub, Raffle } from "../abis";
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

const InputOpen = styled.input`
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
  const [screen, setScreen] = useState(true);

  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [winners, setWinners] = useState("");
  const [description, setDescription] = useState("");

  const [raffleContract, setraffleContract] = useState(""); // 0x4Acf1C08FD60aFE43e9B4285b8e77646855f5392
  const [nftContract, setnftContract] = useState(""); // 0xf5de760f2e916647fd766B4AD9E85ff943cE3A2b
  const [id, setId] = useState(""); // 2853340
  const [vaultFactory, setvaultFactory] = useState(
    "0xbC462F32aD394cF4dc1200a04c3f03dfaf380375"
  );
  const [vaultRouter, setvaultRouter] = useState(
    "0x04B3ceE98aa97284322CB8591eD3aC33c7a35414"
  );
  const arr = [name, start, end, winners, description];

  async function Args() {
    localStorage.arr = await JSON.stringify(arr);
    setScreen(true);
  }

  async function create() {
    try {
      const FairContract = "0x7E0755a50E1C3b2BB8AbECE23F139Be25B8D5348";
      const ethereum = (window as any).ethereum;
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const provider = new ethers.providers.Web3Provider(ethereum);
      const walletAddress = accounts[0];
      const signer = provider.getSigner(walletAddress);
      const FairProxy = new ethers.Contract(FairContract, FairHub, signer);
      const createRaffle = await FairProxy.createRaffle(start, end, winners, {
        hash: "0xf7baab1baf661869e72d3f70214e394102486912b6ed3872d9bb9d7e36e286c3",
        hash_function: 18,
        size: 32,
      });
      setScreen(true);
    } catch (err) {
      console.error(err);
    }
  }

  async function open() {
    const ethereum = (window as any).ethereum;
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.providers.Web3Provider(ethereum);
    const walletAddress = accounts[0];
    const signer = provider.getSigner(walletAddress);
    const RaffleProxy = new ethers.Contract(raffleContract, Raffle, signer);
    const Open = await RaffleProxy.open(
      vaultFactory,
      vaultRouter,
      [nftContract],
      [id]
    );
    console.log(Open);
  }

  return (
    <Flex>
      {screen ? (
        <OneContent>
          <Typography>CREATE RAFFLE 2/3</Typography>
          <LabelName>Raffle Contract</LabelName>
          <Input
            onChange={(e) => {
              setraffleContract(e.currentTarget.value);
            }}
          />
          <LabelStart>Nft Contract</LabelStart>
          <Input
            onChange={(e) => {
              setnftContract(e.currentTarget.value);
            }}
          />
          <LabelEnd>Token ID</LabelEnd>
          <Input
            type="number"
            onChange={(e) => {
              setId(e.currentTarget.value);
            }}
          />
          <LabelWinners>Vault Factory</LabelWinners>
          <InputOpen value={vaultFactory} readOnly={true} />
          <LabelDesc>Vault Router</LabelDesc>
          <InputOpen value={vaultRouter} readOnly={true} />
          <Button onClick={open}>Create</Button>
        </OneContent>
      ) : (
        <OneContent>
          <Typography>CREATE RAFFLE 1/3</Typography>
          <LabelName>Raffle Name</LabelName>
          <Input
            type="text"
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
          />
          <LabelStart>Start</LabelStart>
          <Input
            type="number"
            onChange={(e) => {
              setStart(e.currentTarget.value);
            }}
          />
          <LabelEnd>End</LabelEnd>
          <Input
            type="number"
            onChange={(e) => {
              setEnd(e.currentTarget.value);
            }}
          />
          <LabelWinners>Winners</LabelWinners>
          <Input
            type="number"
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
          <Button onClick={create}>Next</Button>
        </OneContent>
      )}
    </Flex>
  );
}

export default CreateRaffle;
