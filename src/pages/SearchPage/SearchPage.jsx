import React, { useEffect, useState } from "react";
import { Sort } from "../../components/Sort/Sort.jsx";
import { Search } from "../../components/Search/Search.jsx";
import * as S from "./SearchPage.styles.js";
import { UsersCards } from "../../components/UsersCards/UsersCards.jsx";
import { getUsersByUserName } from "../../api.js";
import { Title } from "../../components/Title/Title.jsx";
import { UserInfoModal } from "../../components/Modals/UserInfoModal/UserInfoModal.jsx";
import { Pagination } from "../../components/Pagination/Pagination.jsx";

export const SearchPage = () => {
  const [users, setUsers] = useState([]);
  const [perPage] = useState(15);
  const [searchValue, setSearchValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("Для поиска - введите логин пользователя");
  const [pageNumber, setPageNumber] = useState(1);
  const [sortBy] = useState("desc");

  const handleChange = event => {
    setSearchValue(event.target.value);
  };

  /* Для валидации: Имена пользователей для учетных записей на GitHub.com могут содержать только буквенно-цифровые символы и дефисы (-).
  Источник: https://docs.github.com/en/enterprise-cloud@latest/admin/identity-and-access-management/iam-configuration-reference/username-considerations-for-external-authentication
  [1 абзац раздела "About username normalization"] */

  const isValidUsername = value => {
    const regExp = /^[a-zA-Z0-9-]*$/;
    return regExp.test(value);
  };

  const handleSearch = async sortBy => {
    if (!searchValue) {
      setErrorMessage("Для поиска - введите логин пользователя");
      return;
    }
    if (!isValidUsername(searchValue)) {
      setErrorMessage("Логин пользователя может содержать только латинские буквы, цифры и дефисы (-).");
      return;
    }
    try {
      const { items } = await getUsersByUserName({
        userName: searchValue,
        sortBy: sortBy, // Используем значение sortBy из состояния
        perPage: perPage,
        pageNumber: pageNumber,
      });
      if (items.length > 0) {
        setUsers(items);
        setErrorMessage("");
      } else {
        setUsers([]);
        setErrorMessage("Пользователь с указанным логином не найден");
      }
    } catch (err) {
      console.error("Ошибка при поиске пользователей:", err);
      if (err.response && err.response.status) {
        switch (err.response.status) {
          case 403:
            setErrorMessage("Вы превысили лимит запросов, попробуйте позже");
            break;
          case 422:
            setErrorMessage("Логин введен некорректно. Попробуйте еще раз");
            break;
          case 503:
            setErrorMessage("Ошибка сервера, попробуйте позже");
            break;
          default:
            setErrorMessage("Произошла ошибка. Повторите поиск позже");
        }
      } else {
        setErrorMessage("Произошла ошибка. Повторите поиск позже");
      }
    }
  };

  const handleSearchButtonClick = async () => {
    await handleSearch();
  };

  const handleEnterKeyPress = async event => {
    if (event.key === "Enter") {
      await handleSearch();
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const openModal = user => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      await handleSearch(sortBy);
    };

    fetchData(); // Вызываем fetchData при изменении pageNumber
  }, [pageNumber, sortBy]);

  const handleNextPageClick = () => {
    setPageNumber(prevPageNumber => prevPageNumber + 1);
  };

  const handlePreviousPageClick = () => {
    setPageNumber(prevPageNumber => prevPageNumber - 1);
  };

  return (
    <>
      <Title children={`Cервис поиска пользователей GitHub`} />
      <S.SearchPageWrap>
        <S.SearchWrap>
          <Sort handleSearch={handleSearch} />
          <Search
            onChange={handleChange}
            searchValue={searchValue}
            onSearch={handleSearchButtonClick}
            onEnterPress={handleEnterKeyPress}
          />
        </S.SearchWrap>
        <UsersCards users={users} error={errorMessage} openModal={openModal} />
        {isModalOpen && <UserInfoModal user={selectedUser} closeModal={closeModal} />}
      </S.SearchPageWrap>
      {!errorMessage && (
        <Pagination handleNextPageClick={handleNextPageClick} handlePreviousPageClick={handlePreviousPageClick} />
      )}
    </>
  );
};
