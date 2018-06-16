import React from 'react'
import PuzzleContainer from '../containers/PuzzleContainer'
import styled from 'styled-components'

const PuzzlesContainer = styled.div`
  width: 60%;
  height: 97%;
  position: fixed;
  top: -5%;
  left: 20%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  overflow: auto;
`

export default class PuzzlesBoard extends React.Component {
  componentDidMount() {
    this.props.createPuzzlesBoard()
  }

  render() {
    const { puzzlesBoard } = this.props

    return (
      <PuzzlesContainer>
        {puzzlesBoard.map(({ color, active }, i) => (
          <PuzzleContainer color={color} active={active} key={i} index={i} />
        ))}
      </PuzzlesContainer>
    )
  }
}
