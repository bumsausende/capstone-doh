import styled from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";
import React from "react";
import Head from "next/head";
import { BurgerMenu } from "./BurgerMenuAndSwitch";


const Header =()=>{
return (
    <StyledHeader>
        <div className="Bar">
          <BurgerMenu/>
            
        </div>
    </StyledHeader>
)

}

export default Header;

//insert current page props

const StyledHeader = styled.section ``;
