import db from "../../db.json";
import Handler from "../Handler";
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

  const gameName = Math.random() > .4 ? `The Legend of Zelda: ${firstWord} ${joint} ${secondWord}` : `The Legend of Zelda: ${secondWord} ${firstWord}`;

  return `${gameName}${Math.random() > .4 ? ', formely known as Breath of the Wild 2,':''}`;
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

  const gameName = `Metroid ${suffix} ${subtitle}`

  return `${gameName}${Math.random() > .4 ? ', formely known as Metroid Prime 4,':''}`
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
  const outputArray = [];

  while (gameSequelArray.length < 3) {
      tempGameObject = Handlers.returnRandomFromArray(db.sequels);

      if (!gameSequelArray.includes(tempGameObject)) {
        gameSequelArray.push(tempGameObject);
        outputArray.push(`${tempGameObject.name} ${Handlers.returnRandomFromArray(tempGameObject.suffix)}`)
      }
  }
  return outputArray;
}

const generateRemakes = () => {
  let gameRemakeArray = []
  let tempGameObject;
  const outputArray = [];

  while (gameRemakeArray.length < 3) {
    tempGameObject = Handlers.returnRandomFromArray(db.remakes);

      if (!gameRemakeArray.includes(tempGameObject)) {
        gameRemakeArray.push(tempGameObject);
        outputArray.push(`${tempGameObject.name} ${Handlers.returnRandomFromArray(tempGameObject.suffix)}, ${tempGameObject.type} of ${tempGameObject.name} for the ${tempGameObject.originalConsole}, `);
      }
  }
  return outputArray;
}

const generateThirdParty = (currentMonth, currentYear) => {
  let thirdPartyArray = [];
  let tempGameObject;
  const outputArray = [];
  const releaseDate = currentMonth > 5 ? parseInt(currentYear) + 1 : currentYear;
  
  while (thirdPartyArray.length < 3) {
    tempGameObject = Handlers.returnRandomFromArray(db.thirdparty.games);

    if (!thirdPartyArray.includes(tempGameObject)) {
      thirdPartyArray.push(tempGameObject);
      outputArray.push(`${tempGameObject.name} ${Handlers.returnRandomFromArray(db.thirdparty.info)}. ${Handlers.returnRandomFromArray(tempGameObject.feature)}. To be released ${releaseDate}`);
    }
  }

  return outputArray;
}

const generateMisc = () => {
  return Handlers.returnRandomFromArray(db.misc.topic);
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
  remakes: generateRemakes,
  thirdparty: generateThirdParty,
  misc: generateMisc
}