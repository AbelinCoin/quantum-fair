import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useEthers } from "@usedapp/core";
import useIcons from "../icons";

export default function Navbar() {
  const { Metamask, GreenDot } = useIcons();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { active, activateBrowserWallet, account } = useEthers();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>Logo</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"/createRaffle"}
              >
                Create Raffle
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"/raffleBoard"}
              >
                Raffle Board
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            {active ? (
              <Button
                variant={"solid"}
                colorScheme={"teal"}
                size={"sm"}
                mr={4}
                leftIcon={<GreenDot />}
              >
                {account?.substring(0,6) + "..." + account?.substring(38)}
              </Button>
            ) : (
              <Button
                variant={"solid"}
                colorScheme={"gray"}
                size={"sm"}
                mr={4}
                leftIcon={<Metamask />}
                onClick={activateBrowserWallet}
              >
                Connect
              </Button>
            )}
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
