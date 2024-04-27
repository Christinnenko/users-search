import { createGlobalStyle } from "styled-components";

export const blueColor = "#6d9aa8";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: "Segoe UI", sans-serif;
  cursor: pointer;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "Segoe UI", sans-serif;
  background-color: ${blueColor};
}


@font-face {
  font-family: "Segoe UI";
  src: url("/fonts/SegoeUI-Regular.woff2") format("woff2"),
       url("/fonts/SegoeUI-Regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "RubikLines";
  src: url("/fonts/RubikLines-Regular.ttf") format("truetype");
  font-weight: 200;
  font-style: normal;
  font-display: swap;
}
`;
