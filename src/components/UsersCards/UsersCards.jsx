import React from "react";
import { UserCard } from "../UserCard/UserCard.jsx";
import * as S from "./UsersCards.styles.js";
import ErrorImg from "../../../public/img/crush-lego.png";
import MainImg from "../../../public/img/ninja.png";
import UsersImg from "../../../public/img/developer.png";

export function UsersCards({ users, error, openModal }) {
  return (
    <>
      {error ? (
        <>
          {error === "Для поиска - введите логин пользователя" ? (
            <S.MainImg src={MainImg} alt="Человечек-ниндзя из конструктора" />
          ) : (
            <S.UserErrorImg src={ErrorImg} alt="Разрушенный конструктор" />
          )}
          <S.UserError>{error}</S.UserError>
        </>
      ) : (
        <S.Wrap>
          <S.UserCardsWrapper>
            <S.UserCardsWrap>
              {users.map(user => (
                <UserCard key={user.id} user={user} openModal={openModal} />
              ))}
            </S.UserCardsWrap>
            <S.UsersImg src={UsersImg} alt="Человечек-программист из конструктора" />
          </S.UserCardsWrapper>
        </S.Wrap>
      )}
    </>
  );
}
