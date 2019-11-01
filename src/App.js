import React from 'react'
import './App.css'
import CHORDS from './data/chords'

class App extends React.Component {
  state = {
    chords: CHORDS
  }

  ruffleChords = () => {
    this.setState({
      chords: shuffle(this.state.chords)
    })
  }

  generateChordList = () => {
    const ruffledChords = shuffle(this.state.chords)

    return ruffledChords.map(chord => <span>{chord}</span>)
  }

  render () {
    return (
      <div className="App">
        <h1>Guitar Chords Generator</h1>

        <button
          className='generate-button'
          onClick={this.ruffleChords}
        >
          Generate Random Chords
        </button>

        <div className='time-interval-container'>
          <span>Time Interval: </span>
          <input
            className='time-interval'
            value={30}
          />
        </div>

        <div className='chord-display'>
          <div className='chord-title'>SET 1:</div>
          <div className='chord-list'>
            {this.generateChordList()}
          </div>

          <div className='chord-title'>SET 1:</div>
          <div className='chord-list'>
            {this.generateChordList()}
          </div>

          <div className='chord-title'>SET 1:</div>
          <div className='chord-list'>
            {this.generateChordList()}
          </div>
        </div>
      </div>
    )
  }
}

/* Helper function to shuffle an array */
function shuffle (array) {
  let ctr = array.length
  let temp
  let index

  // While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr)
    // Decrease ctr by 1
    ctr--
    // And swap the last element with it
    temp = array[ctr]
    array[ctr] = array[index]
    array[index] = temp
  }

  return array
}

export default App
