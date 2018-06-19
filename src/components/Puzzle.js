import React from 'react'
import styled from 'styled-components'

const PuzzleContainer = styled.div`
  width: ${({ size }) => `${size}%`};
  height: 6em;
  border: 1px solid #ccc;
  margin: 0.5em;
  perspective: 20em;
`

const FullPuzzle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform-origin: center right;
  transition: transform 1s;
  transform: ${({ active }) => active && 'translateX(-100%) rotateY(-180deg)'};
  cursor: pointer;
`

const SidePuzzle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: black;
`

const BackContainer = SidePuzzle.withComponent('div')

const BackPuzzle = BackContainer.extend`
  background: ${({ color }) => color};
  transform: rotateY(180deg);
`

const Puzzle = ({ active, color, index, selectPuzzle, rounds }) => {
  const puzzleSize = !rounds ? 23 : rounds <= 3 ? 30 : 43

  return (
    <PuzzleContainer size={puzzleSize}>
      <FullPuzzle
        active={active}
        onClick={() => {
          selectPuzzle(index)
        }}
      >
        <SidePuzzle />
        <BackPuzzle color={color} />
      </FullPuzzle>
    </PuzzleContainer>
  )
}

export default Puzzle
