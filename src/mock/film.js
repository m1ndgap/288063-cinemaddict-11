import {getRandomIntegerNumber, getRandomArrayItem, getRandomDate} from '../utils';
import {generateComments} from './comment';

const filmNames = [
  `Jay and Silent Bob Strike Back`,
  `Uncut Gems`,
  `Contagion`,
  `Mean Girls`,
  `Private Parts`
];

const genres = [
  `Comedy`,
  `Horror`,
  `Romantic`,
  `Historical`,
  `Drama`
];

const country = [
  `Russia`,
  `United Kingdom`,
  `USA`,
  `Italy`,
  `Poland`
];

const director = [
  `Anthony Mann`,
  `Ridley Scott`,
  `Kevin Smith`,
  `Frederico Fellini`,
  `Ingmar Bergman`
];

const actors = [
  `Bruce Willis`,
  `Kevin Smith`,
  `Jason Mewes`,
  `Shannon Elizabeth`,
  `Sam Rockwell`,
  `Colin Ferrel`,
  `Marisa Tomay`,
  `Jerry Seinfeld`
];

const posters = [
  `./images/posters/jay-and-silent-bob-strike-back.jpg`,
  `./images/posters/sideways.jpg`,
  `./images/posters/private-parts.jpg`,
  `./images/posters/contagion.jpg`,
  `./images/posters/uncut-gems.jpg`,
];

const descriptionBulk = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

const generateDescription = (count) => {
  const descrSentences = descriptionBulk.split(`.`);
  let description = ``;
  for (let i = 0; i < count; i++) {
    description += getRandomArrayItem(descrSentences);
  }
  return description;
};

const generateFilm = () => {
  const tempIsWatched = Math.random() > 0.5;
  const tempIsFavorite = tempIsWatched ? Math.random() > 0.5 : false;
  const tempIsInWatchList = tempIsWatched ? false : Math.random() > 0.5;
  let tempGenres = [];
  for (let i = 0; i < getRandomIntegerNumber(1, 3); i++) {
    tempGenres.push(getRandomArrayItem(genres));
  }
  let tempWriters = [];
  for (let i = 0; i < getRandomIntegerNumber(3, 5); i++) {
    tempWriters.push(getRandomArrayItem(actors));
  }
  let tempActors = [];
  for (let i = 0; i < getRandomIntegerNumber(3, 5); i++) {
    tempActors.push(getRandomArrayItem(actors));
  }
  const tempName = getRandomArrayItem(filmNames);
  return {
    name: tempName,
    nameOriginal: tempName,
    description: generateDescription(getRandomIntegerNumber(1, 5)),
    descriptionFull: generateDescription(getRandomIntegerNumber(3, 7)),
    releaseDate: getRandomDate(80),
    genres: tempGenres,
    country: getRandomArrayItem(country),
    director: getRandomArrayItem(director),
    writers: tempWriters,
    actors: tempActors,
    poster: getRandomArrayItem(posters),
    duration: `${getRandomIntegerNumber(1, 3)}h ${getRandomIntegerNumber(0, 60)}m`,
    rating: `${getRandomIntegerNumber(0, 10)}.${getRandomIntegerNumber(0, 9)}`,
    comments: generateComments(getRandomIntegerNumber(0, 15)),
    isWatched: tempIsWatched,
    isFavorite: tempIsFavorite,
    isInWatchList: tempIsInWatchList
  };
};

const generateFilms = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateFilm);
};

export {generateFilm, generateFilms};
