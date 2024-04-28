import { styled } from "styled-components";
import { contentColor } from "../../App.styles";

export const Title = styled.h1`
  font-size: ${props => props.fontSize || "50px"};
  color: ${contentColor};
  text-align: center;
  margin: 40px 0;
  text-shadow: 15px 15px 6px #ffffff5e;
`;
