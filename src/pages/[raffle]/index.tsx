import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { ethers } from "ethers";
import React from "react";
import { Box, Image, VStack, HStack, Text } from "@chakra-ui/react";

function Heading() {
  return (
    <>
      <Head>
        <title>Raffle | Quantum Fair</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
    </>
  );
}

interface IRaffleCardProps {
  id: number;
  address: string;
  endTime: Date;
}

const RaffleCard: React.FC<IRaffleCardProps> = ({ address, endTime }) => {
  const [exist, setExist] = useState(false);
  const [image, setImage] = useState(false);
  const { query } = useRouter();

  async function Raffle() {
    try {
      const id = query.id;
      const FairContract = "";
      const ethereum = (window as any).ethereum;
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const provider = new ethers.providers.Web3Provider(ethereum);
      const walletAddress = accounts[0];
      const signer = provider.getSigner(walletAddress);
      const FairProxy = new ethers.Contract(FairContract, Proxy, signer);
      const search = await FairProxy.ids(id);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
    <Box
      w="80%"
      maxW="600px"
      mx="auto"
      p={6}
      borderRadius="xl"
      bg="#efefef"
      boxShadow="lg"
      textAlign="center"
      transform='translateY(75px)'
    >
      <Heading />
      <Text mb={2} color="teal.500">
        Raffle ID #{query.id}
      </Text>
      <HStack spacing="4" justify="center">
        <Box w="300px" h="300px">
          <Image
            src="https://via.placeholder.com/300"
            alt="imagen del NFT"
            objectFit="cover"
            w="100%"
            h="100%"
            borderRadius="md"
          />
        </Box>
        <VStack spacing="4" align="flex-start">
          <Text fontWeight="bold" fontSize="xl">
            Address:
          </Text>
          <Text fontSize="md">0x123...4567</Text>
          <Text fontWeight="bold" fontSize="xl">
            End Time:
          </Text>
          <Text fontSize="md">May 31,2023 at 12:00 PM</Text>
        </VStack>
      </HStack>
    </Box>
    </>
  );
};

export default RaffleCard;
