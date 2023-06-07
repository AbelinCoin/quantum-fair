import React, { useState } from "react";
import Link from "next/link";
import { Button, Flex, Input, Stack, Text } from "@chakra-ui/react";

function RaffleBoard() {
  const [raffleId, setraffleId] = useState("");

  return (
    <>
      <Flex>
        <Text>Raffle Board</Text>
        <Text>Choose the raffle you want to run.</Text>
        <Stack>
          <Input
            onChange={(e) => {
              setraffleId(e.currentTarget.value);
            }}
          />
          <Link
            style={{ textDecoration: "none" }}
            href={`/raffle?id=${raffleId}`}
          >
            <Button>Search</Button>
          </Link>
        </Stack>
      </Flex>
    </>
  );
}

export default RaffleBoard;
