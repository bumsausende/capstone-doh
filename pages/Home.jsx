import styled, { ThemeProvider } from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";
import React from "react";
import Head from "next/head";
import { BurgerMenu } from "../components/BurgerMenuAndSwitch.js";
import { GlobalStyles } from "../styles/GlobalStyles.js";
import { Flex, Button } from "@chakra-ui/layout";
import Header from "../components/Header.jsx";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div><Header position="sticky"/></div>

      <Body>
        <Flex
        display="flex" flexDirection="row-reverse" width={600} height={1500}
        fontSize="24pt"><p>
          need to get in flow? need some motivation today? haven&apos;t done anything
          yet? then get up your a** and do something you dont remember wanting
          to do. or just do something nice that you didn&apos;t know you liked.</p>
        </Flex>
        <Flex>
          <Link className="toDOHLink" href="/toDOH">
            <a>
              <Image
                src="/images/starLOGO.png"
                alt="logo"
                width={500}
                height={600}
              />
            </a>
          </Link>
        </Flex>
      </Body>
    </>
  );
};
export default Home;

const Body = styled.section`
@import url('https://fonts.googleapis.com/css2?family=Lekton&display=swap');



  display:flex;
  width:100%;
  height:100%;
  padding: 0;
  background-color: #5dc8a8;
  font-family: "Lekton";
  color: white;
  p{
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin: 7rem;
    font-family: "Lekton";
    font-weight: bold;
  }
  a{
    margin-top: 13rem;
    display: flex;
    flex-direction: column;
    justify-content: right;

  }
  a:hover{
    cursor: grab;
  }
  

`;
