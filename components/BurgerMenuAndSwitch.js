import { Flex, Button, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Flex justify="flex-end">
        <Flex top="1rem" right="1rem" align="center" color="#FFC12C">
          <Flex display={["none", "none", "flex", "flex"]}>
            <NextLink href="/Home" passHref>
              <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                What?
              </Button>
            </NextLink>
            <NextLink href="/toDOH" passHref>
              <Button as="a" variant="ghost" aria-label="toDOH" my={5} w="100%">
                toDOH
              </Button>
            </NextLink>
            <NextLink href="/toLUV" passHref>
              <Button as="a" variant="ghost" aria-label="toLUV" my={5} w="100%">
                toLUV
              </Button>
            </NextLink>
            <NextLink href="/toMEH" passHref>
              <Button as="a" variant="ghost" aria-label="toMEH" my={5} w="100%">
                toMEH
              </Button>
            </NextLink>
          </Flex>
        </Flex>
        <IconButton
          color="#FFC12C"
          bgColor="#499890"
          aria-label="Open Menu"
          size="lg"
          boxSize={100}
          m={2}
          icon={<HamburgerIcon w={20} h={20} />}
          display={["flex", "flex", "none", "none"]}
          onClick={() => setIsOpen(true)}
        />
      </Flex>
      <Flex
        color="#FFC12C"
        width="100vw"
        bgColor="#499890"
        zIndex={20}
        height="100vh"
        position="absolute"
        top="0"
        left="0"
        overflow="auto"
        flexDirection="column"
        display={isOpen ? "flex" : "none"}
      >
        <Flex justify="flex-end">
          <IconButton
            bgColor="#499890"
            marginTop={2}
            aria-label="Close Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => setIsOpen(false)}
          />
        </Flex>
        <Flex flexDirection="column" align="center">
          <NextLink href="/Home" passHref>
            <Button
              onClick={() => setIsOpen(false)}
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
            >
              What is happen here?
            </Button>
          </NextLink>
          <NextLink href="/toDOH" passHref>
            <Button
              onClick={() => setIsOpen(false)}
              as="a"
              variant="ghost"
              aria-label="toDOH"
              my={5}
              w="100%"
            >
              toDOH
            </Button>
          </NextLink>
          <NextLink href="/toLUV" passHref>
            <Button
              onClick={() => setIsOpen(false)}
              as="a"
              variant="ghost"
              aria-label="toLUV"
              my={5}
              w="100%"
            >
              toLUV
            </Button>
          </NextLink>
          <NextLink href="/toMEH" passHref>
            <Button
              onClick={() => setIsOpen(false)}
              as="a"
              variant="ghost"
              aria-label="toMEH"
              my={5}
              w="100%"
            >
              toMEH
            </Button>
          </NextLink>
        </Flex>
      </Flex>
    </>
  );
};
