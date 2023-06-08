import React, { useState } from "react";
import { FormLabel, Input, Stack, Flex, Button, Text } from "@chakra-ui/react";
import useSmartContract from "../../hooks/useSmartContract";
import { useRouter } from "next/router";

function CreateRaffle() {
  const { create } = useSmartContract();
  const router = useRouter();
  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [winners, setWinners] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [hub, setHub] = useState(""); // 0xca11f9ff5fc64de0445b0a64a27f94cc91f6b9d5

  return (
    <>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Text textAlign={"center"}>CREATE RAFFLE 1/3</Text>
            <FormLabel>Raffle Name</FormLabel>
            <Input
              type="text"
              onChange={(e) => {
                setName(e.currentTarget.value);
              }}
            />
            <FormLabel>Start</FormLabel>
            <Input
              required
              type="number"
              onChange={(e) => {
                setStart(e.target.value);
              }}
            />
            <FormLabel>End</FormLabel>
            <Input
              required
              type="number"
              onChange={(e) => {
                setEnd(e.currentTarget.value);
              }}
            />
            <FormLabel>N° Winners</FormLabel>
            <Input
              required
              type="number"
              onChange={(e) => {
                setWinners(e.currentTarget.value);
              }}
            />
            <FormLabel>Ticker Price</FormLabel>
            <Input
              required
              type="number"
              onChange={(e) => {
                setPrice(e.currentTarget.value);
              }}
            />
            <FormLabel>Description</FormLabel>
            <Input
              onChange={(e) => {
                setDescription(e.currentTarget.value);
              }}
            />
            <Button
              onClick={async () => {
                const fair = await create(start, end, winners, price);
                if (fair.status === 200) {
                  setHub(fair.data);
                  router.push(`/createRaffle/2?contract=${hub}`);
                }
              }}
            >
              Create
            </Button>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
}
export default CreateRaffle;
