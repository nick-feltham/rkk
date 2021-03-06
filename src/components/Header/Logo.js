import React from 'react'
import styled from 'styled-components'
import { color, font, weight } from '../Global/variables'

const LogoWrapper = styled.div`
  height: 2.5em;
  width: 'auto';
  margin: 0.5em;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
`
const LogoText = styled.p`
  font-family: ${font.muli};
  color: ${color.body};
  font-size: 0.9em;
  font-weight: ${weight.black};
  border-bottom: 0.25em solid ${color.secondary};
  line-height: 130%;
`

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoText>RKK</LogoText>
    </LogoWrapper>
  )
}

export default Logo
