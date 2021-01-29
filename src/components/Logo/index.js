import React from 'react';
import Image from 'next/image';
import styled from "styled-components";
import {motion} from "framer-motion";
import Output from "../Output";

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
    <LogoWrapper
      as={motion.div}
      transition ={{delay: 0, duration: 0.3}}
      variants={{
        show: {opacity: 1, scale:1},
        hidden: {opacity: 0, scale:.25}
      }}
      initial="hidden"
      animate="show"
    >
      <Image
        src="/assets/logo.svg"
        alt="Nintendo Direct Fake Leak Generator"
        width={657}
        height={200}/>
    </LogoWrapper>
  )
}

export default Logo;