import * as R from 'ramda'

const COLORS = [
  '#990000',
  '#FFFFCC',
  '#E0E0E0',
  '#662D2D',
  '#000033',
  '#59f18c',
  '#282d41',
  '#FF9999',
]

const allColors = COLORS.concat(COLORS)

const makeRandom = () => 0.5 - Math.random()

const mixedColors = R.pipe(
  R.sort(makeRandom),
  R.map(color => ({ color, active: false })),
)

export default mixedColors(allColors)
