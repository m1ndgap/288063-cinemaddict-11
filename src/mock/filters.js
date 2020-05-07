const filterValues = {
  watchlist: 0,
  favorites: 0,
  history: 0,
};

const getFilterNumbers = (films, obj) => {
  films.forEach((film) => {
    let {isWatched, isFavorite, isInWatchList} = film;
    obj.watchlist += isWatched ? 1 : 0;
    obj.favorites += isFavorite ? 1 : 0;
    obj.history += isInWatchList ? 1 : 0;
  });
  return obj;
};

const generateFilters = (films) => {
  let filterData = getFilterNumbers(films, filterValues);
  let filters = [];
  for (const name in filterData) {
    if (filterValues.hasOwnProperty(name)) {
      filters.push({
        name,
        count: filterValues[name]
      });
    }
  }
  return filters;
};

export {generateFilters};
