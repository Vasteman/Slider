import React from 'react'
import styled from 'styled-components'

const Slide = props => {
  const {
    data: { href, nextHref, text, color },
    nextPage
  } = props
  const hrefName = href.substring(1)

  return (
    <Wrapper id={hrefName} color={color}>
      <Text>{text}</Text>

      <a href={nextHref}>
        <NextSlide onClick={() => nextPage(nextHref)} />
      </a>
    </Wrapper>
  )
}

export default Slide

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    position: absolute;
    bottom: 35%;
    left: 50%;
  }
`

const Text = styled.div`
  font-size: 72px;
  font-weight: bold;
`

const NextSlide = styled.div`
  position: absolute;
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
