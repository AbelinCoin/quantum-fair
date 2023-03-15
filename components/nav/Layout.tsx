import React, { useState } from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { FaBars } from "react-icons/fa";
import { useDisclosure } from "@chakra-ui/react";
import ConnectButton from "./ConnectButton";
import AccountModal from "./AccountModal";

export default function Layout() {
  const [bool, setBool] = useState("none");
  const src = "https://i.ibb.co/xJxBBbv/QF-Media-kit-ref.png";

  function Active() {
    setBool("flex");
    if (bool === "flex") {
      setBool("none");
    }
  }

  const translate = keyframes`
  from {
    transform: translateX(-80px);
  } to {
    transform: translateX(1px);
  } 
`;

  const Nav = styled.nav`
    align-items: center;
    background: #efefef;
    height: 65px;
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
  `;

  const BG = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
      display: flex;
      margin-left: 10px;
    }
  `;

  const LG = styled.div`
    margin-top: 1.3%;
    display: none;
    @media screen and (max-width: 768px) {
      display: flex;
      margin-left: 20px;
    }
  `;

  const NavData = styled.a`
    color: #000000;
    font-size: medium;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    font-family: "Poppins", sans-sherif;
    height: 100%;
    cursor: pointer;
    &.active {
      color: #000000;
    }
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
      cursor: pointer;
    }
  `;

  const NavJot = styled.li`
    color: #fff;
    align-items: center;
    padding: 0 1rem;
    font-family: "Poppins", sans-sherif;
    height: 100%;
    cursor: pointer;
    &.active {
      color: #000000;
    }
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
      cursor: pointer;
    }
  `;

  const Typography = styled.a`
    color: #000000;
    margin-left: 10px;
    text-decoration: none;
    font-size: medium;
    font-family: "Poppins";
  `;

  const Bars = styled(FaBars)`
    display: none;
    color: #fff;
    @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 75%);
      font-size: 1.8rem;
      cursor: pointer;
    }
  `;

  const NavActive = styled.div`
    display: none;
    background-color: #0000;
    height: 100vh;
    @media screen and (max-width: 768px) {
      animation: ${translate} 0.3s linear;
      display: ${bool};
      background-color: #0000;
      height: 20vh;
      flex-direction: column;
      margin-top: 30px;
    }
  `;

  const NavMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: -24px;
    @media screen and (max-width: 768px) {
      display: none;
    }
  `;

  const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px) {
      display: none;
    }
  `;

  function Link1() {
    window.open("https://bit.ly/chatgpt-whatsapp");
  }

  function Link2() {
    window.open("https://");
  }

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Nav>
      <Bars onClick={Active} />
      <BG>
        <Image loader={() => src} alt="Logo" src={src} height="30" width="30" />
        <Typography href="/">QuantumFair</Typography>
      </BG>
      <NavMenu>
        <NavData href="/createRaffle">Create Raffle</NavData>
        <NavData href="/raffleBoard">Raffle Board</NavData>
      </NavMenu>
      <NavBtn>
        <ConnectButton handleOpenModal={onOpen} />
        <AccountModal isOpen={isOpen} onClose={onClose} />
      </NavBtn>
      <NavActive>
        <NavJot>Create Raffle</NavJot>
        <NavJot>Raffle Board</NavJot>
      </NavActive>
    </Nav>
  );
}
