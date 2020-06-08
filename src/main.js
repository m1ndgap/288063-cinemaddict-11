import UserBlock from "./components/user";
import NavigationMenu from "./components/navMenu";
import SortMenu from "./components/sortMenu";
import CardBlock from "./components/cardBlock";
import ExtraCardBlock from "./components/extraCardBlock";
import Card from "./components/card";
import ShowMoreBtn from "./components/showMoreBtn";
import FooterStats from "./components/footerStats";
import FilmDetails from "./components/filmDetails";

import {generateFilms} from "./mock/film";
import {generateFilters} from "./mock/filters";

import {sortArrayByParam, render, RenderPosition} from "./utils";

const MAIN_CARD_COUNT = 20;
const SHOW_FILMS_BY_DEFAULT = 5;
const SHOW_FILMS_BY_BUTTON = 5;
const EXTRA_BLOCK_TITLE_1 = `Top Rated`;
const EXTRA_BLOCK_TITLE_2 = `Most Commented`;
const TOP_RATED_CARD_COUNT = 2;
const MOST_COMMENTED_CARD_COUNT = 2;


const siteHeader = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const footerStats = document.querySelector(`.footer .footer__statistics`);

const films = generateFilms(MAIN_CARD_COUNT);
const filters = generateFilters(films);
const ratedFilms = sortArrayByParam(films, `rating`);
const commentedFilms = sortArrayByParam(films, `comments`, true);


const renderFilm = (filmsListElement, film) => {
  const filmComponent = new Card(film);

  const createFilmDetails = () => {
    let filmDetails = new FilmDetails(film);
    render(document.querySelector(`body`), filmDetails.getElement());

    let filmDetailsClose = filmDetails.getElement().querySelector(`.film-details__close-btn`);
    filmDetailsClose.addEventListener(`click`, () => {
      filmDetails.getElement().remove();
      filmDetails.removeElement();
    });
<<<<<<< Updated upstream
=======

    const onEscKeyDown = (evt) => {
      const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

      if (isEscKey) {
        filmDetails.getElement().remove();
        filmDetails.removeElement();
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    document.addEventListener(`keydown`, onEscKeyDown);
>>>>>>> Stashed changes
  };

  let commentsLinkEl = filmComponent.getElement().querySelector(`.film-card__comments`);
  let filmTitleEl = filmComponent.getElement().querySelector(`.film-card__title`);
  let filmImgEl = filmComponent.getElement().querySelector(`.film-card__poster`);

  commentsLinkEl.addEventListener(`click`, createFilmDetails);
  filmTitleEl.addEventListener(`click`, createFilmDetails);
  filmImgEl.addEventListener(`click`, createFilmDetails);

  render(filmsListElement, filmComponent.getElement());
};

const renderBoard = (boardComponent, filmsArr, ratedFilmsArr, commentedFilmsArr) => {
  let mainCardBlock = boardComponent.getElement().querySelector(`.films-list__container`);
  let mainFilmBlock = boardComponent.getElement().querySelector(`.films-list`);
  let filmsWrapper = boardComponent.getElement();

  let showingFilmsCount = SHOW_FILMS_BY_DEFAULT;
  filmsArr.slice(0, showingFilmsCount)
    .forEach((film) => {
      renderFilm(mainCardBlock, film);
    });

  render(filmsWrapper, new ExtraCardBlock(EXTRA_BLOCK_TITLE_1).getElement());
  render(filmsWrapper, new ExtraCardBlock(EXTRA_BLOCK_TITLE_2).getElement());

  const topRatedMoviesBlock = boardComponent.getElement().querySelector(`.films-list--top-rated .films-list__container`);
  const mostCommentedMoviesBlock = boardComponent.getElement().querySelector(`.films-list--most-commented .films-list__container`);

  ratedFilmsArr.slice(0, TOP_RATED_CARD_COUNT)
    .forEach((film) => {
      renderFilm(topRatedMoviesBlock, film);
    });

  commentedFilmsArr.slice(0, MOST_COMMENTED_CARD_COUNT)
    .forEach((film) => {
      renderFilm(mostCommentedMoviesBlock, film);
    });

  const ShowMoreBtnComponent = new ShowMoreBtn();
  render(mainFilmBlock, ShowMoreBtnComponent.getElement());

  ShowMoreBtnComponent.getElement().addEventListener(`click`, () => {
    const prevTasksCount = showingFilmsCount;
    showingFilmsCount = showingFilmsCount + SHOW_FILMS_BY_BUTTON;

    filmsArr.slice(prevTasksCount, showingFilmsCount)
      .forEach((film) => renderFilm(mainCardBlock, film));

    if (showingFilmsCount >= filmsArr.length) {
      ShowMoreBtnComponent.getElement().remove();
      ShowMoreBtnComponent.removeElement();
    }
  });

};

render(siteHeader, new UserBlock().getElement(), RenderPosition.BEFOREEND);

const cardBlockComponent = new CardBlock();
render(siteMainElement, cardBlockComponent.getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new NavigationMenu(filters).getElement(), RenderPosition.AFTERBEGIN);
render(siteMainElement, new SortMenu(filters).getElement(), RenderPosition.AFTERBEGIN);
render(footerStats, new FooterStats(films).getElement());

renderBoard(cardBlockComponent, films, ratedFilms, commentedFilms);
