import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Guess from './Guess'


class CountWrong extends PureComponent{

    render(){
      return (
        <div>
          <h1>{ this.props.count }</h1>
        </div>

      )
    }
}

export default CountWrong
