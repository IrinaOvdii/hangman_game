import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import guess from "../actions/guess.js"


class Guess extends PureComponent {
  constructor(props) {
    super()
    const { letter } = props
    this.state = {
      letter: '',
    }
  }

  updateLetter(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.saveGuess()
    }
  }

  saveGuess() {
    const guess = this.refs.letter.value.toLowerCase()
    this.props.guess(guess)
    this.refs.letter.value=nul
  }

  render(){
    return (
      <div>
        <input
          type="text"
          ref="letter"
          className="letter"
          placeholder="Put a letter!"
          defaultValue={this.state.letter}
          onChange={this.updateLetter.bind(this)} />

        <div className="actions">
          <button className="primary" onClick={this.saveGuess.bind(this)}>guess</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ( { guess } ) => {
  return {
    guess
  }
}

const mapDispatchToProps = { guess: guess }

export default connect(mapStateToProps, mapDispatchToProps)(Guess)
