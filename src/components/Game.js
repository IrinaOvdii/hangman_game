import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Guess from './components/Guess'

const words = ["dog", "cat", "blue", "yellow", "green", "water"]


class Game extends PureComponent{

  function newWord(){
    const word = words[Math.floor(Math.random()*words.length-1)]
    return word
  }

  function wrongGuessCount(word, guess) {
    var count = 0
    for (var i = 0; i < guess.length; i++ ) {
      if (word.indexOf(guess[i]) == -1) {
        count++
      }
    }
    return count
  }

  function showGuess(word, guess) {
    array_word = word.split("")
    result = []
    separator = " "
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

  function isWinner(word, guess) {
    array_word = word.split("")
    for (var i = 0; i < guess.length; i++ ){
      array_word = array_word.filter(letter => letter != guess[i])
    }
    return array_word.length == 0
  }

  const readline = require("readline")
  const rl = readline.createInterface({input:process.stdin, output:process.stdout})

  function next(word, guess) {
      // check if lost
      if (wrongGuessCount(word, guess) >= 6){
        console.log ("Player Lost! The word was " + word)
        return
      }
      // check if won
      if (isWinner(word, guess)){
        console.log ("Player won! The word was " + word)
        return
      }

      console.log(showGuess(word, guess))

      // ask for the next letter
      rl.question("next letter? ", answer => {
          console.log("player wrote:", answer)
          // do something with answer
          letter = answer.trim()[0]
          guess.push(letter)
          next(word, guess)
      })
  }

  next("hello", [])

}

export default Game
