import React from "react";
import * as S from "./UserCard.styles.js";

export function UserCard({ user, openModal }) {
  const handleClick = () => {
    openModal(user);
  };

  return (
    <S.UserCardWrap onClick={handleClick}>
      <S.UserLogin>{user.login}</S.UserLogin>
    </S.UserCardWrap>
  );
}
