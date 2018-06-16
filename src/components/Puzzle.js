import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  width: ${({ size }) => `${size}%`};
  height: 80px;
  border: 1px solid #ccc;
  margin: 10px;
  perspective: 300px;
`

const FullCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transform-style: preserve-3d;
  transform-origin: center right;
  transition: transform 1s;
  transform: ${({ active }) => active && 'translateX(-100%) rotateY(-180deg)'};
`

const SideCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  backface-visibility: hidden;
  background: black;
`

const Back = SideCard.withComponent('div')

const BackCard = Back.extend`
  background: ${({ color }) => color};
  transform: rotateY(180deg);
`

export default class Puzzle extends React.Component {
  render() {
    const {
      active,
      color,
      selectPuzzle,
      index,
      checkPuzzles,
      rounds,
    } = this.props

    const puzzleSize = !rounds ? 23 : rounds <= 3 ? 30 : 43
    console.log(puzzleSize, rounds)
    return (
      <CardContainer size={puzzleSize}>
        <FullCard
          active={active}
          onClick={() => {
            checkPuzzles(index)
          }}
        >
          <SideCard />
          <BackCard color={color} />
        </FullCard>
      </CardContainer>
    )
  }
}
