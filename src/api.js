//документация: https://developer.github.com/v3/search/#search-users

const baseUrl = "https://api.github.com/search/users?q=";

// Получение списка пользователей (сортировка и пагинация происходит на строне сервера)
export const getUsersByUserName = async ({ userName }) => {
  const perPage = 15; //три колонки по 5 пользователей
  // userName, sortBy, pageNumber - принимает функция
  // `${baseUrl}${userName}&sort=repositories&order=${sortBy}&per_page=${perPage}&page=${pageNumber}`,

  const response = await fetch(
    `${baseUrl}${userName}&sort=repositories&order=${"desc"}&per_page=${perPage}&page=${1}`,
    {
      headers: {
        accept: "application/vnd.github+json",
      },
    },
  );
  if (!response.ok) {
    throw response;
  }

  const usersList = await response.json();
  const usersArray = usersList.items;
  return usersArray;
};
