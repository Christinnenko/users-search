import React, { useState, useRef, useEffect } from "react";
import * as S from "./Sort.styles.js";

export function Sort() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("по убыванию");
  const wrapperRef = useRef(null);

  //закрытие выпадающего списка при клике по эрану
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const toggleSort = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = item => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <S.SortElement>
      <S.SortTitle>Отсортировать репозитории</S.SortTitle>
      <S.SortWrapper ref={wrapperRef}>
        {isOpen && (
          <S.SortMenu>
            <S.SortItem onClick={() => handleItemClick("по убыванию")}>по убыванию</S.SortItem>
            <S.SortItem onClick={() => handleItemClick("по возрастанию")}>по возрастанию</S.SortItem>
          </S.SortMenu>
        )}
        <S.SortButton onClick={toggleSort}>{selectedItem}</S.SortButton>
      </S.SortWrapper>
    </S.SortElement>
  );
}
