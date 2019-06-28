import React from 'react'
import styled from 'styled-components'

import Slide from './Slide'

const VSlider = props => {
  const { slides, activeSlide, activeSlideIndex, nextPage, prevPage } = props
  return (
    <Wrapper activeSlide={activeSlide}>
      <SlideViewport>
        <SlidesContainer activeSlideIndex={activeSlideIndex}>
          {slides.map((slide, index) => {
            return <Slide data={slide} key={index} nextPage={nextPage} prevPage={prevPage} />
          })}
        </SlidesContainer>
      </SlideViewport>
    </Wrapper>
  )
}

export default VSlider

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`

const SlideViewport = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`

const SlidesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;

  transition: all 0.8s;
  transform: translateY(${props => -props.activeSlideIndex * 100}%);
`
