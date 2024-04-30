import styled from "styled-components";
import { backgroundColor, contentColor } from "../../App.styles";

export const PaginationWrapper = styled.nav`
  display: flex;
  justify-content: center;
  justify-content: space-around;
`;

export const PaginationItem = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 10px;
  margin: 30px 0;
`;

export const PaginationLink = styled.button`
  background-color: ${backgroundColor};
  color: ${contentColor};
  border: none;
  padding: 10px 15px;
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  outline: none;
  font-size: 24px;
  border: 2px solid ${contentColor};

  &:hover,
  &:focus {
    background-color: ${contentColor};
    color: ${backgroundColor};
  }

  /* &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  } */
`;
