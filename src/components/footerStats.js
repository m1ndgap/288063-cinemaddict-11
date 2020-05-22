import {createElement} from "../utils";

const createFooterStats = (films) => {
  let numberOfFilms = films.length;
  return `<p>${numberOfFilms} movies inside</p>`;
};

export default class footerStats {
  constructor(films) {
    this._films = films;

    this._element = null;
  }

  getTemplate() {
    return createFooterStats(this._films);
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
