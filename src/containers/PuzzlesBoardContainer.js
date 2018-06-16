import * as R from 'ramda'
import { connect } from 'react-redux'
import { getPuzzlesBoard } from '../selectors'
import { createPuzzlesBoard, checkPuzzles } from '../actions'
import PuzzlesBoard from '../components/PuzzlesBoard'

const mapStateToProps = R.applySpec({
  puzzlesBoard: getPuzzlesBoard,
})

const mapDispatchToProps = {
  createPuzzlesBoard,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PuzzlesBoard)
