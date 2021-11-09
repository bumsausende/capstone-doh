import styled, { ThemeProvider } from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";
import React from "react";
import Head from "next/head";
import { DarkModeSwitch } from "../components/DarkSwitchMode";

const Home = () => {
  return (

      <>

        <StyledHead>
          <span>Whats happen here?</span>
        </StyledHead>
        <DarkModeSwitch></DarkModeSwitch>
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

  flex-direction:row-reverse;

`;
