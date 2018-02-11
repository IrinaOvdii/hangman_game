import React, { PureComponent } from 'react'
import { connect } from 'react-redux'


class Winner extends PureComponent{

    render(){
      if (this.props.isWinner){
        return (
          <h4>'Player won!'</h4>
        )
      }
      else {
        return null;
      }
    }
}

export default Winner
