import React from "react";
import * as S from "./Pagination.styles.js";

export const Pagination = ({ handleNextPageClick, handlePreviousPageClick }) => {
  return (
    <S.PaginationWrapper>
      <S.PaginationItem>
        <S.PaginationLink onClick={handlePreviousPageClick}>&lt; Предыдущая страница</S.PaginationLink>
      </S.PaginationItem>
      <S.PaginationItem>
        <S.PaginationLink onClick={handleNextPageClick}>Следующая страница &gt;</S.PaginationLink>
      </S.PaginationItem>
    </S.PaginationWrapper>
  );
};
