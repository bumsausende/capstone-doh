import styled from "styled-components";
import React from "react";
import { BurgerMenu } from "./BurgerMenuAndSwitch";
import { Flex, Heading } from "@chakra-ui/layout";

const Header = ({ title }) => {
  return (
    <StyledHeader>
      <Heading alignSelf="center" p="1rem">{ title }</Heading>
      <BurgerMenu />
    </StyledHeader>
  );
};

export default Header;

//insert current page props

const StyledHeader = styled.section`
  /* position: sticky; */
  color: #ffc12c;
  font-family: "Lekton";
  font-size: 10vw;
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
  background-color: rgba(0,0,0,0.1);
`;
