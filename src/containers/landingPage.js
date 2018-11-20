import React from 'react';

class LandingPage extends React.Component {

  handleClick() {
    this.props.advance();
  }

  render() {
    return(
      <div className="body">
        <h2>Think it may snow, but want to be sure?</h2>
        <h3>Take this science-backed quiz to find out</h3>
        <button className="start" onClick={this.handleClick.bind(this)}>Start!</button>
      </div>
    )
  }
}

export default LandingPage;
