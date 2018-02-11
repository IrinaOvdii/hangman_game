import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import Process from './components/Process'
import Guess from './components/Guess'
import ShowGuess from './showGuess'
import CountWrong from './components/countWrong'
import Winner from './components/winner'
import StartButton from './components/StartButton'

class App extends Component {
  constructor(props) {
    super()
    this.showGuess = new ShowGuess();
    this.state = {
      guess: this.showGuess.placeholder(),
      count: this.showGuess.wrongLetter(),
      isWinner: this.showGuess.isWinner()

    }
  }

  output(guess){
    console.log(guess);
    this.setState({
      guess: this.showGuess.oneLetter(guess),
      count: this.showGuess.wrongLetter(),
      isWinner: this.showGuess.isWinner()

    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="http://res.cloudinary.com/irinaovdii/image/upload/v1518261488/Hangman2_snvvpi.jpg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Hangman Game!</h1>
        </header>

        <Guess output={this.output.bind(this)} />

        <Process word={ this.state.guess }/>

        <CountWrong count={this.state.count}/>

        <Winner isWinner={this.state.isWinner} />

        <StartButton />
      </div>

    );
  }
}

export default App;
