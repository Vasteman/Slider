import React from 'react'
import styled from 'styled-components'

const Slide = props => {
  const {
    data: { href, nextHref, prevHref, text, color },
    nextPage,
    prevPage
  } = props
  const hrefName = href.substring(1)

  return (
    <Wrapper color={color}>
      <Text>{text}</Text>
      <PrevSlide onClick={() => prevPage(prevHref)} />
      <NextSlide onClick={() => nextPage(nextHref)} />
    </Wrapper>
  )
}

export default Slide

const Wrapper = styled.div`
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
  background: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    position: absolute;
  }
`

const Text = styled.div`
  font-size: 72px;
  font-weight: bold;
`

const NextSlide = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border: 300px solid transparent;
  border-top-color: white;
  opacity: 0.3;
  border-bottom: 0;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`

const PrevSlide = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border: 300px solid transparent;
  border-bottom-color: white;
  opacity: 0.3;
  border-top: 0;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`
