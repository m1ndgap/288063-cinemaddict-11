export const createCard = () => {
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
