import { useEffect, useRef, useState } from 'react';
import styled, {ThemeProvider} from 'styled-components'
import db from '../src/db.json';

const Background = styled.div`
  align-items: center;
  background: linear-gradient(60deg, #0072ff, #00c6ff);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`

const Widget = styled.div`
  font-size: 1.6rem;
  background-color: ${props => props.theme.colors.light};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  border-radius: 1rem;
  padding: 4rem 6rem;
  width: 50vw;
`

const Fake4Chan = styled.ul`
  padding: 4rem;
  background-color: #eef2ff;
  font-size: 10pt;
  list-style: none;
  
`

const Home = () => {
  const outputElement = useRef(null);
  const [list, setList] = useState([]);


  const returnRandomFromArray = (array) => {
    let index = Math.floor(Math.random() * (array.length));
    let output = array[index];
    //array.splice(index, 1);
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
    console.log(series)
    return replacedString(string, series);
  }

  const handleClick = () => {

    const tempList = [];
    tempList.push(generateGameSentence('Mario', generateMarioGame()));
    tempList.push(generateGameSentence('Zelda', generateZeldaGame()));
    tempList.push(generateGameSentence('Donkey Kong', generateDonkeyKongGame()));
    tempList.push(generateGameSentence('Metroid', generateMetroidGame()));
    tempList.push(generateGameSentence('F-Zero', generateFZeroGame()));
    setList(tempList);

  }

  useEffect(() => {
    console.log('use effect is running');
  });

  return (
    <div>
      <Background>
        <Widget>
          <form>
            <div>
              Select the date for the Fake Direct:
              <input type="date"/>
            </div>
            <p>Select the subjects:<br/></p>
            <div>
              <label htmlFor="mario">Mario (Kart, Paper Mario, Party, etc)</label>
              <input type="checkbox" name="mario"/>
              <label htmlFor="zelda">Legend of Zelda</label>
              <input type="checkbox" name="zelda"/>
              <label htmlFor="donkeykong">Donkey Kong</label>
              <input type="checkbox" name="donkeykong"/>
              <label htmlFor="metroid">Metroid</label>
              <input type="checkbox" name="metroid"/>
            </div>
            <div>
              <label htmlFor="fzero">F-Zero</label>
              <input type="checkbox" name="fzero"/>
              <label htmlFor="kirby">Kirby</label>
              <input type="checkbox" name="kirby"/>
              <label htmlFor="wario">Wario</label>
              <input type="checkbox" name="donkeykong"/>
              <label htmlFor="starfox">Starfox</label>
              <input type="checkbox" name="starfox"/>
            </div>
            <div>
              <label htmlFor="sequels">Sequels</label>
              <input type="checkbox" name="sequels"/>
              <label htmlFor="remakes">Remakes/Remasters</label>
              <input type="checkbox" name="remakes"/>
              <label htmlFor="3rdparty">Third Party Ports/Exclusives</label>
              <input type="checkbox" name="3rdparty"/>
              <label htmlFor="dreamgames">Miscellaneous</label>
              <input type="checkbox" name="dreamgames"/>
            </div>
            <div>
              <label htmlFor="smash">Smash Character Reveal</label>
              <input type="checkbox" name="smash"/>
              <label htmlFor="switchpro">Switch Pro Information</label>
              <input type="checkbox" name="switchpro"/>
            </div>
            <button type='submit' onClick={(e) => {
              e.preventDefault();
              handleClick()
            }}>Generate</button>
          </form>
          <Fake4Chan ref={outputElement}>
            <hr/>
            <li><input type="checkbox"/><strong>Nintendo Direct Leak <span style={{color: '#117743'}}>Anonymous</span></strong> 01/21/21(Thu)13:11:30 ▶</li>
            { list.map((item, index) => (
              <li key={index}><br/>{item}<br/> </li>
            ))}
          </Fake4Chan>
        </Widget>
      </Background>
    </div>

  )
}

export default Home;