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
  const [date, setDate] = React.useState({});

  const generateGameSentence = (s, g) => {
    let string = '';
    let gameName = g;
    let series = s;

    string = `${gameName} ${Handler.returnRandomFromArray(db.announcement)} ${Handler.returnRandomFromArray(db.announcement_type)}${Handler.returnRandomFromArray(db.release)} ${DateHandler.generate(2021)}. ${Handler.returnRandomFromArray(db.extra)}.`
    return Handler.replacedString(string, series);
  }

  const processDate = (date) => {
    const tempDate = date.split('-');
    let namedMonth = '';
    switch (tempDate[1]) {
      case '01' : namedMonth = Math.random() > 0.5 ? 'January' : 'Jan'; break;
      case '02' : namedMonth = Math.random() > 0.5 ? 'February' : 'Feb'; break;
      case '03' : namedMonth = Math.random() > 0.5 ? 'March' : 'Mar'; break;
      case '04' : namedMonth = Math.random() > 0.5 ? 'April' : 'Apr'; break;
      case '05' : namedMonth = 'May'; break;
      case '06' : namedMonth = Math.random() > 0.5 ? 'June' : 'Jun'; break;
      case '07' : namedMonth = Math.random() > 0.5 ? 'Jul' : 'July'; break;
      case '08' : namedMonth = Math.random() > 0.5 ? 'August' : 'Aug'; break;
      case '09' : namedMonth = Math.random() > 0.5 ? 'September' : 'Sep'; break;
      case '10' : namedMonth = Math.random() > 0.5 ? 'October' : 'Oct'; break;
      case '11' : namedMonth = Math.random() > 0.5 ? 'November' : 'Nov'; break;
      case '12' : namedMonth = Math.random() > 0.5 ? 'December' : 'Dec'; break;
    }
    setDate({
      month : tempDate[1],
      day : tempDate[2],
      year : tempDate[0],
      namedMonth : namedMonth,
    });
  }

  const reset = () => {
    setOutputList([]);
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
        case 'kirby': tempList.push(generateGameSentence('Kirby', Generate.kirby())); break;
        case 'wario': tempList.push(generateGameSentence('Wario', Generate.wario())); break;
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

  });

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

                  }}/>
                  {topic.label}
                </Input.Label>
                )
              )}
            </ItemList>
            <div>
              <Button type='submit' disabled={topicsList.length === 0 || Object.keys(date).length === 0} onClick={(e) => {
                e.preventDefault();
                const today = new Date();
                const year = today.getFullYear().toString();
                const namedDay = today.toLocaleDateString('en-us', { weekday: 'long' }).substr(0, 3);
                const todayString = `${today.getMonth()+1}/${today.getDate()}/${year.substring(2)}(${namedDay})${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
                console.log(todayString);
                setOutputList([]);
                handleClick();
              }}>
                Generate
              </Button>
            </div>
          </Form>
          {outputList.length > 0 && <Output
            ref={outputElement}
            broadcastDate={`${date.namedMonth}, ${date.day}`}>
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