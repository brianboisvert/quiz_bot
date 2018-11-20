import React from 'react';
import Answer from './answer';


const Question = (props) => {

  const answer = Object.keys(props.currentQuestion['responses']).map((response, i) => {
    return(<Answer key={i} response={response} select={this.select} currentQuestion={props.currentQuestion} advance={props.advance}/>)
  })

  return(
    <div>
      <h1>
        {props.currentQuestion['question']}
      </h1>
      <h2>
        {answer}
      </h2>
    </div>
  )
}

export default Question;
