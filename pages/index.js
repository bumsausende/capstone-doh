import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import React from "react";
import Link from "next/link";
import Home from "./Home";


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
          width={300}
          height={600}
          layout="responsive"
        />
        <Link href="/Home">
          <a>
            <Image
              src="/buttonLOS.png"
              alt="los button"
              width={50}
              height={50}
              layout="intrinsic"
            />
          </a>
        </Link>
      </IndexPageContainer>
    </>
  );
}
export default IndexPage;

const image = styled.section``;
const IndexPageContainer = styled.section``;
const Button = styled.section``;
