# Тестовое задание: Создание сайта с постами

## Ключевые технологии, которые необходимо использовать

- React
- React-bootstrap
- React-router
- Axios
- Redux
- Redux-saga
- Git

## Описание задачи

Нужно создать сайт с постами, где будут присутствовать 3 страницы (роута):

1. Список постов (главная страница), где будут располагаться все посты.

2. Обо мне, где будет располагаться краткая информация о Вас.

3. Подробности о пользователе (куда необходимо вывести информацию о пользователе и список его постов)

Получить данные необходимо через фейковое API [JSONPlaceholder](https://jsonplaceholder.typicode.com).

## Подробное описание

1. Список постов (главная страница)

   1.1. Должна содержать список всех постов

   1.2 Каждый пост состоит из заголовка, текста, аватара автора и списка комментариев

   1.3 Заголовок и текст брать из API

   1.4 Аватар должен быть одним изображением для всех пользователей, но при клике на него, должен происходить переход на страницу "Подробности о пользователе".

   1.5 Список комментариев изначально скрыт, доступна лишь кнопка "Комментарии"

   1.6 При нажатии на кнопку "Комментарии", должен грузиться из API и показываться список комментариев к данному посту. При повторном нажатии список должен скрываться

   1.7 Комментарий состоит из заголовка (email) и текста

   1.8. При загрузке данных с сервера нужно отобразить сперва лоадер, а только потом подгруженный контент (создайте дополнительно искусственную задержку в 0.5 секунды чтобы лоадер повисел подольше).

   1.9. Должен присутствовать хэдер с "меню-бургером". При нажатии на него слева должно всплывать навигационное меню, где будет присутствовать 2 ссылки ("Список постов" и "Обо мне"), а также отображаться ваш аватар, имя и почтовый адрес.

   1.10 Должна присутствовать возможность поиска по заголовку поста, с возможностью очистки поля через крестик.

   1.11 Должна присутствовать возможность сортировки по заголовку поста.

   1.12 Должна присутствовать пагинация.

2. Обо мне

   2.1. Здесь всё просто, расскажите немного о себе. Сделайте эту страницу отдельным роутом, сохранив при этом хэдер и "меню-бургер".

3. Подробности о пользователе (переход при нажатии по аватару у поста)

   3.1. Необходимо создать карточку, куда вывести краткую информацию о пользователе. Информация должна соответствовать автору поста.

   3.2 Отобразить список постов принадлежащих только данному пользователю, структура самих постов полностью идентична с п.1.2.

   3.3. Добавить лоадер по аналогии с п.1.8.

   3.4. Сделать кнопку "Назад", при нажатии на которую произойдет переход на главную страницу.

P.S:

1. В качестве основы можно взять шаблон React App.

2. Вынесите логику работы с сервером в saga-эффекты.

3. Обязательно разбейте логически-независимые элементы страниц на компоненты.

4. На странице "Подробности о пользователе" данные должны подгружаться даже после обновления этой страницы.

5. Весь интерфейс реализуйте с помощью UI-библиотеки React-bootstrap (используйте компоненты, которые предоставляет эта библиотека).

6. Во время написания кода делайте коммиты почаще (по каждой существенной функции интерфейса).

7. Сделайте обработку ошибок на случай прихода ошибки от сервера.

8. Верстка должна выглядеть хорошо для маленьких и больших экранов устройств.

В результате выполнения задания задеплойте ваше SPA на хостинг (GitHub Pages / GitLab Pages / Heroku или прочие) и приложите ссылку на ваш удалённый репозиторий.
