import React from 'react'
import styled from 'styled-components'
import { PuzzlesBoardContainer } from '../containers'

const AppTitle = styled.h1`
  text-align: center;
  font-size: 3em;
  padding: 1em;
`

const App = ({ rounds }) => (
  <React.Fragment>
    <AppTitle>{rounds < 8 ? 'Game Started' : 'Game over, u win'}</AppTitle>
    <PuzzlesBoardContainer />
  </React.Fragment>
)

export default App
