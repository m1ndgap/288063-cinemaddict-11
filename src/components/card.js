export const createCard = (film) => {
  const {name, description, releaseYear, genre, poster, duration, rating, comments} = film;
  return (`
      <article class="film-card">
          <h3 class="film-card__title">${name}</h3>
          <p class="film-card__rating">${rating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${releaseYear}</span>
            <span class="film-card__duration">${duration}</span>
            <span class="film-card__genre">${genre}</span>
          </p>
          <img src="${poster}" alt="" class="film-card__poster">
          <p class="film-card__description">${concatDescription(description, DESCRIPTION_LENGTH)}</p>
          <a class="film-card__comments">${comments} comments</a>
          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite film-card__controls-item--active">Mark as favorite</button>
          </form>
        </article>
`);
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

