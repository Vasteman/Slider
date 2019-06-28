import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

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
  { href: '#main', nextHref: '#services', prevHref: '#main', text: 'Main Page', color: 'pink' },
  {
    href: '#services',
    nextHref: '#partners',
    prevHref: '#main',
    text: 'Service Page',
    color: 'red'
  },
  {
    href: '#partners',
    nextHref: '#news',
    prevHref: '#services',
    text: 'Partners Page',
    color: 'green'
  },
  { href: '#news', nextHref: '#numbers', prevHref: '#partners', text: 'News Page', color: 'blue' },
  {
    href: '#numbers',
    nextHref: '#contacts',
    prevHref: '#news',
    text: 'Numbers Page',
    color: 'cyan'
  },
  {
    href: '#contacts',
    nextHref: '#contacts',
    prevHref: '#numbers',
    text: 'Contacts Page',
    color: 'gold'
  }
]

export default class App extends React.Component {
  parseSearchHash = () => {
    // console.log('window', window.location.hash)
    // console.log(vSlides.find(slide => slide.href === window.location.hash))
    const searchHash = vSlides.find(slide => slide.href === window.location.hash)
    const neededSlideHash = searchHash ? searchHash.href : '#main'
    // console.log(neededSlideHash)
    return neededSlideHash
  }

  parseSearchHashIndex = () => {
    const neededSlideIndex = vSlides.indexOf(
      vSlides.find(slide => slide.href === this.parseSearchHash())
    )
    return neededSlideIndex
  }

  handleWheel = e => {
    console.log(e)
    const indexOfCurrent = this.state.activeSlideIndex

    if (e.deltaY > 0) {
      const indexOfNext = indexOfCurrent < vSlides.length - 1 ? indexOfCurrent + 1 : indexOfCurrent
      const hashOfNext = vSlides[indexOfNext].href
      this.nextPage(hashOfNext)
    } else {
      const indexOfPrev = indexOfCurrent > 0 ? indexOfCurrent - 1 : indexOfCurrent
      const hashOfPrev = vSlides[indexOfPrev].href
      this.prevPage(hashOfPrev)
    }
  }

  componentDidMount = () => {
    window.addEventListener('hashchange', () => {
      this.setState({
        activeSlide: this.parseSearchHash(),
        activeSlideIndex: this.parseSearchHashIndex()
      })
    })
    window.addEventListener('wheel', _.throttle(this.handleWheel, 300, { trailing: true, leading: false }))
  }

  componentWillUnmount = () => {
    window.removeEventListener('hashchange', () => {
      this.setState({
        activeSlide: this.parseSearchHash(),
        activeSlideIndex: this.parseSearchHashIndex()
      })
    })
  }

  state = {
    activeSlide: this.parseSearchHash(),
    activeSlideIndex: this.parseSearchHashIndex()
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
    if (indexOfNext !== vSlides.length) {
      console.log('go to page "' + vSlides[indexOfNext].href + '",index:', indexOfNext)
      this.setState({ activeSlide: vSlides[indexOfNext].href, activeSlideIndex: indexOfNext })
    }
  }

  prevPage = prevHref => {
    // const indexOfCurrent = vSlides.indexOf(vSlides.find(slide => slide.href === nextHref))
    // const indexOfNext = indexOfCurrent < vSlides.length - 1 ? indexOfCurrent + 1 : indexOfCurrent
    const indexOfPrev = vSlides.indexOf(vSlides.find(slide => slide.href === prevHref))
    if (indexOfPrev !== vSlides.length) {
      console.log('go to page "' + vSlides[indexOfPrev].href + '",index:', indexOfPrev)
      this.setState({ activeSlide: vSlides[indexOfPrev].href, activeSlideIndex: indexOfPrev })
    }
  }

  render() {
    window.location.hash = this.state.activeSlide
    console.log('render', this.state)
    const { nextPage, prevPage } = this
    const { activeSlide, activeSlideIndex } = this.state
    const indexOfCurrent = vSlides.indexOf(vSlides.find(slide => slide.href === activeSlide))
    const indexOfNext = indexOfCurrent < vSlides.length - 1 ? indexOfCurrent + 1 : indexOfCurrent
    const indexOfPrev = indexOfCurrent < indexOfCurrent > 0 ? indexOfCurrent - 1 : indexOfCurrent
    return (
      <Wrapper className='App'>
        <VSlider
          slides={vSlides}
          activeSlide={activeSlide}
          activeSlideIndex={activeSlideIndex}
          nextPage={nextPage}
          prevPage={prevPage}
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
