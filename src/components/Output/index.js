import React from 'react';
import styled from "styled-components";
import {motion} from "framer-motion";

const Fake4Chan = styled.ul`
  background-color: #eef2ff;
  box-shadow: -4px 4px 16px rgba(0, 0, 0, 0.1);
  color: #181818;
  font-family: Arial, sans-serif;
  font-size: 8pt;
  list-style: none;
  padding: 2rem 4rem 4rem 4rem;
`

const Output = React.forwardRef((props, ref) => {
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
      <li><input type="checkbox"/><strong>Nintendo Direct Leak <span style={{color: '#117743'}}>Anonymous</span></strong> 01/21/21(Thu)13:11:30 ▶</li>
      <li><br />Hey guys, got word from an insider that a new Direct will be broadcast on {props.broadcastDate}: </li>
      {props.children}
    </Fake4Chan>
  )
})

export default Output;