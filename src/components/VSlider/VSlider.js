import React from 'react'
import styled from 'styled-components'

import Slide from './Slide'

const VSlider = props => {
  const { slides, activeSlide, activeSlideIndex, nextPage } = props
  return (
    <Wrapper activeSlide={activeSlide}>
      {slides.map((slide, index) => {
        return <Slide data={slide} key={index} nextPage={nextPage} />
      })}
    </Wrapper>
  )
}

export default VSlider

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`
