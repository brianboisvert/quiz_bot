import React from 'react';

class Answer extends React.Component {

  render() {
    return(
      <button onClick={e => this.props.select(this.props)}>
        {this.props['response']}
      </button>
    )
  }
}

export default Answer;
