import React, { useState } from "react";
import { Sort } from "../../components/Sort/Sort.jsx";
import { Search } from "../../components/Search/Search.jsx";
import * as S from "./SearchPage.styles.js";
import { UsersCards } from "../../components/UsersCards/UsersCards.jsx";
import { getUsersByUserName } from "../../api.js";

export const SearchPage = () => {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("Для поиска - введите логин пользователя");

  const handleChange = event => {
    setSearchValue(event.target.value);
  };

  const isValidUsername = value => {
    const regExp = /^[a-zA-Z0-9-]*$/;
    return regExp.test(value);
  };

  const handleSearch = () => {
    if (!searchValue) {
      setErrorMessage("Для поиска - введите логин пользователя");
      return;
    }
    if (!isValidUsername(searchValue)) {
      setErrorMessage("Имя пользователя может содержать только буквенно-цифровые символы и дефисы (-).");
      return;
    }
    getUsersByUserName({ userName: searchValue })
      .then(usersArray => {
        if (usersArray && usersArray.length > 0) {
          setUsers(usersArray);
          setErrorMessage("");
        } else {
          setUsers([]);
          setErrorMessage("Пользователи не найдены");
        }
      })
      .catch(err => {
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
      });
  };

  const handleSearchButtonClick = async () => {
    await handleSearch();
  };

  const handleEnterKeyPress = async event => {
    if (event.key === "Enter") {
      await handleSearch();
    }
  };

  return (
    <S.SearchPageWrap>
      <S.SearchWrap>
        <Sort />
        <Search
          onChange={handleChange}
          searchValue={searchValue}
          onSearch={handleSearchButtonClick}
          onEnterPress={handleEnterKeyPress}
        />
      </S.SearchWrap>
      <UsersCards users={users} error={errorMessage} />
    </S.SearchPageWrap>
  );
};
