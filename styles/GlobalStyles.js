import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lekton&display=swap');

body {

background-image: url('../images/backgroundBasic.png');
background-color: #5DC8A8;
padding: 0;
margin: 0;
font-family: "Lekton";}
@media (max-width: 768px) {
      background-image: url("./images/backgroundBasic.png");
}
* {
  box-sizing: border-box;
}
`;

