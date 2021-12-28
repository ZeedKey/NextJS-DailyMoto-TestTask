import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, Helvetica, Sans-Serif;
    background-color: #F6F4F3;
    font-weight: 300;
  }

  a{
    text-decoration: none;
  }

  p{
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
