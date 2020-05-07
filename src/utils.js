const processCommentDate = (date) => {
  return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
};

export const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);
  return array[randomIndex];
};

export const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

export const getRandomDate = (years = false) => {
  const targetDate = new Date();
  const diffDays = getRandomIntegerNumber(0, 365);
  const diffHours = getRandomIntegerNumber(0, 24);
  const diffMins = getRandomIntegerNumber(0, 59);

  targetDate.setMinutes(targetDate.getMinutes() - diffMins);
  targetDate.setHours(targetDate.getHours() - diffHours);
  targetDate.setDate(targetDate.getDate() - diffDays);
  if (Number.isInteger(years)) {
    const diffYears = getRandomIntegerNumber(0, years);
    targetDate.setFullYear(targetDate.getFullYear() - diffYears);
  }

  return targetDate;
};

export const sortArrayByParam = (array, param, length = false) => {
  const newArray = array.slice();
  if (length) {
    return newArray.sort((a, b) => b[param].length - a[param].length);
  } else {
    return newArray.sort((a, b) => b[param] - a[param]);
  }
};

export const capitalizeFirstLetter = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

export const defineCommentDate = (date) => {
  let today = new Date();
  if ((today.getFullYear() === date.getFullYear()) && (today.getMonth() === date.getMonth())) {
    let dayDiff = today.getDate() - date.getDate();
    if (dayDiff === 0) {
      return `Today`;
    } else if (dayDiff > 1 && dayDiff < 6) {
      return `${dayDiff} days ago`;
    } else if (dayDiff === 1) {
      return `One day ago`;
    } else {
      return `${processCommentDate(date)}`;
    }
  } else {
    return `${processCommentDate(date)}`;
  }
};

export const getMonthInText = (date) => {
  let monthNames = [`January`, `February`, `March`, `April`, `May`, `June`,
    `July`, `August`, `September`, `October`, `November`, `December`];
  return monthNames[date.getMonth()];
};

