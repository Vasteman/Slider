import React from 'react'

// import Page from './components/Page'
// import Slider from './components/Slider'
import VSlider from './components/VSlider/VSlider';

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
  '#main',
  '#services',
  '#partners',
  '#news',
  '#numbers',
  '#contacts'
]

export default class App extends React.Component {
  state = {
    activeSlide: 0
  }

  nextPage = () => {
    if (this.state.activeSlide === slides.length - 1) {
      this.setState({ activeSlide: 0 })
    } else {
      this.setState({ activeSlide: this.state.activeSlide + 1 })
    }
  }

  prevPage = () => {
    if (this.state.activeSlide > 0) {
      this.setState({ activeSlide: this.state.activeSlide - 1 })
    }
  }

  render() {
    const { activeSlide } = this.state
    return (
      <div className='App'>
        <VSlider slides={vSlides} activeSlide={activeSlide} />
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
      </div>
    )
  }
}
