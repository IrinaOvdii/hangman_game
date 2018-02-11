import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Guess from './Guess'


class CountWrong extends PureComponent{

    render(){
      if (this.props.count >= 6 ) {
        return (
          <h4>'Game is over!'</h4>
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
