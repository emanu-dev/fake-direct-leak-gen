import styled from "styled-components";

const Widget = styled.div`
  font-size: 1.6rem;
  background: linear-gradient(45deg, ${props => props.theme.colors.light}, ${props => props.theme.colors.lighter});
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  border-radius: 1rem;
  padding: 4rem 6rem;
  max-width: 70rem;
  width: 50vw;

  @media screen and (max-width: 600px) {
    font-size: 1.4rem;
    padding: 2rem 2rem;
    width: auto;
  }  
`

export default Widget;