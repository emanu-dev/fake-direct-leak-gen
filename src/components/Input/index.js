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

Input.Tooltip = styled.div`
  background-color: ${props => props.theme.colors.midtone};
  border-radius: 5px;
  box-shadow: -4px 4px 16px rgba(0, 0, 0, 0.1);
  color: ${props => props.theme.colors.primary};
  font-size: 1.2rem;
  height: 4rem;
  min-width: 20rem;
  opacity: 0;
  padding: 1rem 2rem;
  position: absolute;
  pointer-events: none;
  top: -5rem;
  transition: opacity 300ms ease-out 1s;
  z-index: 9999;
  
  &::after {
    background-color: ${props => props.theme.colors.midtone};
    content: ' ';
    position: absolute;
    width: 2rem;
    height: 2rem;
    left: .5rem;
    bottom: -.25rem;
    transform: rotate(45deg);
    z-index: -1;
  }
`

Input.Label = styled.label`
  font-size: 1.4rem;
  position: relative;
  
  &:hover {
    > ${Input.Tooltip} {
      opacity: 1;
    }    
  }

  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
`

Input.Date = styled.input`
  appearance: none;
  color: ${props => props.theme.colors.midtone};
  border:1px solid ${props => props.theme.colors.midtone};
  border-radius: 5px;
  background: ${props => props.theme.colors.lighter};
  outline-color: ${props => props.theme.colors.midtone};
  padding: 5px;
  display: inline-block !important;
  visibility: visible !important;
  
  &::-webkit-clear-button {
    display: none;
  }

  &::-webkit-inner-spin-button {
    display: none;
  }

  &::-webkit-calendar-picker-indicator {
    color: ${props => props.theme.colors.primary};
  }
  

  &:focus {
    color: ${props => props.theme.colors.midtone};
    box-shadow: none;
  }
`

export default Input;