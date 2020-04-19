import {createUserBlock} from "./components/user";
import {createNavigationMenu} from "./components/navMenu";
import {createSortMenu} from "./components/sortMenu";
import {createMainCardBlock} from "./components/cardBlock";
import {createCard} from "./components/card";
import {createShowMoreBtn} from "./components/showMoreBtn";

import {generateFilms} from "./mock/film";

const MAIN_CARD_COUNT = 5;
const TOP_RATED_CARD_COUNT = 2;
const MOST_COMMENTED_CARD_COUNT = 2;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeader = document.querySelector(`.header`);
const siteMain = document.querySelector(`.main`);

render(siteHeader, createUserBlock());
render(siteMain, createNavigationMenu());
render(siteMain, createSortMenu());
render(siteMain, createMainCardBlock());

const films = generateFilms(MAIN_CARD_COUNT);

const moviesMain = document.querySelector(`.films-list .films-list__container`);
const moviesTopRated = document.querySelector(`.films-list--top-rated .films-list__container`);
const moviesDiscussed = document.querySelector(`.films-list--most-commented .films-list__container`);

for (let i = 0; i < MAIN_CARD_COUNT; i++) {
  render(moviesMain, createCard(films[i]));
}
render(moviesMain, createShowMoreBtn(), `afterend`);

for (let i = 0; i < TOP_RATED_CARD_COUNT; i++) {
  render(moviesTopRated, createCard(films[i]));
}
for (let i = 0; i < MOST_COMMENTED_CARD_COUNT; i++) {
  render(moviesDiscussed, createCard(films[i]));
}
