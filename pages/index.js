import { useEffect } from 'react';
import styled from 'styled-components'
import db from '../src/db.json';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const Home = () => {

  const returnRandomFromArray = (array) => {
    let index = Math.floor(Math.random() * (array.length));
    let output = array[index];
    array.splice(index, 1);
    return output;
  }

  const generateReleaseDate = (y) => {
    let year = y;
    let type = Math.floor(Math.random() * (4 - 1)) + 1;
    let date = '';

    switch (type) {
      case 1:
        const months = db.months;
        let generatedMonth = returnRandomFromArray(months)
        let day = Math.floor(Math.random() * (28 - 1)) + 1;
        date = `${generatedMonth}, ${day}`;
        break;
      case 2:
        const seasons = db.seasons;
        date = `${returnRandomFromArray(seasons)} ${year+Math.floor(Math.random() * 2)}`;
        break;
      case 3:
        date = `Q${Math.floor(Math.random() * (4 - 1)) + 1} ${year+Math.floor(Math.random() * 2)}`;
        break;
    }
    return date;
  }

  const replacedString = (str, ser) => {
    return str.replace("@", ser);
  }

  const generateMarioGame = () => {
    const prefix = db.supermario.prefix;
    const suffix = db.supermario.suffix;
    const subtitle = db.supermario.subtitle;
    let string = `${returnRandomFromArray(prefix)}Mario ${returnRandomFromArray(suffix)} ${returnRandomFromArray(subtitle)}`

    return string;
  }

  const generateZeldaGame = () => {
    const firstWord = db.zelda.firstWord;
    const joint = db.zelda.joint;
    const secondWord = db.zelda.secondWord;
    let string = `The Legend of Zelda: ${returnRandomFromArray(firstWord)} ${returnRandomFromArray(joint)} ${returnRandomFromArray(secondWord)}`;

    return string;
  }

  const generateDonkeyKongGame = () => {
    const suffix = db.donkeykong.suffix;
    const subtitle = db.donkeykong.subtitle;
    const subtitleEnd = db.donkeykong.subtitleEnd;

    let string = `Donkey Kong ${returnRandomFromArray(suffix)} ${returnRandomFromArray(subtitle)} ${returnRandomFromArray(subtitleEnd)}`;

    return string;
  }

  const generateMetroidGame = () => {
    const suffix = db.metroid.suffix;
    const subtitle = db.metroid.subtitle;
    let string = `Metroid ${returnRandomFromArray(suffix)} ${returnRandomFromArray(subtitle)}`

    return string;

  }

  const generateFZeroGame = () => {
    const subtitle = db.fzero.subtitle;
    let string = `F-Zero ${returnRandomFromArray(subtitle)}`

    return string;

  }

  const generateGameSentence = (s, g) => {
    let string = '';
    let gameName = g;
    let series = s;

    string = `${gameName} ${returnRandomFromArray(db.announcement)} ${returnRandomFromArray(db.announcement_type)}${returnRandomFromArray(db.release)} ${generateReleaseDate(2021)}. ${returnRandomFromArray(db.extra)}.`

    return replacedString(string, series);
  }

  const appendItem = (id, content) => {
    let listItem = document.createElement("li");
    listItem.textContent = content;
    document.getElementById(id).appendChild(listItem);
  }

  useEffect(() => {
    appendItem('games-list', generateGameSentence('Mario', generateMarioGame()))
    appendItem('games-list', generateGameSentence('Zelda', generateZeldaGame()))
    appendItem('games-list', generateGameSentence('Donkey Kong', generateDonkeyKongGame()))
    appendItem('games-list', generateGameSentence('Metroid', generateMetroidGame()))
    appendItem('games-list', generateGameSentence('F-Zero', generateFZeroGame()))
    console.log('use effect is running');
  });

  return (
    <div>
      <Title>Home</Title>
      <button>generate</button>
      <ul id='games-list'></ul>
    </div>

  )
}

export default Home;