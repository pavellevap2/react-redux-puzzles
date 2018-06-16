import * as R from 'ramda'
import { connect } from 'react-redux'
import { selectPuzzle, checkPuzzles } from '../actions'
import { getRounds } from '../selectors'
import { Puzzle } from '../components'

const mapStateToProps = R.applySpec({
  rounds: getRounds,
})

const mapDispatchToProps = {
  selectPuzzle,
  checkPuzzles,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Puzzle)
