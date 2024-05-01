# Cервис поиска пользователей GitHub

## Cервис поиска пользователей GitHub - позволяет осуществить поиск пользователей по логинам с возможностью сортировки количества репозиториев и просмотра информации о пользователе.

## Деплой проекта: https://main--sp-users-search.netlify.app/

### Ожидаемое время выполнения: 20 часов

### Фактически затраченное время: 22 часа

![скрин приложения](image.png)

### Реализованы:

- настройка среды разработки, подключение преттера и линтера;
- UX/UI дизайн интерфейса;
- поиск: по логину;
- сортировка: по количеству репозиториев (возрастанию/убыванию);
- пагинация;
- при клике на пользователя открываются подробности;
- лоадеры при загрузке данных с сервера;
- валидация поиска;
- вывод ошибок от сервера;
- деплой проекта

### Технологии:

Проект разработан с использованием Styled Components (CSS-in-JS), JSX, React, React Router, REST API, npm, Webpack, Babel, ESLint

### Доступные команды

#### Для установки зависимостей

```sh
npm i
```

#### Запуск локального сервера разработки

```sh
npm run start
```

#### Для запуска приложения в режиме разработки

```sh
npm run dev
```

#### Для проверки кода с помощью eslint

```sh
npm run lint
```

Эта же команда запускается перед каждым коммитом.
Если не получается закоммитить, попробуйте запустить эту команду и исправить все ошибки и предупреждения.

#### Для проверки кода с помощью prettier

```sh
npm run format
```

#### Для выполнения production сборки

```sh
npm run build
```

Собирает оптимизированный и минифицированный продакшен билд приложения в папку `dist`.
После сборки, приложение готово к деплою.

#### Для деплоя приложения в github pages

```sh
npm run deploy
```

Запускает сборку и коммитит билд в ветку gh-pages.
(!) github pages должен быть включен в настройках репозитория и настроен на ветку gh-pages
