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
import Credits from '../src/components/Credits';


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
        case 'starfox': tempList.push(generateGameSentence('Starfox', Generate.starfox(), broadcastDate)); break;
        case 'sequels': 
          const sequelArray = Generate.sequels();
          sequelArray.forEach((sequelString) => {
            tempList.push(generateGameSentence('', sequelString, broadcastDate));
          });
          break;
        case 'remakes': 
          const remakeArray = Generate.remakes();
          remakeArray.forEach((sequelString) => {
            tempList.push(generateGameSentence('', sequelString, broadcastDate));
          });
          break;
        case '3rdparty': 
          const thirdPartyArray = Generate.thirdparty(broadcastDate.month, broadcastDate.year);
          thirdPartyArray.forEach((thirdPartyString) => {
            tempList.push(thirdPartyString); 
          });
          break;
        case 'dreamgames': tempList.push(Generate.misc()); break;
        case 'smash': tempList.push(Generate.smash()); break;
        case 'switchpro': tempList.push(Generate.switchpro(broadcastDate.month, broadcastDate.year)); break;
      }
    })

    setOutputList(tempList);

    let interval = window.setInterval( () => {
      outputElement.current.scrollIntoView({block: "center", behavior: "smooth"});
      window.clearInterval(interval);
    }, 300)
    
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
        <Credits
        as={motion.p}
        transition ={{delay: .3, duration: 0.5}}
        variants={{
            show: {opacity: 1, y:'0'},
            hidden: {opacity: 0, y:'5%'}
          }}
          initial="hidden"
          animate="show"        
        >
          Yes, the typos are intentional ;)<br />
          Created by <strong>Emanuel Prado [MeteoricSwarm]</strong> - Find me on <a href='https://github.com/emanu-dev' rel='noopener norefferer' target='_blank'>GitHub</a>
        </Credits>
      </Background>
    </div>

  )
}

export default Home;