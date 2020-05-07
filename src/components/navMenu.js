import {capitalizeFirstLetter} from "../utils";

const createFilterMarkup = (filter) => {
  let {name, count} = filter;
  name = capitalizeFirstLetter(name);
  return (`<a href="#watchlist" class="main-navigation__item">${name}<span class="main-navigation__item-count">${count}</span></a>`);
};

export const createNavigationMenu = (filters) => {
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
