import React from 'react';
import LandingPage from './landingPage';
import Question from './question';
import { QuestionArr } from '../questionArr.js';
import Snow from './snow';
import Result from './result';

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
    if (response && response === 'response1') {
      this.setState({
        slide: this.state.slide += 1,
        response1: this.state.response1 += 1
      })
    } else {
      this.setState({
        slide: this.state.slide += 1,
        response2: this.state.response2 += 1
      })
    }
  }

  render() {
    if (!this.state.slide) {
      return (
        <div className="body">
          <Snow />
          <div>
            <LandingPage advance={this.advance} />
          </div>
        </div>
      )
    } else if (this.state.slide <= QuestionArr.length) {
      const currentQuestion =  QuestionArr[this.state.slide - 1]
      return (
        <div className="body">
          <Snow />
          <Question currentQuestion={currentQuestion} advance={this.advance} slide={this.state.slide} />
        </div>
      )
    }
    else {
      return (
        <div>
          <Snow />
          <div className="result">
          <Result />
          </div>
        </div>
      )
    }
  }
}

export default Body;
