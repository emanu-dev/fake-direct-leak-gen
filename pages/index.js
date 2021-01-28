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

    setList([
      generateGameSentence('Mario', Generate.mario()),
      generateGameSentence('Zelda', Generate.zelda()),
      generateGameSentence('Donkey Kong', Generate.donkeykong()),
      generateGameSentence('Metroid', Generate.metroid()),
      generateGameSentence('F-Zero', Generate.fzero())
    ])
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
              <p>Select the date for the Fake Direct:</p>
              <input type="date"/>
            </div>
            <ItemList>
              <ItemList.Header>Select the subjects:</ItemList.Header>
              {db.topics.map ( (topic, index) => (
                <Input.Label key={index}>
                  <Input type="checkbox" name={topic.name}/>
                  {topic.label}
                  {/*<Input.Tooltip>*/}
                  {/*  {topic.desc}*/}
                  {/*</Input.Tooltip>*/}
                </Input.Label>
                )
              )}
            </ItemList>
            <button type='submit' onClick={(e) => {
              e.preventDefault();
              handleClick()
            }}>Generate</button>
          </form>
          {list.length > 0 && <Output ref={outputElement}>
            { list.map((item, index) => (
              <li key={index}><br/>{item}<br/> </li>
            ))}
          </Output>}
        </Widget>
      </Background>
    </div>

  )
}

export default Home;