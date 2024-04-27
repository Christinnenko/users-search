import React from "react";
import * as S from "./UserCard.styles.js";

export function UserCard({ user }) {
  return (
    <S.UserCardWrap>
      <S.UserAvatar src={user.avatar_url} alt="Аватар пользователя" />
      <p>{user.login}</p>
    </S.UserCardWrap>
  );
}
