import * as R from 'ramda'

const COLORS = [
  '#d01604',
  '#dbb94c',
  '#e6613d',
  'e15111',
  '#914223',
  '#59f18c',
  '#282d41',
  '#65c8b4',
]

const makeRandom = () => 0.5 - Math.random()

export const allColors = COLORS.concat(COLORS)

export const mixColors = R.sort(makeRandom, allColors)
