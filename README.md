## NFT Блог

**🛠️ Стек**

React + Redux + Redux Saga + React Bootstrap + Bootstrap + React Router + Axios

**🚀 Основная информация о проекте**

Страницы:

1. Главная. Содержит список всех постов.

2. О пользователе. Содержит информацию о пользователе и список его постов.

3. Обо мне.

4. Ошибка 404.

Контент и изображения загружаются при помощи: [JSONPlaceholder API](https://jsonplaceholder.typicode.com) и [OpenSea API](https://docs.opensea.io/v1.0/reference/api-overview)

**📚 Инструкция по запуску**

##### 1. Клонирование

```
git clone https://github.com/yuriyvyatkin/react-blog.git
```

```
cd react-blog
```

##### 2. Создание ключа для OpenSea API

- скачать и зарегистрировать криптокошелёк на сайте metamask.io

- войти в раздел Settings на сайте opensea.io при помощи криптокошелька

- перейти на вкладку Developer и создать ключ

- создать файл .env в корне проекта со строкой вида ```REACT_APP_NFT_API_KEY='ваш ключ'```

##### 3. Установка зависимостей и запуск

```
npm install
```

```
npm start
```

**⚙️ Подробное описание**:

1. Список постов (главная страница)

   1.1. Содержит список всех постов.

   1.2 Каждый пост состоит из заголовка, текста, аватара автора (NFT токен) и списка комментариев.

   1.3 Заголовок и текст получены из JSONPlaceholder API.

   1.4 Аватар одинаков для всех пользователей, но при клике на него, происходит переход на страницу "Подробности о пользователе".

   1.5 Список комментариев изначально скрыт, доступна лишь кнопка "Комментарии".

   1.6 При нажатии на кнопку "Комментарии", грузиться из JSONPlaceholder API и показывается список комментариев к данному посту. При повторном нажатии список скрывается.

   1.7 Комментарий состоят из заголовка (email) и текста.

   1.8. При загрузке данных с сервера отображается сперва спиннер предзагрузки, а потом подгруженный контент.

   1.9. Присутствует хэдер с "меню-бургером". При нажатии на него слева всплывает навигационное меню, где присутствует 2 ссылки ("Список постов" и "Обо мне"), а также отображается мой аватар.

   1.10 Присутствует возможность поиска по заголовку поста, с возможностью очистки поля через крестик.

   1.11 Присутствует возможность сортировки по заголовку поста.

   1.12 Присутствует пагинация (создана с нуля).

2. Обо мне

   2.1. Немного информации обо мне. Страница сделана отдельным роутом, с сохранением хэдера и "меню-бургер".

3. Подробности о пользователе (переход при нажатии по аватару в карточке поста)

   3.1. Карточка, с краткой информацией о пользователе. Информация соответствует автору поста, согласно JSONPlaceholder API.

   3.2 Список постов, принадлежащих только данному пользователю.  Структура самих постов полностью идентична п.1.2.

   3.3. Спиннер по аналогии с п.1.8.

   3.4. Кнопка "Назад", при нажатии на которую происходит переход на главную страницу.

Дополнительно:

1. Логика работы с API вынесена в saga-эффекты.

2. Элементы страниц разбиты на логически-независимые компоненты.

4. Данные подгружаются даже после обновления страницы при помощи хэш-роутера.

5. Интерфейс реализован с помощью UI-библиотеки React Bootstrap.

6. Реализована обработка ошибок от API.

7. Реализована адаптивная вёрстка.
