import React from 'react';
import LandingPage from './landingPage';
import Question from './question';
import { QuestionArr } from '../questionArr.js';

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slide: 0,
      response1: 0,
      response2: 0
    }
    this.advance = this.advance.bind(this);
  }

  advance(response) {
    this.setState({
      slide: this.state.slide += 1
    })
  }

  render() {

    if (!this.state.slide) {
      return (
        <div className="body">
          <LandingPage advance={this.advance} />
        </div>
      )
    } else if (this.state.slide <= QuestionArr.length) {
      const currentQuestion =  QuestionArr[this.state.slide - 1]
      return (
        <div className="body">
          <Question currentQuestion={currentQuestion} advance={this.advance} slide={this.state.slide} />
        </div>
      )
    }
    else {
      return (
        <div className="body">
          Hey
        </div>
      )
    }
  }
}

export default Body;