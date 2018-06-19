import * as R from 'ramda'
import { connect } from 'react-redux'
import { getPuzzlesBoard } from '../selectors'
import { PuzzlesBoard } from '../components'

const mapStateToProps = R.applySpec({
  puzzlesBoard: getPuzzlesBoard,
})

export default connect(mapStateToProps)(PuzzlesBoard)
