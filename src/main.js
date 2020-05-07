import {createUserBlock} from "./components/user";
import {createNavigationMenu} from "./components/navMenu";
import {createSortMenu} from "./components/sortMenu";
import {createMainCardBlock} from "./components/cardBlock";
import {createExtraCardBlock} from "./components/extraCardBlock";
import {createCard} from "./components/card";
import {createShowMoreBtn} from "./components/showMoreBtn";
import {createFooterStats} from "./components/footerStats";
import {creteFilmDetails} from "./components/filmDetails";

import {generateFilms} from "./mock/film";
import {generateFilters} from "./mock/filters";

import {sortArrayByParam} from "./utils";

const MAIN_CARD_COUNT = 20;
const SHOW_FILMS_BY_DEFAULT = 5;
const SHOW_FILMS_BY_BUTTON = 5;
const EXTRA_BLOCK_TITLE_1 = `Top Rated`;
const EXTRA_BLOCK_TITLE_2 = `Most Commented`;
const TOP_RATED_CARD_COUNT = 2;
const MOST_COMMENTED_CARD_COUNT = 2;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};


const siteHeader = document.querySelector(`.header`);
const siteMain = document.querySelector(`.main`);
const footerStats = document.querySelector(`.footer .footer__statistics`);

const films = generateFilms(MAIN_CARD_COUNT);
const ratedFilms = sortArrayByParam(films, `rating`);
const commentedFilms = sortArrayByParam(films, `comments`, true);
const filters = generateFilters(films);


render(siteHeader, createUserBlock());
render(siteMain, createNavigationMenu(filters));
render(siteMain, createSortMenu());
render(siteMain, createMainCardBlock());
render(footerStats, createFooterStats(films));


const moviesMain = document.querySelector(`.films-list .films-list__container`);
const moviesBlock = document.querySelector(`.films`);

render(moviesBlock, createExtraCardBlock(EXTRA_BLOCK_TITLE_1));
render(moviesBlock, createExtraCardBlock(EXTRA_BLOCK_TITLE_2));

const topRatedMovies = moviesBlock.querySelector(`.films-list--top-rated .films-list__container`);
const mostCommentedMovies = moviesBlock.querySelector(`.films-list--most-commented .films-list__container`);

let showingTasksCount = SHOW_FILMS_BY_DEFAULT;

for (let i = 0; i < showingTasksCount; i++) {
  render(moviesMain, createCard(films[i]));
}
render(moviesMain, createShowMoreBtn(), `afterend`);

for (let i = 0; i < TOP_RATED_CARD_COUNT; i++) {
  render(topRatedMovies, createCard(ratedFilms[i]));
}

for (let i = 0; i < MOST_COMMENTED_CARD_COUNT; i++) {
  render(mostCommentedMovies, createCard(commentedFilms[i]));
}

const loadMoreButton = moviesBlock.querySelector(`.films-list__show-more`);

loadMoreButton.addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOW_FILMS_BY_BUTTON;

  films.slice(prevTasksCount, showingTasksCount)
    .forEach((film) => render(moviesMain, createCard(film)));

  if (showingTasksCount >= films.length) {
    loadMoreButton.remove();
  }
});

render(siteMain, creteFilmDetails(films[0]));
const detailsClose = siteMain.querySelector(`.film-details__close-btn`);
const details = siteMain.querySelector(`.film-details`);
detailsClose.addEventListener(`click`, function () {
  details.remove();
});

