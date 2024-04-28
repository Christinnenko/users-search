import React from "react";
import * as S from "./Title.styles.js";

export function Title({ children, fontSize }) {
  return (
    <>
      <S.Title fontSize={fontSize}>{children}</S.Title>
    </>
  );
}
