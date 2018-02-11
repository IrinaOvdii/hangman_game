
export const START = 'START'

const words  = ['hello', 'bingo', 'dog', 'cat', 'game', 'action', 'watch'];

function newWord(){
  const word = words[Math.floor(Math.random()*words.length-1)];
  return word
}

export default() => ({
  type: START,
  payload: newWord()
})
