import React from "react";
import * as S from "./Pagination.styles.js";

export const Pagination = ({ handleNextPageClick, handlePreviousPageClick, pageNumber, totalPages }) => {
  return (
    <S.PaginationWrapper>
      <S.PaginationItem $isHidden={pageNumber === 1}>
        <S.PaginationLink onClick={handlePreviousPageClick}>&lt; Предыдущая страница</S.PaginationLink>
      </S.PaginationItem>
      <S.PaginationCurrentPage>{pageNumber}</S.PaginationCurrentPage>
      <S.PaginationItem $isHidden={pageNumber >= totalPages}>
        <S.PaginationLink onClick={handleNextPageClick}>Следующая страница &gt;</S.PaginationLink>
      </S.PaginationItem>
    </S.PaginationWrapper>
  );
};
