import React from 'react';

class LandingPage extends React.Component {

  handleClick() {
    this.props.advance();
  }

  render() {
    return(
      <div className="body">
        <h2>Think you may be a sweet, cuddly doodle (golden, labra, or otherwise), but not sure?</h2>
        <h3>Take the quiz and find out!</h3>
        <button onClick={this.handleClick.bind(this)}>Yes!</button>
      </div>
    )
  }
}

export default LandingPage;
