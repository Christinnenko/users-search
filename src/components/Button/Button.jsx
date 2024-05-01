import React from "react";
import * as S from "./Button.styles.js";

export function Button({ children, onClick, isDisabled }) {
  return (
    <>
      <S.Button onClick={onClick} $isDisabled={isDisabled}>
        {children}
      </S.Button>
    </>
  );
}
