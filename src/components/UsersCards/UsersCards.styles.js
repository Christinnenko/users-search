import { styled } from "styled-components";
import { contentColor, errorTextColor } from "../../App.styles";

export const UserCardsWrapper = styled.div`
  display: flex;
  gap: 10px;
  border: 4px dotted ${contentColor};
  border-radius: 12px;
  margin: 0 60px;
  width: 100vh;
`;

export const UserCardsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 37px;
  width: 100vh;
`;

export const UserError = styled.p`
  font-size: 38px;
  text-align: center;
  padding: 60px;
  width: 100vh;
  color: ${errorTextColor};
  text-shadow: 2px 1px 1px #ffffff5e;
`;

export const UserErrorImg = styled.img`
  width: 500px;
`;

export const MainImg = styled.img`
  height: 300px;
  transition: all 0.3s;

  &:hover,
  &:focus {
    opacity: 10%;
  }
`;

export const UsersImg = styled.img`
  height: 174px;
  width: 200px;
  transition: all 0.3s;

  &:hover,
  &:focus {
    rotate: 10deg;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
