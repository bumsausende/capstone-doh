import styled, { ThemeProvider } from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";
import React from "react";
import Head from "next/head";
import { DarkModeSwitch } from "../components/BurgerMenuAndSwitch.js";
import GlobalStyles from "../styles/GlobalStyles.js";

const Home = () => {
  return (

      <>

        <StyledHead>
          <span>Whats happen here?</span>
        
        <DarkModeSwitch/>
        </StyledHead>
        <Main></Main>
      </>
   
  );
};
export default Home;

const StyledHead = styled.section`
  position: fixed;
  color: #ffc12c;
  font-family:"Lekton";
  font-size: 10vw;
  margin: 3rem;
  background-color:#5DC8A8;
  flex-direction:row-reverse;

`;
const Main = styled.section `

 `;