import Input from '../src/components/Input';
import db from '../src/db.json';
import Output from "../src/components/Output";
import Background from "../src/components/Background";
import Widget from "../src/components/Widget";
import Logo from "../src/components/Logo";
import ItemList from "../src/components/ItemList";
import Form from "../src/components/Form";
import Handler from '../src/utils/Handler';
import Generate from '../src/utils/Generate';
import DateHandler from '../src/utils/DateHandler';


const Home = () => {
  const outputElement = React.useRef(null);
  const [topicsList, setTopicsList] = React.useState([]);
  const [outputList, setOutputList] = React.useState([]);

  const generateGameSentence = (s, g) => {
    let string = '';
    let gameName = g;
    let series = s;

    string = `${gameName} ${Handler.returnRandomFromArray(db.announcement)} ${Handler.returnRandomFromArray(db.announcement_type)}${Handler.returnRandomFromArray(db.release)} ${DateHandler.generate(2021)}. ${Handler.returnRandomFromArray(db.extra)}.`
    return Handler.replacedString(string, series);
  }

  const handleClick = () => {
    let tempList = [];

    topicsList.forEach( (topic) => {
      switch (topic) {
        case 'mario': tempList.push(generateGameSentence('Mario', Generate.mario())); break;
        case 'zelda': tempList.push(generateGameSentence('Zelda', Generate.zelda())); break;
        case 'donkeykong': tempList.push(generateGameSentence('Donkey Kong', Generate.donkeykong())); break;
        case 'metroid': tempList.push(generateGameSentence('Metroid', Generate.metroid())); break;
        case 'fzero': tempList.push(generateGameSentence('F-Zero', Generate.fzero())); break;
        case 'kirby': tempList.push('kirby game here'); break;
        case 'wario': tempList.push('wario game here'); break;
        case 'starfox': tempList.push('starfox game here'); break;
        case 'sequels': tempList.push('sequels here'); break;
        case 'remakes': tempList.push('remakes here'); break;
        case '3rdparty': tempList.push('3rd party content here'); break;
        case 'dreamgames': tempList.push('misc content here'); break;
        case 'smash': tempList.push('smash character here'); break;
        case 'switchpro': tempList.push('switch pro info here'); break;
      }
    })

    setOutputList(tempList);
  }

  React.useEffect(() => {
    console.log('use effect is running');
  });

  return (
    <div>
      <Background>
        <Widget>
          <Logo />
          <Form>
            <p>Select the date for the Fake Direct:</p>
            <Input.Date type="date"/>
            <hr />
            <ItemList>
              <ItemList.Header>Select the subjects:</ItemList.Header>
              {db.topics.map ( (topic, index) => (
                <Input.Label key={index}>
                  <Input type="checkbox" name={topic.name} onChange={ () => {

                    if (!topicsList.includes(topic.name)) {
                      setTopicsList ([
                        ...topicsList,
                        topic.name
                      ])
                    } else {
                      setTopicsList(topicsList.filter(item => item !== topic.name))
                    }

                  }}/>
                  {topic.label}
                </Input.Label>
                )
              )}
            </ItemList>
            <button type='submit' disabled={topicsList.length === 0} onClick={(e) => {
              e.preventDefault();
              handleClick()
            }}>Generate</button>
          </Form>
          {outputList.length > 0 && <Output ref={outputElement} broadcastDate='February, 27'>
            { outputList.map((item, index) => (
              <li key={index}><br/>{item}<br/> </li>
            ))}
          </Output>}
        </Widget>
      </Background>
    </div>

  )
}

export default Home;