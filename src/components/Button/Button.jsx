import React from "react";
import * as S from "./Button.styles.js";

export function Button({ children, onClick }) {
  return (
    <>
      <S.Button onClick={onClick}>{children}</S.Button>
    </>
  );
}
