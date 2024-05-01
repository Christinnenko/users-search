//документация: https://developer.github.com/v3/search/#search-users

const baseUrl = "https://api.github.com/search/users?q=";

// Получение списка пользователей (сортировка и пагинация происходит на строне сервера)
export const getUsersByUserName = async ({ userName, sortBy, perPage, pageNumber }) => {
  const response = await fetch(
    `${baseUrl}${userName}&sort=repositories&order=${sortBy}&per_page=${perPage}&page=${pageNumber}`,
    {
      headers: {
        accept: "application/vnd.github+json",
      },
    },
  );
  if (!response.ok) {
    throw response;
  }

  const users = await response.json();
  return {
    items: users.items,
    totalCount: users.total_count,
  };
};
