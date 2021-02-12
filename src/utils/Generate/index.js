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

  return Math.random() > .4 ? `The Legend of Zelda: ${firstWord} ${joint} ${secondWord}` : `The Legend of Zelda: ${secondWord} ${firstWord}`
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

const generateStarfoxGame = () => {
  const subtitle = Handlers.returnRandomFromArray(db.starfox.subtitle);
  return `Starfox ${subtitle}`
}

const generateSmashCharacter = () => {
  return `${Handlers.returnRandomFromArray(db.smash.characters)} ${Handlers.returnRandomFromArray(db.smash.announcement)}. ${Handlers.returnRandomFromArray(db.smash.reveal)}. ${Handlers.returnRandomFromArray(db.smash.later)}`
}

const generateSwitchProInfo = (currentMonth, currentYear) => {
  let specArray = [];
  let tempSpec;
  const releaseDate = currentMonth > 5 ? parseInt(currentYear) + 1 : currentYear;

  
  while (specArray.length < 5) {
    tempSpec = Handlers.returnRandomFromArray(db.switchpro.specs);
    
    if (!specArray.includes(tempSpec)) {
      specArray.push(tempSpec);
    }
  }

  specArray[specArray.length - 1] = `and ${specArray[specArray.length - 1]}`;

  return `Switch Pro ${Handlers.returnRandomFromArray(db.switchpro.announcement)}. Its official name is ${Handlers.returnRandomFromArray(db.switchpro.name)}. ${Handlers.returnRandomFromArray(db.switchpro.more)} ${specArray.join(', ')}. To be released ${releaseDate}`;
}

const generateSequels = () => {
  let gameSequelArray = []
  let tempGameObject;

  while (gameSequelArray.length < 3) {
      tempGameObject = Handlers.returnRandomFromArray(db.sequels);

      if (!gameSequelArray.includes(tempGameObject)) {
        gameSequelArray.push(`${tempGameObject.name} ${Handlers.returnRandomFromArray(tempGameObject.suffix)}`)
      }
  }

  return gameSequelArray;
  
}

export default {
  mario : generateMarioGame,
  zelda : generateZeldaGame,
  donkeykong : generateDonkeyKongGame,
  metroid : generateMetroidGame,
  fzero : generateFZeroGame,
  kirby : generateKirbyGame,
  wario : generateWarioGame,
  starfox : generateStarfoxGame,
  smash: generateSmashCharacter,
  switchpro: generateSwitchProInfo,
  sequels: generateSequels,
}