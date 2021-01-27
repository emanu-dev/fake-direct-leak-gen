import db from "../../db.json";
import Handler from '../Handler';

const generateReleaseDate = (y) => {
  let year = y;
  let type = Math.floor(Math.random() * (4 - 1)) + 1;
  let date = '';

  switch (type) {
    case 1:
      const months = db.months;
      let generatedMonth = Handler.returnRandomFromArray(months)
      let day = Math.floor(Math.random() * (28 - 1)) + 1;
      date = `${generatedMonth}, ${day}`;
      break;
    case 2:
      const seasons = db.seasons;
      date = `${Handler.returnRandomFromArray(seasons)} ${year+Math.floor(Math.random() * 2)}`;
      break;
    case 3:
      date = `Q${Math.floor(Math.random() * (4 - 1)) + 1} ${year+Math.floor(Math.random() * 2)}`;
      break;
  }
  return date;
}

export default {
  generate : generateReleaseDate
}