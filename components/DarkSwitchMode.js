import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [changeDisplay, setChangeDisplay]=useState("none")
  return (<>
    <Flex>
      <Flex position="fixed" top="1rem" right="1rem" align="center">
        <Flex
        display={["none","none","flex","flex"]}
        >
          <NextLink href="/home" passHref>
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
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
      aria-label="Open Menu"
      size="lg"
      mr={2}
      icon={<HamburgerIcon/>}
      display={["flex","flex","none","none"]}
      onClick={()=> setChangeDisplay("flex")}/>
       <Switch color="green" isChecked={isDark} onChange={toggleColorMode} />
    </Flex>
    <Flex
    width="100vw"
    bgColor="gray.50"
    zIndex={20}
    height="100vh"
    position="fixed"
    top="0"
    left="0"
    overflow="auto"
    flexDirection="column"
    display={changeDisplay}
    >
        <Flex justify="flex-end">
            <IconButton
            marginTop={2}
            marginRight={2}
            aria-label="Close Menu"
            size="lg"
            icon={<CloseIcon/>}
            onClick={()=> setChangeDisplay("none")}
            />
        </Flex>
    <Flex
    flexDirection="column"
    align="center"
    >
        <NextLink href="/Home" passHref>
    <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
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
    </>
  );
};
