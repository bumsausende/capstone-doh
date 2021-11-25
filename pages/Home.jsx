import styled from "styled-components";
import Link from "next/link";
import React from "react";
import { Flex, Heading } from "@chakra-ui/layout";
import Image from "next/image";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header title="WHAT?"/>
      <Content>
        <Flex
          display="flex"
          flexDirection="column"
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
        </Flex>
      </Content>
    </>
  );
};
export default Home;

const Content = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 1rem;
  color: white;
  p {
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: left;
    font-family: "Lekton";
    font-weight: bold;
  }
  a {
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: right;
  }
  a:hover {
    cursor: grab;
  }
`;
