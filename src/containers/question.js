import React from 'react';
import Answer from './answer';

class Question extends React.Component {

  render() {
    console.log(this.props['currentQuestion']['responses']);
    const answer = Object.keys(this.props.currentQuestion['responses']).map((response, i) => {
      return(<Answer key={i} response={this.props['currentQuestion']['responses'][response]} select={this.select} currentQuestion={this.props.currentQuestion} advance={this.props.advance}/>)
    })

    return(
      <div>
        <h1>
          {this.props.currentQuestion['question']}
        </h1>
        <h2 className="answer-container">
          {answer}
        </h2>
      </div>
    )
  }
}

export default Question;
