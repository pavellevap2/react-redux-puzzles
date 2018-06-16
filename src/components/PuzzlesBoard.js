import React from 'react'
import styled from 'styled-components'
import PuzzleContainer from '../containers/PuzzleContainer'

const PuzzlesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  overflow: auto;
  width: 60%;
  height: 100%;
  position: fixed;
  top: -5%;
  left: 20%;
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
