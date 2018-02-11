import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import start from '../actions/start'

export class StartButton extends PureComponent{
  startGame() {
    this.props.start()
  }
  render() {
    return (
      <button onClick={this.startGame.bind(this)}> Start Again! </button>
    )
  }
}

const mapDispatchToProps = { start }
export default connect(null, mapDispatchToProps)(StartButton)
