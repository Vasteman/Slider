import React from 'react'
import styled from 'styled-components'

import Slide from './Slide'

const VSlider = props => {
  const { slides, activeSlide, activeSlideIndex, nextPage } = props
  return (
    <Wrapper activeSlide={activeSlide}>
      <SlidesContainer>
        {slides.map((slide, index) => {
          return <Slide data={slide} key={index} nextPage={nextPage} />
        })}
      </SlidesContainer>
    </Wrapper>
  )
}

export default VSlider

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  /* overflow: hidden; */
`

const SlidesContainer = styled.div`
  width: 100%;
  transition: all 5s ease-out;
  scroll-behavior: smooth;
`
