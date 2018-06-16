import React from 'react'
import PuzzleContainer from '../containers/PuzzleContainer'

export default class PuzzlesBoard extends React.Component {
  componentDidMount() {
    this.props.createPuzzlesBoard()
  }
  render() {
    const { puzzlesBoard } = this.props

    return (
      <React.Fragment>
        {puzzlesBoard.map(({ color, active }, i) => (
          <PuzzleContainer color={color} active={active} key={i} index={i} />
        ))}
      </React.Fragment>
    )
  }
}
