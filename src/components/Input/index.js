import styled from "styled-components";

const size = 20;

const Input = styled.input`
  appearance: none;
  position: relative;
  top: ${size/3}px;
  right: 0;
  bottom: 0;
  left: 0;
  height: ${size}px;
  width: ${size}px;
  transition: all 0.15s ease-out 0s;
  background: #cbd1d8;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  margin-right: 0.5rem;
  outline: none;
  position: relative;
  z-index: 1000;
  
  &:hover {
    background: ${props => props.theme.colors.secondary};
  }
  
  &:checked {
    background: ${props => props.theme.colors.primary};
  }
  
  &:checked::before {
    height: ${size}px;
    width: ${size}px;
    position: absolute;
    content: '✔';
    display: inline-block;
    font-size: 1.2rem;
    text-align: center;
    line-height: ${size}px;
  }
  
  &:checked::after {
    animation: click-wave 0.65s;
    background: ${props => props.theme.colors.primary};
    border-radius: 4px;
    content: '';
    display: block;
    position: relative;
    z-index: 100;
  }
  
  @keyframes click-wave {
    0% {
      height: ${size}px;
      width: ${size}px;
      opacity: 0.35;
      position: relative;
    }
    100% {
      height: ${size*2}px;
      width: ${size*2}px;
      margin-left: ${size*-.5}px;
      margin-top: ${size*-.5}px;
      opacity: 0;
    }
  }  
`

Input.Label = styled.label`
  font-size: 1.4rem;
`

export default Input;