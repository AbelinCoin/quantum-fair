import React, { useState } from "react";
import { FormLabel, Input, Stack, Flex, Button, Text } from "@chakra-ui/react";
import useSmartContract from "../../hooks/useSmartContract";
import { useRouter } from "next/router";

function CreateRaffle() {
  const { open, findByHub } = useSmartContract();
  const router = useRouter();
  const { query } = useRouter();
  const vaultFactory = "0xE37F25b41D33AF5A6844aE910C2390d6954f9a61";
  const vaultRouter = "0x04B3ceE98aa97284322CB8591eD3aC33c7a35414";
  const [nftContract, setnftContract] = useState(""); // 0x38abA480f2bA7A17bC01EE5E1AD64fCedd93EfE7
  const [id, setId] = useState(""); // 29
  const [hub, setHub] = useState(query.contract); // 0xca11f9ff5fc64de0445b0a64a27f94cc91f6b9d5

  return (
    <>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Text textAlign={"center"}>CREATE RAFFLE 2/3</Text>
            <FormLabel>Raffle Contract</FormLabel>
            <Input
              required
              type="text"
              value={query.contract}
              readOnly={query.contract ? true : false}
              onChange={(e) => {
                setHub(e.target.value);
              }}
            />
            <FormLabel>Nft Contract</FormLabel>
            <Input
              required
              onChange={(e) => {
                setnftContract(e.currentTarget.value);
              }}
            />
            <FormLabel>Token ID</FormLabel>
            <Input
              required
              type="number"
              onChange={(e) => {
                setId(e.currentTarget.value);
              }}
            />
            <FormLabel>Vault Factory</FormLabel>
            <Input value={vaultFactory} readOnly={true} />
            <FormLabel>Vault Router</FormLabel>
            <Input value={vaultRouter} readOnly={true} />
            <Button
              onClick={async () => {
                const fair = await open(nftContract, hub as string, id);
                if (fair.status === 200) {
                  router.push(`/raffle?contract=${hub as string}`);
                }
              }}
            >
              Open
            </Button>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
}
export default CreateRaffle;
