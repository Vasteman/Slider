import React from 'react'
import styled from 'styled-components'

import Slide from './Slide'

const Slider = ({ slides, activeSlide, nextPage, prevPage }) => {
  console.log(activeSlide)
  return (
    <Wrapper>
      <PrevButton onClick={() => prevPage()}>{'<'}</PrevButton>
      <SlideViewport slidesCount={slides.length} >
        <SlidesContainer className='container' activeSlide={activeSlide} >
          {slides.map((slide, index) => {
            return <Slide data={slide} key={index} />
          })}
        </SlidesContainer>
      </SlideViewport>
      <NextButton onClick={() => nextPage()}>></NextButton>
    </Wrapper>
  )
}

export default Slider

const Wrapper = styled.div`
  position: relative;
  min-width: 100vw;
  height: 100vh;
  background: grey;
`

const SlideViewport = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`

const SlidesContainer = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;

  transition: all 0.8s;
  transform: translateX(${props => - props.activeSlide * 100}%);
`

const NextButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  width: 30px;
  height: 30px;
  font-size: 30px;
  position: absolute;
  top: 50%;
  right: 0%;
  transform: translate(0, -50%);
  cursor: pointer;
`

const PrevButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  width: 30px;
  height: 30px;
  font-size: 30px;
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(0, -50%);
  z-index: 2;
  cursor: pointer;
`
