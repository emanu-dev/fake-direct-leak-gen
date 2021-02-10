import Input from '../src/components/Input';
import db from '../src/db.json';
import Output from "../src/components/Output";
import Background from "../src/components/Background";
import Widget from "../src/components/Widget";
import Logo from "../src/components/Logo";
import ItemList from "../src/components/ItemList";
import Form from "../src/components/Form";
import Button from "../src/components/Button";
import Handler from '../src/utils/Handler';
import Generate from '../src/utils/Generate';
import DateHandler from '../src/utils/DateHandler';
import { motion } from 'framer-motion'


const Home = () => {
  const outputElement = React.useRef(null);
  const dateElement = React.useRef(null);
  const [topicsList, setTopicsList] = React.useState([]);
  const [outputList, setOutputList] = React.useState([]);
  const [broadcastDate, setBroadcastDate] = React.useState({});

  const generateGameSentence = (series, gameName, broadcastDate) => {
    let string = '';

    string = `${gameName} 
    ${Handler.returnRandomFromArray(db.announcement)} 
    ${Handler.returnRandomFromArray(db.announcement_type)}
    ${Handler.returnRandomFromArray(db.release)} 
    ${DateHandler.generate(broadcastDate)}. 
    ${Handler.returnRandomFromArray(db.extra)}.`

    return Handler.replacedString(string, series);
  }

  const processDate = (date) => {
    setBroadcastDate(DateHandler.processDate(date));
  }

  const reset = () => {
    setOutputList([]);
  }

  const handleClick = () => {
    let tempList = [];

    topicsList.forEach( (topic) => {
      switch (topic) {
        case 'mario': tempList.push(generateGameSentence('Mario', Generate.mario(), broadcastDate)); break;
        case 'zelda': tempList.push(generateGameSentence('Zelda', Generate.zelda(), broadcastDate)); break;
        case 'donkeykong': tempList.push(generateGameSentence('Donkey Kong', Generate.donkeykong(), broadcastDate)); break;
        case 'metroid': tempList.push(generateGameSentence('Metroid', Generate.metroid(), broadcastDate)); break;
        case 'fzero': tempList.push(generateGameSentence('F-Zero', Generate.fzero(), broadcastDate)); break;
        case 'kirby': tempList.push(generateGameSentence('Kirby', Generate.kirby(), broadcastDate)); break;
        case 'wario': tempList.push(generateGameSentence('Wario', Generate.wario(), broadcastDate)); break;
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

  return (
    <div>
      <Background>
        <Widget
        as={motion.div}
        transition ={{delay: 0, duration: 0.5}}
        variants={{
            show: {opacity: 1, y:'0'},
            hidden: {opacity: 0, y:'5%'}
          }}
          initial="hidden"
          animate="show"
        >
          <Logo />
          <Form>
            <p>Select the date for the Fake Direct:</p>
            <Input.Date type="date" ref={dateElement} onChange= { (e) => {
              processDate(e.target.value);
              reset();
            }}/>
            <hr />
            <ItemList
              as={motion.div}
              transition ={{delay: .1, duration: 0.3}}
              variants={{
                show: {opacity: 1, y:'0'},
                hidden: {opacity: 0, y:'5%'}
              }}
              initial="hidden"
              animate="show"
            >
              <ItemList.Header>Select the subjects:</ItemList.Header>
              {db.topics.map ( (topic, index) => (
                <Input.Label key={index}
                             as={motion.label}
                             transition ={{delay: .2 + index*.1, duration: 0.3}}
                             variants={{
                               show: {opacity: 1, y:'0'},
                               hidden: {opacity: 0, y:'5%'}
                             }}
                             initial="hidden"
                             animate="show"
                >
                  <Input type="checkbox" name={topic.name} onChange={ () => {

                    if (!topicsList.includes(topic.name)) {
                      setTopicsList ([
                        ...topicsList,
                        topic.name
                      ])
                    } else {
                      setTopicsList(topicsList.filter(item => item !== topic.name))
                    }

                    setOutputList([]);
                  }}/>
                  {topic.label}
                </Input.Label>
                )
              )}
            </ItemList>
            <div>
              <Button type='submit' disabled={topicsList.length === 0 || Object.keys(broadcastDate).length === 0} onClick={(e) => {
                e.preventDefault();
                setOutputList([]);
                handleClick();
              }}>
                Generate
              </Button>
            </div>
          </Form>
          {outputList.length > 0 && <Output
            ref={outputElement}
            broadcastDateString={`${broadcastDate.namedMonth}, ${broadcastDate.day}`}>
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