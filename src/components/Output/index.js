import React from 'react';
import styled from "styled-components";
import {motion} from "framer-motion";

const Fake4Chan = styled.ul`
  background-color: #eef2ff;
  box-shadow: -4px 4px 16px rgba(0, 0, 0, 0.1);
  color: #181818;
  font-family: Arial, sans-serif;
  font-size: 9pt;
  list-style: none;
  padding: 2rem 4rem 4rem 4rem;
`

const Output = React.forwardRef((props, ref) => {

  const [todayString, setTodayString] = React.useState('');

  React.useEffect( () => {
    const today = new Date();
    const year = today.getFullYear().toString();
    const namedDay = today.toLocaleDateString('en-us', { weekday: 'long' }).substr(0, 3);
    setTodayString(`${today.getMonth()+1}/${today.getDate()}/${year.substring(2)}(${namedDay}) ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`)
  }, []);

  return (
    <Fake4Chan
      ref={ref}
      as={motion.ul}
      transition ={{delay: 0, duration: 0.5}}
      variants={{
        show: {opacity: 1, scale:1},
        hidden: {opacity: 0, scale:.5}
      }}
      initial="hidden"
      animate="show"
    >
      <hr/>
      <li><input type="checkbox"/><strong>Nintendo Direct Leak <span style={{color: '#117743'}}>Anonymous</span></strong> {todayString} ▶</li>
      <li><br />Hey guys, got word from an insider that a new Direct will be broadcast on {props.broadcastDateString}: </li>
      {props.children}
    </Fake4Chan>
  )
})

export default Output;