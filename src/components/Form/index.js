import styled from "styled-components";

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  
  > p {
    margin-bottom: 1rem;
  }
  
  > hr {
    background: ${props => props.theme.colors.midtone};
    border: 0;
    height: 1px;
    margin: 2rem 0;
    width: 80%;
  }
`

export default Form;