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
  const characters = [
    'Master Chief',
    'Sora',
    'Knuckles',
    'Dante from the Devil May Cry Series',
    'Leon S. Kennedy',
    'Crash Bandicoot',
    'Geno',
    'Noctis from Final Fantasy XV',
    'Razz from Battletoads',
    'Shadow the Hedgehog',
    'Rex from Xenoblade 2',
    'Elma from Xenoblade X',
    'Nabit',
    'Waluigi',
    'Wart',
    'Tatanga',
    'King Boo',
    'Birdo',
    'Baby Mario & Yoshi',
    'Tingle',
    'Wolf Link',
    'Tetra from The Legend of Zelda',
    'Revali',
    'Daruk',
    'Mipha',
    'Urbosa',
    'Groose',
    'Goose from Untitled Goose Game',
    'Dixie Kong',
    'Sylux from Metroid Prime Hunters',
    'Krystal from Starfox Adventures',
    'Paper Mario',
    'Waddle Dee',
    'Yarn Kirby',
    'Cinderace',
    'Inteleon',
    'Samurai Goroh',
    'Dunban',
    'Andy from Advance Wars',
    'Kain Grinder from Golden Axe',
    'Isaac from Golden Sun',
    'Crono from Chrono Trigger',
    'Jago from Killer Instinct',
    'Snowboarder from 1080º Snowboarding',
    'Chibi-Robo',
    'Alexandra Roivas from Eternal Darkness',
    'Vyse from skies of Arcadia',
    'Rayman',
    'Raymond Bryce from Disaster: Day of Crisis',
    'Captain Toad',
    'Wonder Red from Wonderful 101',
    'Dancer from Just Dance',
    'Shantae',
    'Professor Layton',
    'Albert Wesker',
    'Kid Dracula',
    'Farmer from Story of Seasons',
    'Ratchet and Clank',
    'Bonk',
    'Bubsy',
    'Hunter from Monster Hunter',
    'Conker',
    'Doomguy',
    'Lara Croft',
    'Ezio Auditore',
    'Gordon Freeman',
    'Geralt',
    'Big Daddy from Bioshock',
    'Raiden from Metal Gear',
    'Kiryu from Yazuka',
    'Aloy from Horizon Zero Dawn',
    'Tom Nook',
    'Marcus Fenix',
    'Duke Nukem',
    'Earthworm Jim',
    'Spyro the Dragon',
    'Ryu Hayabusa',
    'Nathan Drake',
    'Sam Fisher from Splinter Cell',
  ];

  const announcement = [
    'joins the fight in Smash',
    'is coming to Smash',
    'is a new addition to the smash roster',
    'is the new smash Ultimate character',
    'is surprisingly the new character in Smash',
    'is announced as coming to smash bros.',
  ]

  const reveal = [
    'A lengthy trailer shows the character in game',
    'It appears in a short teaser',
    'It is announced with screenshots'
  ]

  const later = [
    'A sakurai presentation is schedule to show the carachter details',
    'New info to come in a future direct',
    'Realeas date and more info to be announced later'
  ]

  return `${Handlers.returnRandomFromArray(characters)} ${Handlers.returnRandomFromArray(announcement)}. ${Handlers.returnRandomFromArray(reveal)}. ${Handlers.returnRandomFromArray(later)}`

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
  smash: generateSmashCharacter(),
}