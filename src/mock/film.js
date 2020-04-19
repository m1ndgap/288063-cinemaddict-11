import {getRandomIntegerNumber, getRandomArrayItem} from '../utils';

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
  return {
    name: getRandomArrayItem(filmNames),
    description: generateDescription(getRandomIntegerNumber(1, 5)),
    releaseYear: getRandomIntegerNumber(1990, 2020),
    genre: getRandomArrayItem(genres),
    poster: getRandomArrayItem(posters),
    duration: `${getRandomIntegerNumber(1, 3)}h ${getRandomIntegerNumber(0, 60)}m`,
    rating: `${getRandomIntegerNumber(0, 10)}.${getRandomIntegerNumber(0, 9)}`,
    comments: getRandomIntegerNumber(0, 100),
  };
};

const generateFilms = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateFilm);
};

export {generateFilm, generateFilms};
