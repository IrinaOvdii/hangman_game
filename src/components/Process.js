import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Process extends PureComponent {

  render(){
    return (
      <h4>{ this.props.word }</h4>
    )
  }
}


export default Process
