import React from "react";
import { Link } from "react-router-dom";
import * as S from "./NotFoundPage.styles.js";
import { Button } from "../../components/Button/Button.jsx";
import { Title } from "../../components/Title/Title.jsx";
import NotFoundImg from "../../../public/img/404-lego.png";

export const NotFoundPage = () => {
  return (
    <S.NotFoundWrap>
      <Title fontSize="150px" children={`404`} />
      <S.NotFoundText>Страница не найдена</S.NotFoundText>
      <S.NotFoundImg src={NotFoundImg} alt="Фигурка человека из конструктора" />
      <S.NotFoundContent>Возможно, она была удалена или перенесена на другой адрес</S.NotFoundContent>
      <Link to="/">
        <Button children={`Вернуться на главную`} />
      </Link>
    </S.NotFoundWrap>
  );
};
