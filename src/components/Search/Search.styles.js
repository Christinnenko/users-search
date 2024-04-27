import { styled } from "styled-components";
import { blueColor } from "../../App.styles";

export const SearchWrap = styled.div`
  display: flex;
  gap: 30px;
  background: #fff;
  padding: 20px 30px;
  border-radius: 12px;
  margin: 10px;
  cursor: pointer;
  transition: all 0.3s;
`;

export const SearchInput = styled.input`
  width: 100%;
  border-color: transparent;
  font-size: 40px;
  outline: none;
  cursor: pointer;
  font-family: "Segoe UI", sans-serif;
  color: ${blueColor};
`;

export const SearchBtn = styled.button`
  height: 60px;
`;
