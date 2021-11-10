import styled, { ThemeProvider } from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";
import React from "react";
import Head from "next/head";
import { BurgerMenu } from "../components/BurgerMenuAndSwitch.js";
import GlobalStyles from "../styles/GlobalStyles.js";
import { Flex, Button } from "@chakra-ui/layout";
import Header from "../components/Header.jsx";
import Image from "next/image";


const Home = () => {
  return (
    <>
      <Header 
      />

      <Main>
        <Flex>
          need to get in flow? need some motivation today? haven’t done anything
          yet? then get up your a** and do something you dont remember wanting
          to do. or just do something nice that you didnt know you liked.
        </Flex>
        <Flex>
          <Link className="toDOHLink" href="/toDOH"> 
          <a>
        <Image 
          src="/starLOGO.png"
          alt="logo"
          width={50}
          height={100}
        /></a></Link></Flex>
      </Main>
    </>
  );
};
export default Home;

const StyledHeader = styled.section`
  position: fixed;
  color: #ffc12c;
  font-family: "Lekton";
  font-size: 7vw;
  background-color: #5dc8a8;
  display: flex;
  flex-direction: row;
`;
const Main = styled.section`
  box-sizing: border-box;
  margin-top: 10rem;
  padding: 0;
  background-color: #5dc8a8;
  font-family: "Lekton";
  color:#ffc12c;
`;
