import React, { useEffect, useRef } from "react";
import * as S from "./UserInfoModal.styles.js";
import CloseIcon from "../../../../public/icons/close.svg";
import headIcon from "../../../../public/img/head-lego.png";

export function UserInfoModal({ user, closeModal }) {
  const modalRef = useRef(null);

  //предотвращение скролла фона при открытом модальном окне
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = event => {
    // Проверяем, что клик произошел вне модального окна
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  return (
    <S.UserInfoBackground onClick={handleClose}>
      <S.UserInfoForm ref={modalRef}>
        <S.UserInfoFormCloseBtn src={CloseIcon} alt="Крестик" onClick={closeModal} />
        <S.UserInfoTitleWrap>
          <S.UserInfoFormImg src={headIcon} alt="Голова лего-человечка" />
          <S.UserInfoTitle>Информация о пользователе</S.UserInfoTitle>
          <S.UserInfoWrap>
            <S.UserInfoCriteria>Логин:</S.UserInfoCriteria>
            <S.UserInfoLogin>{user.login}</S.UserInfoLogin>
          </S.UserInfoWrap>
          <S.UserInfoWrap>
            <S.UserInfoCriteria>Ссылка на страницу пользователя:</S.UserInfoCriteria>
            <S.UserInfoLink href={user.html_url} target="_blank" rel="noopener noreferrer">
              {user.html_url}
            </S.UserInfoLink>
          </S.UserInfoWrap>
          <S.UserInfoWrapCenter>
            <S.UserInfoCriteriaCenter>Аватар:</S.UserInfoCriteriaCenter>
            <S.UserInfoAvatar src={user.avatar_url} alt="Аватар пользователя" />
          </S.UserInfoWrapCenter>
        </S.UserInfoTitleWrap>
      </S.UserInfoForm>
    </S.UserInfoBackground>
  );
}
