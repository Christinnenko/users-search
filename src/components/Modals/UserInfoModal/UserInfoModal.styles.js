import { styled } from "styled-components";
import { backgroundColor, contentColor } from "../../../App.styles.js";

export const UserInfoBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const UserInfoForm = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  background-color: ${contentColor};
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  width: 60vh;
  height: 70vh;
  padding: 40px;
`;

export const UserInfoFormCloseBtn = styled.img`
  position: absolute;
  right: 40px;
  top: 40px;
  cursor: pointer;
`;

export const UserInfoFormImg = styled.img`
  width: 60px;
  height: 60px;
  margin: 0 auto 20px;
  display: block;
`;

export const UserInfoTitle = styled.h1`
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
`;

export const UserInfoLogin = styled.p`
  color: ${backgroundColor};
  text-align: end;
  font-weight: bold;
  width: 275px;
`;

export const UserInfoTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserInfoWrap = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const UserInfoCriteria = styled.p`
  color: ${backgroundColor};
  font-size: 20px;
  text-align: start;
  width: 245px;
`;

export const UserInfoCriteriaCenter = styled.p`
  color: ${backgroundColor};
  font-size: 20px;
  text-align: center;
`;

export const UserInfoLink = styled.a`
  cursor: pointer;
  color: #0000ff;
  text-decoration: underline;
  text-align: end;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UserInfoWrapCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
`;

export const UserInfoAvatar = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 12px;
  border: 2px solid ${backgroundColor};
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
