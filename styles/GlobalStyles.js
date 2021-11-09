import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lekton&display=swap');
 html,
body {
background-color: #5DC8A8;
  padding: 0;
  margin: 0;
  font-family: "Lekton";}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }
  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
  }
  div {
    text-align: center;
  }
  small {
    display: block;
  }
  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;}
`;
