import React from "react";
import { UserCard } from "../UserCard/UserCard.jsx";
import * as S from "./UsersCards.styles.js";

export function UsersCards({ users, error }) {
  console.log(users);
  console.log(error);

  /* В связи с лимитом возможных запросов к серверу (10 запросов в минуту - ошибка 403), 
  добавлена кнопка для поиска, что сокращает количество отправляемых запросов при поиске одного пользователя */

  return (
    <S.UserCardsWrap>
      {/* Проверяем наличие ошибки и наличие пользователей */}
      {error ? <p>{error}</p> : users.map(user => <UserCard key={user.id} user={user} />)}
    </S.UserCardsWrap>
  );
}
