import React from 'react';
import Answer from './answer';

class Question extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selection: '',
      question: {}
    }
    this.select = this.select.bind(this);
  }

  select(response) {
    this.setState({
      selection: response['response'],
      question: response['currentQuestion']
    })
    //
    // console.log("props: " + this.props);
    // console.log("state: " + this.state);
  }

  handleClick() {
    if (this.state.selection === '' || this.state.question !== this.props.currentQuestion) {
      alert('Please make a selection')
    } else {
      this.props.advance(this.state.selection);
    }
  }

  render() {
    const answer = Object.keys(this.props.currentQuestion['responses']).map((response, i) => {
      return(<Answer key={i} response={response} select={this.select} currentQuestion={this.props.currentQuestion}/>)
    })

    return(
      <div>
        <h1>
          {this.props.currentQuestion['question']}
        </h1>
        <h2>
          {answer}
        </h2>
        <h3>
          <button onClick={this.handleClick.bind(this)}>Submit</button>
        </h3>
      </div>
    )
  }
}

export default Question;
