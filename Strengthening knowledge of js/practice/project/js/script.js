/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
//1)
let adv = document.querySelectorAll('.promo__adv img')
adv.forEach(e=> {
    e.remove()
})
//2)
let genre = document.querySelector('.promo__genre')
genre.textContent = 'драмма'
//3)
let bg = document.querySelector('.promo__bg')
bg.style.background = 'url("img/bg.jpg")'
//4),5)
let listFilm = document.querySelectorAll('.promo__interactive-list > li')
let i =0
listFilm.forEach(e=> {
    e.textContent = `${i +1} ${movieDB.movies[i]}`
    i++
})
