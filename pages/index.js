import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import React from "react";
import Link from "next/link";

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
            <Image src="/images/starLOGO.svg" alt="logo" layout="fill" />
          </a>
        </Link>
      </IndexPageContainer>
    </>
  );
}
export default IndexPage;

const IndexPageContainer = styled.section`
  background-color: #5dc8a8;
  height: 100vh;
  width: 100vw;
`;
