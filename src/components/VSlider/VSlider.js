import React from 'react'
import styled from 'styled-components'

import Slide from './Slide'

const colors = ['white', 'red', 'green', 'blue', 'cyan', 'gold']

const VSlider = props => {
  const { slides, activeSlide } = props
  return (
    <Wrapper activeSlide={activeSlide}>
      {slides.map((slide, index) => (
        <Slide data={slide} key={index} color={colors[index]} />
      ))}
    </Wrapper>
  )
}

export default VSlider

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => colors[props.activeSlide]};
`
