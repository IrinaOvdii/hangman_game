import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Guess from './components/Guess'

class ShowGuess {
  constructor(props) {
    this.letters = []
    this.word = "hello"
  }

  showGuess(word, guess) {
    const array_word = word.split("")
    const result = []
    const separator = " "
    for (var i = 0; i < array_word.length; i++ ){
      if (guess.includes(array_word[i])) {
        result.push(array_word[i])
      }
      else {
        result.push("_")
      }
    }
    return result.join(separator)
  }

  placeholder() {
    return this.showGuess(this.word, []);
  }

  oneLetter(letter) {
    this.letters.push(letter)
    return this.showGuess(this.word, this.letters)
  }

  wrongLetter() {
    // let count = 0
    return this.letters.filter(letter => this.word.indexOf(letter) == -1).length;
    // let letter = this.letters[i]
    // if this.word.indexOf(letter) == -1
      // count++
  }
}





export default ShowGuess
