// Code DigitalClicker Component Here

import React from 'react';

<<<<<<< HEAD
class DigitalClicker extends React.Component {
=======
class ClickityClick extends React.Component {
>>>>>>> a35a89675afff4f78476b4c2cff82b18c00ec51b
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      timesClicked: 0,
    };
  }

  handleClick = () => {
  this.setState({
<<<<<<< HEAD
    timesClicked: this.state.timesClicked + 1
  });
=======
    timesClicked: 1
  }, () => (this.state.timesClicked))
>>>>>>> a35a89675afff4f78476b4c2cff82b18c00ec51b
}

  render() {
    return (
      <div>
<<<<<<< HEAD
        <button onClick = {this.handleClick}>{this.state.timesClicked}</button>
=======
        <button onClick= {this.handleClick}>{this.state.timesClicked}</button>
>>>>>>> a35a89675afff4f78476b4c2cff82b18c00ec51b
      </div>
    );
  }
}

<<<<<<< HEAD
export default DigitalClicker;
=======
export default ClickityClick;
>>>>>>> a35a89675afff4f78476b4c2cff82b18c00ec51b
