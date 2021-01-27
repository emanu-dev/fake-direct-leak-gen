import { useEffect, useRef, useState } from 'react';
import Input from '../src/components/Input';
import db from '../src/db.json';
import Output from "../src/components/Output";
import Background from "../src/components/Background";
import Widget from "../src/components/Widget";
import Logo from "../src/components/Logo";
import ItemList from "../src/components/ItemList";

import Handler from '../src/utils/Handler';
import Generate from '../src/utils/Generate';
import DateHandler from '../src/utils/DateHandler';

const Home = () => {
  const outputElement = useRef(null);
  const [list, setList] = useState([]);

  const generateGameSentence = (s, g) => {
    let string = '';
    let gameName = g;
    let series = s;

    string = `${gameName} ${Handler.returnRandomFromArray(db.announcement)} ${Handler.returnRandomFromArray(db.announcement_type)}${Handler.returnRandomFromArray(db.release)} ${DateHandler.generate(2021)}. ${Handler.returnRandomFromArray(db.extra)}.`
    return Handler.replacedString(string, series);
  }

  const handleClick = () => {

    const tempList = [];
    tempList.push(generateGameSentence('Mario', Generate.mario()));
    tempList.push(generateGameSentence('Zelda', Generate.zelda()));
    tempList.push(generateGameSentence('Donkey Kong', Generate.donkeykong()));
    tempList.push(generateGameSentence('Metroid', Generate.metroid()));
    tempList.push(generateGameSentence('F-Zero', Generate.fzero()));
    setList(tempList);

  }

  useEffect(() => {
    console.log('use effect is running');
  });

  return (
    <div>
      <Background>
        <Widget>
          <Logo />
          <form>
            <div>
              <p>Select the date for the Fake Direct: <input type="date"/></p>
              <p>Select the subjects:<br/></p>
            </div>
            <ItemList>
              <Input.Label>
                <Input type="checkbox" name="mario"/>
                Mario (Kart, Paper Mario, Party, etc)
              </Input.Label>
              <Input.Label>
                <Input type="checkbox" name="zelda"/>
                Legend of Zelda
              </Input.Label>
              <Input.Label>
                <Input type="checkbox" name="donkeykong"/>
                Donkey Kong
              </Input.Label>
              <Input.Label>
                <Input type="checkbox" name="metroid"/>
                Metroid
              </Input.Label>
              <Input.Label>
                <Input type="checkbox" name="fzero"/>
                F-Zero
              </Input.Label>
              <Input.Label>
                <Input type="checkbox" name="kirby"/>
                Kirby
              </Input.Label>
              <Input.Label>
                <Input type="checkbox" name="donkeykong"/>
                Wario
              </Input.Label>
              <Input.Label>
                <Input type="checkbox" name="starfox"/>
                Starfox
              </Input.Label>
              <Input.Label>
                <Input type="checkbox" name="sequels"/>
                Sequels
              </Input.Label>
              <Input.Label>
                <Input type="checkbox" name="remakes"/>
                Remakes/Remasters
              </Input.Label>
              <Input.Label>
                <Input type="checkbox" name="3rdparty"/>
                Third Party Ports/Exclusives
              </Input.Label>
              <Input.Label>
                <Input type="checkbox" name="dreamgames"/>
                Miscellaneous
              </Input.Label>
              <Input.Label>
                <Input type="checkbox" name="smash"/>
                Smash Character Reveal
              </Input.Label>
              <Input.Label>
                <Input type="checkbox" name="switchpro"/>
                Switch Pro Information
              </Input.Label>
            </ItemList>
            <button type='submit' onClick={(e) => {
              e.preventDefault();
              handleClick()
            }}>Generate</button>
          </form>
          <Output ref={outputElement}>
            { list.map((item, index) => (
              <li key={index}><br/>{item}<br/> </li>
            ))}
          </Output>
        </Widget>
      </Background>
    </div>

  )
}

export default Home;