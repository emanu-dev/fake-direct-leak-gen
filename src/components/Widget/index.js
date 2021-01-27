import styled from "styled-components";

const Widget = styled.div`
  font-size: 1.6rem;
  background-color: ${props => props.theme.colors.light};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  border-radius: 1rem;
  padding: 4rem 6rem;
  width: 50vw;
`

export default Widget;