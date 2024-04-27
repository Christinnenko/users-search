import React from "react";
import * as S from "./Search.styles.js";
import SearchIcon from "../../../public/img/search.svg";

export function Search({ onChange, searchValue, onSearch, onEnterPress }) {
  return (
    <S.SearchWrap>
      <S.SearchInput onChange={onChange} value={searchValue} onKeyDown={onEnterPress} />
      <S.SearchBtn src={SearchIcon} alt="search" onClick={onSearch} />
    </S.SearchWrap>
  );
}
