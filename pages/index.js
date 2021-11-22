import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import React from "react";
import Link from "next/link";
import Home from "./Home";
import { GlobalStyles } from "../styles/GlobalStyles";
import MyDocument from "./_document";

function IndexPage() {
  return (
    <>
      <Head>
        <title>DOH!</title>
        <meta name="description" content="Next.js Capstone Project" />
      </Head>
      <IndexPageContainer className="StartScreen">
        <Link href="/Home">
          <a>
            <Image
              src="/images/starLOGO.svg"
              alt="logo"
              width={100}
              height={200}
              layout="responsive"
            />
          </a>
        </Link>
      </IndexPageContainer>
    </>
  );
}
export default IndexPage;

const image = styled.section``;
const IndexPageContainer = styled.section`
  background-color: #5dc8a8;
`;
const Button = styled.section``;
