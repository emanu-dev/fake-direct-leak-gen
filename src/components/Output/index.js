import React from 'react';
import styled from "styled-components";

const Fake4Chan = styled.ul`
  font-family: Arial, sans-serif;
  color: #181818;
  padding: 4rem;
  background-color: #eef2ff;
  font-size: 8pt;
  list-style: none;
`

const Output = props => {
  return (
    <Fake4Chan>
      <hr/>
      <li><input type="checkbox"/><strong>Nintendo Direct Leak <span style={{color: '#117743'}}>Anonymous</span></strong> 01/21/21(Thu)13:11:30 ▶</li>
      {props.children}
    </Fake4Chan>
  )
}

export default Output;