import React from 'react';
import Image from 'next/image';
import styled from "styled-components";

const LogoWrapper = styled.div`
  align-items: center;
  display: flex;
  height: auto;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
`
const Logo = () => {
  return (
    <LogoWrapper>
      <Image
        src="/assets/logo.svg"
        alt="Nintendo Direct Fake Leak Generator"
        width={657}
        height={200}/>
    </LogoWrapper>
  )
}

export default Logo;