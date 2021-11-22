import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`


body {

background-image: url('./images/backgroundBasic.svg');
background-color: #5DC8A8;
padding: 0;
margin: 0;
font-family: "Lekton";}
@media (max-width: 768px) {
      background-image: url("./images/backgroundBasic.svg");
}
* {
  box-sizing: border-box;
  font-family: "Lekton";
}
`;

