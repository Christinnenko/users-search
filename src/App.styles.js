import { createGlobalStyle } from "styled-components";

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
  /* font-family: "StratosSkyeng", sans-serif; */
  cursor: pointer;
}

html,
body {
  width: 100%;
  height: 100%;
  /* font-family: "StratosSkyeng", sans-serif; */
  color: #ffffff;
}
`;