import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Input,
  Button,
} from "@chakra-ui/react";
import { IoPerson, IoTimeSharp, IoPeople } from "react-icons/io5";
import { useRouter } from "next/router";
import { FeatureProps, RaffleProps } from "../../types";
import { useEffect, useState } from "react";
import useSmartContract from "../../hooks/useSmartContract";
import { useEthers } from "@usedapp/core";
import useIcons from "../../ui/icons";

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

function NoConnected() {
  const { Metamask } = useIcons();
  return (
    <>
      <Stack
        boxShadow={"2xl"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        p={10}
        spacing={8}
        align={"center"}
        position={"absolute"}
      >
        <Icon as={Metamask} w={24} h={24} />
        <Stack align={"center"} spacing={2}>
          <Heading
            textTransform={"uppercase"}
            fontSize={"3xl"}
            color={useColorModeValue("gray.800", "gray.200")}
          >
            Subscribe
          </Heading>
          <Text fontSize={"lg"} color={"gray.500"}>
            Subscribe to our newsletter & stay up to date!
          </Text>
        </Stack>
        <Stack spacing={4} direction={{ base: "column", md: "row" }} w={"full"}>
          <Input
            type={"text"}
            placeholder={"john@doe.net"}
            color={useColorModeValue("gray.800", "gray.200")}
            bg={useColorModeValue("gray.100", "gray.600")}
            rounded={"full"}
            border={0}
            _focus={{
              bg: useColorModeValue("gray.200", "gray.800"),
              outline: "none",
            }}
          />
          <Button
            bg={"blue.400"}
            rounded={"full"}
            color={"white"}
            flex={"1 0 auto"}
            _hover={{ bg: "blue.500" }}
            _focus={{ bg: "blue.500" }}
          >
            Subscribe
          </Button>
        </Stack>
      </Stack>
    </>
  );
}

export default function Raffle() {
  const { query } = useRouter();
  const { findByHub } = useSmartContract();

  const { active, activateBrowserWallet, account } = useEthers();
  const [params, setParams] = useState<RaffleProps>();

  useEffect(() => {
    async () => {
      if (active) {
        const getParams = await findByHub(query.contract);
        setParams(getParams);
      } else {
        activateBrowserWallet();
      }
    };
  });

  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {!active && <NoConnected />}
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            #{params?.id}
          </Text>
          <Heading>Raffle name should be here</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={<Icon as={IoPerson} color={"yellow.500"} w={5} h={5} />}
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={params?.owner!}
            />
            <Feature
              icon={<Icon as={IoTimeSharp} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={params?.startTime!}
            />
            <Feature
              icon={<Icon as={IoPeople} color={"purple.500"} w={5} h={5} />}
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={params?.endTime!}
            />
            {active && account == params?.owner! ? (
              <Button
                bg={"blue.400"}
                color={"white"}
                flex={"1 0 auto"}
                _hover={{ bg: "blue.500" }}
                _focus={{ bg: "blue.500" }}
              >
                Finish
              </Button>
            ) : (
              <Button
                bg={"blue.400"}
                color={"white"}
                flex={"1 0 auto"}
                _hover={{ bg: "blue.500" }}
                _focus={{ bg: "blue.500" }}
              >
                Enter
              </Button>
            )}
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"/images/curtains.png"}
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
