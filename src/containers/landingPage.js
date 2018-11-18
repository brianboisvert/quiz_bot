import React from 'react';

class LandingPage extends React.Component {

  handleClick() {
    this.props.advance();
  }

  render() {
    return(
      <div>
        <h3>Ready to start?</h3>
        <button onClick={this.handleClick.bind(this)}>Yes!</button>
      </div>
    )
  }
}

export default LandingPage;
