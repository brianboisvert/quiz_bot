import React from 'react';

class Answer extends React.Component {

  render() {
    return(
      <button onClick={e => this.props.advance(this.props['response'])}>
        {this.props['response']}
      </button>
    )
  }
}

export default Answer;
