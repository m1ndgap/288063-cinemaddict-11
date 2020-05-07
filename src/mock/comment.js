import {getRandomIntegerNumber, getRandomArrayItem, getRandomDate} from '../utils';

const emojis = [
  `./images/emoji/angry.png`,
  `./images/emoji/smile.png`,
  `./images/emoji/sleeping.png`,
  `./images/emoji/puke.png`
];

const commentNames = [
  `Vasily`,
  `Alice`,
  `Petr`,
  `Arkadi`,
  `Josh`,
  `Mike`,
  `Karen`,
  `Susan`,
  `Becky`
];

const commentLastNames = [
  `Ivanov`,
  `Johnson`,
  `Neto`,
  `Cruz`,
  `Santos`,
  `Silva`,
  `Smith`,
  `Brown`,
  `Fallic`
];

const commentsBulk = `This is amazing. This movie sucks. Brilliant. Masterpiece. Garbage. Can't believe I watched this. Loved it. Never again. Direction sucks. Direction rules.`;

const generateCommentText = (count) => {
  const commentSentences = commentsBulk.split(`.`);
  let description = ``;
  for (let i = 0; i <= count; i++) {
    description += getRandomArrayItem(commentSentences);
  }
  return description;
};

const generateComment = () => {
  return {
    name: `${getRandomArrayItem(commentNames)} ${getRandomArrayItem(commentLastNames)}`,
    text: generateCommentText(getRandomIntegerNumber(1, 3)),
    date: getRandomDate(3),
    emote: getRandomArrayItem(emojis)
  };
};

export const generateComments = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateComment);
};
