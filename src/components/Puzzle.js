import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  width: 200px;
  height: 260px;
  border: 1px solid #ccc;
  margin: 40px 0;
  perspective: 600px;
`
const FullCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transform-style: preserve-3d;
  transform-origin: center right;
  transition: transform 1s;
  transform: ${({ active }) =>
    active ? 'translateX(-100%) rotateY(-180deg)' : null};
`

const SideCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  line-height: 260px;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  backface-visibility: hidden;
  background: red;
`

const Back = SideCard.withComponent('div')

const BackCard = Back.extend`
  background: ${({ color }) => color};
  transform: rotateY(180deg);
`

export default class Puzzle extends React.Component {
  render() {
    const { active, color, selectPuzzle, index } = this.props
    console.log(active)
    return (
      <CardContainer>
        <FullCard active={active} onClick={() => selectPuzzle(index)}>
          <SideCard />
          <BackCard color={color} />
        </FullCard>
      </CardContainer>
    )
  }
}
