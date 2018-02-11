import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Guess extends PureComponent{
  onClick() {
    const guess = this.refs.letter.value.toLowerCase();
    this.props.output(guess);
    document.getElementById('letter').value=''
  }

  render(){
    return (
      <div>
        <label for="letter">Put one letter: </label>
        <input type="text" ref='letter' id="letter"></input>
        <button onClick={this.onClick.bind(this)}>Go!</button>
      </div>
    );
  }
}

export default Guess
