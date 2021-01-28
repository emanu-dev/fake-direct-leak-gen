import styled from "styled-components";

const ItemList = styled.div`
  border: 1px solid ${props => props.theme.colors.midtone};
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 2rem 0;
  padding: 1.5rem 2rem 2rem 2rem;
  position: relative;
  
  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 1.5rem 1rem 1rem 1rem;
  }
`

ItemList.Header = styled.p`
  background-color: ${props => props.theme.colors.lighter};
  border: 1px solid ${props => props.theme.colors.midtone};
  border-radius: 5px;
  left: 1rem;
  padding: .5rem 1rem;
  position: absolute;
  top: -3rem;
`

export default ItemList;