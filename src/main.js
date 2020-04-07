"use strict";

const MAIN_CARD_COUNT = 5;
const TOP_RATED_CARD_COUNT = 2;
const MOST_COMMENTED_CARD_COUNT = 2;

const createUserBlock = () => {
  return (`<section class="header__profile profile">
    <p class="profile__rating">Movie Buff</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`);
};

const createNavigationMenu = () => {
  return (`
    <nav class="main-navigation">
      <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
    <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
    <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`);
};

const createSortMenu = () => {
  return (`
    <ul class="sort">
      <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
    </ul>`);
};

const createMainCardBlock = () => {
  return (`
      <section class="films">
        <section class="films-list">
          <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
          <div class="films-list__container">
          
          </div>
        </section>
        <section class="films-list--extra films-list--top-rated">
          <h2 class="films-list__title">Top rated</h2>
          <div class="films-list__container">
          
          </div>
        </section>
        <section class="films-list--extra films-list--most-commented">
          <h2 class="films-list__title">Most commented</h2>
          <div class="films-list__container">
          
          </div>
        </section>
      </section>
`);
};

const createCard = () => {
  return (`
      <article class="film-card">
          <h3 class="film-card__title">Jay and Silent Bob Strike Back</h3>
          <p class="film-card__rating">10.0</p>
          <p class="film-card__info">
            <span class="film-card__year">2001</span>
            <span class="film-card__duration">1h 44m</span>
            <span class="film-card__genre">Comedy</span>
          </p>
          <img src="./images/posters/jay-and-silent-bob-strike-back.jpg" alt="" class="film-card__poster">
          <p class="film-card__description">The comic "Bluntman and Chronic" is based on real-life stoners Jay and Silent Bob, so when they get no profit from a big-screen adaptation, they set out to wreck the movie.</p>
          <a class="film-card__comments">465 comments</a>
          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite film-card__controls-item--active">Mark as favorite</button>
          </form>
        </article>
`);
};

const createShowMoreBtn = () => {
  return (`
      <button class="films-list__show-more">Show more</button>
`);
};

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeader = document.querySelector(`.header`);
const siteMain = document.querySelector(`.main`);

render(siteHeader, createUserBlock());
render(siteMain, createNavigationMenu());
render(siteMain, createSortMenu());
render(siteMain, createMainCardBlock());

const moviesMain = document.querySelector(`.films-list .films-list__container`);
const moviesTopRated = document.querySelector(`.films-list--top-rated .films-list__container`);
const moviesDiscussed = document.querySelector(`.films-list--most-commented .films-list__container`);

for (let i = 0; i < MAIN_CARD_COUNT; i++) {
  render(moviesMain, createCard());
}
render(moviesMain, createShowMoreBtn(), `afterend`);

for (let i = 0; i < TOP_RATED_CARD_COUNT; i++) {
  render(moviesTopRated, createCard());
}
for (let i = 0; i < MOST_COMMENTED_CARD_COUNT; i++) {
  render(moviesDiscussed, createCard());
}
