import styled, { ThemeProvider } from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";
import React from "react";
import Head from "next/dist/shared/lib/head";




const Home = () => {
    return (
        <ThemeProvider theme={theme}>
            <>
    <StyledHead>
    <span>Whats happen here?</span>
    </StyledHead></>
    </ThemeProvider>

    )
};
export default Home;

const StyledHead = styled.section `
position: fixed;
color: #FFC12C;

`;