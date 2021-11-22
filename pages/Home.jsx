import styled from "styled-components";
import Link from "next/link";
import React from "react";
import { Flex, Heading } from "@chakra-ui/layout";
import Image from "next/image";

const Home = () => {
  return (
    <Content>
      <Heading color="#FFc12C">WHAT?</Heading>
      <Flex
        display="flex"
        flexDirection="column"
        width={500}
        height={1300}
        fontSize="24pt"
      >
        <p>
          need to get in flow? need some motivation today? haven&apos;t done
          anything yet? then get up your a** and{" "}
          <Flex color="#FFc12c">DOH</Flex> something you dont remember wanting
          to do. or just <Flex color="#ffc12c">DOH</Flex> something nice that
          you didn&apos;t know you liked.
        </p>
      </Flex>
      <Flex flexDirection="column">
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
        <Link className="toDOHdatatest" href="/dataToDOHtest">
          <a>
            <Image
              src="/images/starLOGO.png"
              alt="logo"
              width={200}
              height={200}
            />
          </a>
        </Link>
        <Link className="ToDOHLIST" href="/ToDOHLIST">
          <a>
            <Image
              src="/images/starLOGO.png"
              alt="logo"
              width={300}
              height={350}
            />
          </a>
        </Link>
      </Flex>
    </Content>
  );
};
export default Home;

const Content = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0;
  background-color: #5dc8a8;
  color: white;
  p {
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-top: 8rem;
    font-family: "Lekton";
    font-weight: bold;
  }
  a {
    margin-top: 13rem;
    display: flex;
    flex-direction: column;
    justify-content: right;
  }
  a:hover {
    cursor: grab;
  }
`;
