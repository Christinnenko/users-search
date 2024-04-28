import React from "react";
import * as S from "./Search.styles.js";
import SearchIcon from "../../../public/icons/search.svg";

export function Search({ onChange, searchValue, onSearch, onEnterPress }) {
  return (
    <S.SearchWrap>
      <S.SearchInput placeholder="Введите логин" onChange={onChange} value={searchValue} onKeyDown={onEnterPress} />
      <S.SearchBtn src={SearchIcon} alt="Лупа" onClick={onSearch} />
    </S.SearchWrap>
  );
}
