import styled from "styled-components";
import { backgroundColor, contentColor } from "../../App.styles.js";

export const PaginationWrapper = styled.nav`
  display: flex;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
`;

export const PaginationItem = styled.div`
  list-style-type: none;
  gap: 10px;
  margin: 30px 0;
  visibility: ${props => (props.$isHidden ? "hidden" : "visible")};
`;

export const PaginationLink = styled.a`
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
  transition: all 0.3s;

  &:hover,
  &:focus {
    background-color: ${contentColor};
    color: ${backgroundColor};
  }
`;

export const PaginationCurrentPage = styled.p`
  color: ${contentColor};
  font-size: 24px;
  font-weight: bold;
  margin: 0 50px;
`;
