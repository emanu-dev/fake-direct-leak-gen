import db from "../../db.json";
import Handlers from '../Handler';

const generateMarioGame = () => {
  const prefix = Handlers.returnRandomFromArray(db.supermario.prefix);
  const suffix = Handlers.returnRandomFromArray(db.supermario.suffix);
  const subtitle = Handlers.returnRandomFromArray(db.supermario.subtitle);

  return `${prefix}Mario ${suffix} ${subtitle}`
}

const generateZeldaGame = () => {
  const firstWord = Handlers.returnRandomFromArray(db.zelda.firstWord);
  const joint = Handlers.returnRandomFromArray(db.zelda.joint);
  let secondWord = Handlers.returnRandomFromArray(db.zelda.secondWord);

  while (firstWord === secondWord) {
    secondWord = Handlers.returnRandomFromArray(db.zelda.secondWord);
  }

  let output = Math.random() > .4 ? `The Legend of Zelda: ${firstWord} ${joint} ${secondWord}` : `The Legend of Zelda: ${secondWord} ${firstWord}`
  return output;
}

const generateDonkeyKongGame = () => {
  const suffix = Handlers.returnRandomFromArray(db.donkeykong.suffix);
  const subtitle = Handlers.returnRandomFromArray(db.donkeykong.subtitle);
  const subtitleEnd = Handlers.returnRandomFromArray(db.donkeykong.subtitleEnd);

  return `Donkey Kong ${suffix} ${subtitle} ${subtitleEnd}`;
}

const generateMetroidGame = () => {
  const suffix = Handlers.returnRandomFromArray(db.metroid.suffix);
  const subtitle = Handlers.returnRandomFromArray(db.metroid.subtitle);

  return `Metroid ${suffix} ${subtitle}`
}

const generateFZeroGame = () => {
  const subtitle = Handlers.returnRandomFromArray(db.fzero.subtitle);
  return `F-Zero ${subtitle}`
}

const generateKirbyGame = () => {
  const subtitle = Handlers.returnRandomFromArray(db.kirby.subtitle);
  const subtitleEnd = Handlers.returnRandomFromArray(db.kirby.subtitleEnd);
  return `Kirby  ${subtitle} ${subtitleEnd}`
}

const generateWarioGame = () => {
  const subtitle = Handlers.returnRandomFromArray(db.wario.subtitle);
  const subtitleEnd = Handlers.returnRandomFromArray(db.wario.subtitleEnd);
  return `Wario  ${subtitle} ${subtitleEnd}`
}

export default {
  mario : generateMarioGame,
  zelda : generateZeldaGame,
  donkeykong : generateDonkeyKongGame,
  metroid : generateMetroidGame,
  fzero : generateFZeroGame,
  kirby : generateKirbyGame,
  wario : generateWarioGame,
}