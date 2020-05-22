import {capitalizeFirstLetter, createElement} from "../utils";


const createFilterMarkup = (filter) => {
  let {name, count} = filter;
  name = capitalizeFirstLetter(name);
  return (`<a href="#watchlist" class="main-navigation__item">${name}<span class="main-navigation__item-count">${count}</span></a>`);
};

const createNavigationMenu = (filters) => {
  const filtersMarkup = filters.map((filter) => createFilterMarkup(filter)).join(`\n`);
  return `
    <nav class="main-navigation">
      <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
        ${filtersMarkup}
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`;
};

export default class navMenu {
  constructor(filters) {
    this._filters = filters;

    this._element = null;
  }

  getTemplate() {
    return createNavigationMenu(this._filters);
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
