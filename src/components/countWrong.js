import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Guess from './Guess'


class CountWrong extends PureComponent{

    render(){
      if (this.props.count >= 6 ) {
        return (
          <div>
            <h4>Game is over!</h4>
            <img src="http://res.cloudinary.com/irinaovdii/image/upload/c_scale,w_274/v1518360023/gameover_dwjo3c.jpg" className="App-loser" alt="img-loser" />
          </div>
        )
      }
      else {
        return (
          <h4>Counter of failed letters: { this.props.count }</h4>
        )
      }
    }
}

export default CountWrong
