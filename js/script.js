"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const promoAdv = document.querySelectorAll(".promo__adv img");
  promoAdv.forEach((item) => {
    item.remove();
  });

  const promoMovieGenre = document.querySelector(".promo__genre");
  promoMovieGenre.textContent = "драма";

  const promoBg = document.querySelector(".promo__bg");
  promoBg.style.backgroundImage = "url(../img/bg.jpg)";

  const filmsList = document.querySelector(".promo__interactive-list");
  filmsList.innerHTML = "";
  movieDB.movies.sort();
  movieDB.movies.forEach((film, i) => {
    filmsList.innerHTML += `
    <li class="promo__interactive-item"> ${i + 1} ${film}
        <div class="delete"></div>
    </li>
    `;
  });

  const addForm = document.querySelector("form.add"),
    addInput = addForm.querySelector("adding__input"),
    checkbox = addForm.querySelector("[type='checkbox']");

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newFilm = addInput.value;
    const favorite = checkbox.checked;

    movieDB.movies.push(newFilm);
  });
});
