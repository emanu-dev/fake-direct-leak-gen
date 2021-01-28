import styled from "styled-components";

const Background = styled.div`
  align-items: center;
  background: linear-gradient(60deg, #E70009, #9F5A5C);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 10rem;
  
  
  @media screen and (max-width: 600px) {
    padding: 2rem;
    height: 100%;
    width: 100%;
  }
`

export default Background;