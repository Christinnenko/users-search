# Интерфейс поиска пользователей

### Ожидаемое время выполнения: 20 часов

### Фактически затраченное время: 3 часа (в процессе)

### Доступные команды

#### Для установки зависимостей:

```sh
npm i
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
