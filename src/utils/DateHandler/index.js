import db from "../../db.json";
import Handler from '../Handler';

const generateReleaseDate = (broadcastDate) => {
  let type = Math.floor(Math.random() * (4 - 1)) + 1;
  let date = '';

  switch (type) {
    case 1:
      const months = db.months;
      let generatedMonth = Math.floor(Math.random() * 12);
      let day = Math.floor(Math.random() * (28 - 1)) + 1;
      let year = generatedMonth + 1 <= parseInt(broadcastDate.month + 2) ? parseInt(broadcastDate.year) + 1 : '';

      date = `${months[generatedMonth]}, ${day} ${year}`;
      break;
    case 2:
      const seasons = db.seasons;
      date = `${Handler.returnRandomFromArray(seasons)} ${parseInt(broadcastDate.year)+Math.floor(Math.random() * 2)}`;
      break;
    case 3:
      date = `Q${Math.floor(Math.random() * (4 - 1)) + 1} ${parseInt(broadcastDate.year)+Math.floor(Math.random() * 2)}`;
      break;
  }
  return date;
}

export default {
  generate : generateReleaseDate
}