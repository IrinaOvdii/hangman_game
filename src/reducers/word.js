import { START } from '../actions/start';

export default (state = "", { type, payload } = {}) => {
  switch(type) {
      case START :
      state = ""
       return  state.concat(payload)
      default :
        return state
    }
}
