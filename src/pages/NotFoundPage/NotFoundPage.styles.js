import { styled } from "styled-components";
import { contentColor } from "../../App.styles";

export const NotFoundWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NotFoundText = styled.h2`
  color: ${contentColor};
  font-size: 70px;
  text-align: center;
`;

export const NotFoundImg = styled.img`
  width: 500px;
`;

export const NotFoundContent = styled.p`
  color: ${contentColor};
  font-size: 30px;
  margin-bottom: 30px;
  text-align: center;
`;
