import { styled } from "styled-components";
import { backgroundColor, contentColor, hoverBackgroundColor } from "../../App.styles.js";

export const SearchWrap = styled.div`
  display: flex;
  gap: 30px;
  background: ${contentColor};
  padding: 20px 30px;
  border-radius: 12px;
  margin: 8px 0 10px 0;
  cursor: pointer;
  transition: all 0.3s;
`;

export const SearchInput = styled.input`
  width: 100%;
  border-color: transparent;
  font-size: 40px;
  outline: none;
  font-family: "Segoe UI", sans-serif;
  color: ${backgroundColor};
  opacity: ${props => (props.$isDisabled ? "0.5" : "1")};
  cursor: ${props => (props.$isDisabled ? "not-allowed" : "pointer")};

  &::placeholder {
    color: #5e5e5e8c;
  }
`;

export const SearchBtn = styled.img`
  height: 60px;
  border: 7px solid ${backgroundColor};
  border-radius: 12px;
  padding: 10px;
  background: ${backgroundColor};
  background-color: ${contentColor};
  opacity: ${props => (props.$isDisabled ? "0.5" : "1")};
  cursor: ${props => (props.$isDisabled ? "not-allowed" : "pointer")};
  transition: all 0.3s;

  &:hover,
  &:focus {
    background-color: ${hoverBackgroundColor};
  }
`;
