import React from "react";
import * as S from "./Search.styles.js";
import SearchIcon from "../../../public/icons/search.svg";

export function Search({ onChange, searchValue, onSearch, onEnterPress, isDisabled }) {
  /* В связи с лимитом возможных запросов к серверу (10 запросов в минуту), запросы осуществляются не после ввода каждого символа 
в поиск, а после нажатия кнопки */

  return (
    <S.SearchWrap>
      <S.SearchInput
        placeholder="Введите логин"
        onChange={onChange}
        value={searchValue}
        onKeyDown={onEnterPress}
        $isDisabled={isDisabled}
      />
      <S.SearchBtn src={SearchIcon} alt="Лупа" onClick={onSearch} $isDisabled={isDisabled} />
    </S.SearchWrap>
  );
}
