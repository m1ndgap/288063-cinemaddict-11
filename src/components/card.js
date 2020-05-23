import {createElement} from "../utils.js";

const createCard = (film) => {
  const {name, description, releaseDate, genres, poster, duration, rating, comments, isWatched, isFavorite, isInWatchList} = film;
  let btnActiveCls = `film-card__controls-item--active`;
  let viewIsWatched = isWatched ? btnActiveCls : ``;
  let viewIsFavorite = isFavorite ? btnActiveCls : ``;
  let viewIsInWatchList = isInWatchList ? btnActiveCls : ``;
  let releaseYear = releaseDate.getFullYear();
  return (`<article class="film-card">
          <h3 class="film-card__title">${name}</h3>
          <p class="film-card__rating">${rating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${releaseYear}</span>
            <span class="film-card__duration">${duration}</span>
            <span class="film-card__genre">${genres[0]}</span>
          </p>
          <img src="${poster}" alt="" class="film-card__poster">
          <p class="film-card__description">${concatDescription(description, DESCRIPTION_LENGTH)}</p>
          <a class="film-card__comments">${comments.length} comments</a>
          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${viewIsInWatchList}">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${viewIsWatched}">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite ${viewIsFavorite}">Mark as favorite</button>
          </form>
        </article>`);
};

const DESCRIPTION_LENGTH = 140;
// вот это не знаю куда по логике пихнуть, делать отдельным полем для карточки не надо, потому что это информация об отображении, просто magic number оставлять тоже не хочу, поставил сюда пока.

const concatDescription = (description, descrLength) => {
  if (description.length >= descrLength) {
    return description.slice(0, descrLength - 1) + `…`;
  } else {
    return description;
  }
};

export default class Card {
  constructor(film) {
    this._film = film;

    this._element = null;
  }

  getTemplate() {
    return createCard(this._film);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

}
