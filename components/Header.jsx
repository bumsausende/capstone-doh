import styled from "styled-components";
import React from "react";
import { BurgerMenu } from "./BurgerMenuAndSwitch";

const Header = () => {
  return (
    <StyledHeader>
      <BurgerMenu />
    </StyledHeader>
  );
};

export default Header;

//insert current page props

const StyledHeader = styled.section`
  /*position: sticky;
  color: #ffc12c;
  font-family: "Lekton";
  font-size: 10vw;
  background-color: #5dc8a8;
  display: flex;
  flex-direction: row;*/
`;
