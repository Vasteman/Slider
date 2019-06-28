import React from 'react'
import styled from 'styled-components'

// import Page from './components/Page'
// import Slider from './components/Slider'
import VSlider from './components/VSlider/VSlider'

import './App.css'

const slides = [
  {
    color: 'cyan'
  },
  {
    color: 'white'
  },
  {
    color: 'red'
  },
  {
    color: 'green'
  },
  {
    color: 'blue'
  }
]

const vSlides = [
  { href: '#main', nextHref: '#services', text: 'Main Page', color: 'pink' },
  { href: '#services', nextHref: '#partners', text: 'Service Page', color: 'red' },
  { href: '#partners', nextHref: '#news', text: 'Partners Page', color: 'green' },
  { href: '#news', nextHref: '#numbers', text: 'News Page', color: 'blue' },
  { href: '#numbers', nextHref: '#contacts', text: 'Numbers Page', color: 'cyan' },
  { href: '#contacts', nextHref: '#contacts', text: 'Contacts Page', color: 'gold' }
]

export default class App extends React.Component {
  state = {
    activeSlide: '#main',
    activeSlideIndex: 0
  }

  // nextPage = () => {
  //   if (this.state.activeSlide === slides.length - 1) {
  //     this.setState({ activeSlide: 0 })
  //   } else {
  //     this.setState({ activeSlide: this.state.activeSlide + 1 })
  //   }
  // }

  // prevPage = () => {
  //   if (this.state.activeSlide > 0) {
  //     this.setState({ activeSlide: this.state.activeSlide - 1 })
  //   }
  // }

  nextPage = nextHref => {
    // const indexOfCurrent = vSlides.indexOf(vSlides.find(slide => slide.href === nextHref))
    // const indexOfNext = indexOfCurrent < vSlides.length - 1 ? indexOfCurrent + 1 : indexOfCurrent
    const indexOfNext = vSlides.indexOf(vSlides.find(slide => slide.href === nextHref))
    if (indexOfNext !== vSlides.length - 1) {
      console.log('go to page "' + vSlides[indexOfNext].href + '",index:', indexOfNext)
      // this.setState({ activeSlide: vSlides[indexOfNext].href, activeSlideIndex: indexOfNext })
    }
  }

  render() {
    console.log('rerender', this.state)
    const { nextPage } = this
    const { activeSlide, activeSlideIndex } = this.state
    const indexOfCurrent = vSlides.indexOf(vSlides.find(slide => slide.href === activeSlide))
    const indexOfNext = indexOfCurrent < vSlides.length - 1 ? indexOfCurrent + 1 : indexOfCurrent
    return (
      <Wrapper className='App'>
        <VSlider
          slides={vSlides}
          activeSlide={activeSlide}
          activeSlideIndex={activeSlideIndex}
          nextPage={nextPage}
        />
        {/* <Page>SomeContent</Page>
        <Page>
          <Slider
            slides={slides}
            activeSlide={this.state.activeSlide}
            nextPage={this.nextPage}
            prevPage={this.prevPage}
          />
        </Page>
        <Page>SomeContent</Page> */}
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  transition: all 2s ease-out;
`
