import { styled } from "styled-components";
import { backgroundColor, contentColor } from "../../App.styles.js";

export const UserCardWrap = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${contentColor};
  border-radius: 12px;
  padding: 10px;
  cursor: pointer;
  white-space: nowrap;

  &:hover,
  &:focus {
    background-color: #ffffffbd;
  }
`;

export const UserLogin = styled.p`
  display: block;
  color: ${backgroundColor};
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  font-size: 30px;
`;
