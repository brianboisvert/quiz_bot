import React from 'react';
import Answer from './answer';

class Question extends React.Component {

  render() {
    const answer = Object.keys(this.props.currentQuestion['responses']).map((response, i) => {
      return(<Answer key={i} response={response} select={this.select} currentQuestion={this.props.currentQuestion} advance={this.props.advance}/>)
    })

    return(
      <div>
        <h1>
          {this.props.currentQuestion['question']}
        </h1>
        <h2>
          {answer}
        </h2>
      </div>
    )
  }
}

export default Question;
