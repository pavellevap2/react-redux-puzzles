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
  background: blue;
  transform: rotateY(180deg);
`

export default class Puzzle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
  }

  selectPuzzle = () => {
    const { active } = this.state
    this.setState({
      active: !active,
    })
  }

  render() {
    const { number } = this.props
    const { active } = this.state

    return (
      <CardContainer>
        <FullCard active={active} onClick={this.selectPuzzle}>
          <SideCard>{number}</SideCard>
          <BackCard>{number} </BackCard>
        </FullCard>
      </CardContainer>
    )
  }
}
