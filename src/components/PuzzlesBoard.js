import React from 'react'
import Puzzle from './Puzzle'

const STRUCTURE = Array(17)
  .fill(null)
  .map((_, i) => i)

export default class PuzzlesBoard extends React.Component {
  render() {
    return (
      <React.Fragment>
        {STRUCTURE.map(x => <Puzzle number={x} key={x} />)}
      </React.Fragment>
    )
  }
}
