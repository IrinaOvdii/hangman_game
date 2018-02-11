import React, { PureComponent } from 'react'
import { connect } from 'react-redux'


class Winner extends PureComponent{

    render(){
      if (this.props.isWinner){
        return (
          <div>
            <h4>'Player won!'</h4>
            <img src="http://res.cloudinary.com/irinaovdii/image/upload/c_scale,w_130/v1518359652/Celebrate_qfraif.jpg" className="App-winner" alt="img-winner" />
          </div>
        )
      }
      else {
        return null;
      }
    }
}

export default Winner
