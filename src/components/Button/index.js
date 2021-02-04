import styled from "styled-components";

const Button = styled.button`
  background-color: ${props => props.theme.colors.midtone};
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Gilroy-Light', sans-serif;
  text-transform: uppercase;
  padding: 1rem 1.5rem;
  margin: 0 1rem;


  
  &:hover {
    box-shadow: 0px 2px 10px 1px rgba(0,0,0,.2);
    
    &[disabled] {
      box-shadow: none;
    }
  }
`
export default Button;