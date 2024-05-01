import { styled } from "styled-components";
import { backgroundColor, contentColor } from "../../App.styles.js";

export const Button = styled.button`
  width: 30vh;
  padding: 10px;
  text-align: center;
  border: 4px solid ${contentColor};
  border-radius: 12px;
  font-size: 22px;
  transition: 0.5s;
  background-color: ${backgroundColor};
  font-family: "Segoe UI", sans-serif;
  color: ${contentColor};
  opacity: ${props => (props.$isDisabled ? "0.5" : "1")};
  cursor: ${props => (props.$isDisabled ? "not-allowed" : "pointer")};
  transition: all 0.3s;

  &:hover,
  &:focus {
    background-color: ${contentColor};
    color: ${backgroundColor};
  }
`;
