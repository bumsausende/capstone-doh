import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`


body {
  background-image: url('./images/starShadow.svg');
  background-repeat: no-repeat;
  background-size: fill;
  background-position: center 5rem;
  background-color: #5DC8A8;
  padding: 0;
  color: white;
  margin: 0;
  box-sizing: border-box;
  font-family: "Lekton";
}

.is-doing {
  background-image:
    url('/images/starLOGOwithoutShadow.svg'),
    url('/images/starShadow.svg');
    background-size: cover, cover;
    background-repeat: no-repeat;
    background-Position: top, top;
}

.is-done {
  background-image:
    url('/images/check.svg'),
    url('/images/starLOGOwithoutShadow.svg'),
    url('/images/starShadow.svg');
    background-size: 70%, cover, cover;
    background-repeat: no-repeat;
    background-Position: 44% 33%, top, top;
}
`;

