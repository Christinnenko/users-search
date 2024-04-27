import { styled } from "styled-components";
import { blueColor } from "../../App.styles";

export const SortElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const SortTitle = styled.h2`
  font-size: 22px;
  color: #fff;
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
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const SortItem = styled.div`
  padding: 8px 16px;
  color: #577c9b;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
    border-radius: 12px;
  }
`;

export const SortButton = styled.button`
  width: 30vh;
  padding: 10px;
  text-align: center;
  border: 4px solid #fff;
  border-radius: 12px;
  font-size: 22px;
  transition: 0.5s;
  background-color: ${blueColor};
  y: "Jost", sans-serif;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: ${blueColor};
  }
`;
