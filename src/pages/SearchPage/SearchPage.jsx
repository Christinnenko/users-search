import React, { useCallback, useEffect, useRef, useState } from "react";
import { Sort } from "../../components/Sort/Sort.jsx";
import { Search } from "../../components/Search/Search.jsx";
import * as S from "./SearchPage.styles.js";
import { UsersCards } from "../../components/UsersCards/UsersCards.jsx";
import { getUsersByUserName } from "../../api.js";
import { Title } from "../../components/Title/Title.jsx";
import { UserInfoModal } from "../../components/Modals/UserInfoModal/UserInfoModal.jsx";
import { Pagination } from "../../components/Pagination/Pagination.jsx";
import LoaderIcon from "../../../public/icons/loader.svg";

export const SearchPage = () => {
  const [users, setUsers] = useState([]);
  const [perPage] = useState(15);
  const [searchValue, setSearchValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("Для поиска - введите логин пользователя");
  const [pageNumber, setPageNumber] = useState(1);
  const [sortBy, setSortBy] = useState("desc");
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const searchValueRef = useRef("");

  useEffect(() => {
    if (!isDisabled) {
      searchValueRef.current = searchValue;
    }
  }, [searchValue, isDisabled]);

  const handleChange = useCallback(event => {
    setSearchValue(event.target.value);
  }, []);

  /* Для валидации: Имена пользователей для учетных записей на GitHub.com могут содержать только буквенно-цифровые символы и дефисы (-).
  Источник: https://docs.github.com/en/enterprise-cloud@latest/admin/identity-and-access-management/iam-configuration-reference/username-considerations-for-external-authentication
  [1 абзац раздела "About username normalization"] */

  const isValidUsername = useCallback(value => {
    const regExp = /^[a-zA-Z0-9-]*$/;
    return regExp.test(value);
  }, []);

  const handleSearch = useCallback(
    async sortBy => {
      const inputValue = searchValueRef.current;
      if (!inputValue) {
        setErrorMessage("Для поиска - введите логин пользователя");
        return;
      }
      if (!isValidUsername(inputValue)) {
        setErrorMessage("Логин пользователя может содержать только латинские буквы, цифры и дефисы (-).");
        return;
      }
      try {
        setIsLoading(true);
        setIsDisabled(true);
        const { items, totalCount } = await getUsersByUserName({
          userName: inputValue,
          sortBy: sortBy,
          perPage: perPage,
          pageNumber: pageNumber,
        });
        const calculatedTotalPages = Math.ceil(totalCount / perPage);
        setTotalPages(calculatedTotalPages);
        if (items.length > 0) {
          setUsers(items);
          setErrorMessage("");
        } else {
          setUsers([]);
          setErrorMessage("Пользователь с указанным логином не найден");
        }
      } catch (err) {
        if (err.status) {
          switch (err.status) {
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
      } finally {
        setIsLoading(false);
        setIsDisabled(false);
      }
    },
    [pageNumber, perPage, isValidUsername],
  );

  const handleSearchButtonClick = useCallback(async () => {
    if (!isDisabled) {
      await handleSearch(sortBy);
    }
  }, [handleSearch, sortBy, isDisabled]);

  const handleEnterKeyPress = useCallback(
    async event => {
      if (!isDisabled && event.key === "Enter") {
        await handleSearch(sortBy);
      }
    },
    [handleSearch, sortBy, isDisabled],
  );

  const openModal = useCallback(user => {
    setSelectedUser(user);

    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await handleSearch(sortBy);
    };

    fetchData();
  }, [pageNumber, sortBy, handleSearch]);

  const handleNextPageClick = useCallback(() => {
    setPageNumber(prevPageNumber => prevPageNumber + 1);
  }, []);

  const handlePreviousPageClick = useCallback(() => {
    setPageNumber(prevPageNumber => prevPageNumber - 1);
  }, []);

  return (
    <>
      <Title children={`Cервис поиска пользователей GitHub`} />
      <S.SearchPageWrap>
        <S.SearchWrap>
          <Sort isDisabled={isDisabled} setSortBy={setSortBy} />
          <Search
            onChange={handleChange}
            searchValue={searchValue}
            onSearch={handleSearchButtonClick}
            onEnterPress={handleEnterKeyPress}
            isDisabled={isDisabled}
          />
        </S.SearchWrap>
        {isLoading ? (
          <img src={LoaderIcon} alt="Изображение загрузки" />
        ) : (
          <>
            <UsersCards users={users} error={errorMessage} openModal={openModal} />
            {isModalOpen && <UserInfoModal user={selectedUser} closeModal={closeModal} />}
            {!errorMessage && (
              <Pagination
                handleNextPageClick={handleNextPageClick}
                handlePreviousPageClick={handlePreviousPageClick}
                pageNumber={pageNumber}
                totalPages={totalPages}
              />
            )}
          </>
        )}
      </S.SearchPageWrap>
    </>
  );
};
