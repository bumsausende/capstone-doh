import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import React from "react";
import Link from "next/link";
import Home from "./Home";
import GlobalStyles from "../styles/GlobalStyles";


function IndexPage() {
  return (
    <>
      <Head>
        <title>DOH!</title>
        <meta name="description" content="Next.js Capstone Project" />
      </Head>
      <IndexPageContainer className="StartScreen">
        <Image
          src="/starLOGO.png"
          alt="logo"
          width={200}
          height={500}
          layout="responsive"
        />
        <Link href="/Home">
          <a>
            <Image
              src="/buttonLOS.png"
              alt="los button"
              width={100}
              height={100}
            
            
            />
          </a>
        </Link>
      </IndexPageContainer>
    </>
  );
}
export default IndexPage;

const image = styled.section`

`;
const IndexPageContainer = styled.section`
`;
const Button = styled.section``;
