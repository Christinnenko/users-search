import { styled } from "styled-components";
import { backgroundColor, contentColor, hoverBackgroundColor } from "../../App.styles";

export const SortElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const SortTitle = styled.h2`
  font-size: 22px;
  color: ${contentColor};
  text-align: center;
`;

export const SortWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const SortMenu = styled.div`
  position: absolute;
  top: 111%;
  left: 0;
  width: 100%;
  background-color: ${contentColor};
  border-radius: 12px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const SortItem = styled.div`
  padding: 8px 16px;
  color: ${backgroundColor};
  font-size: 20px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${hoverBackgroundColor};
    border-radius: 12px;
  }
`;
