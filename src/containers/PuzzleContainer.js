import { connect } from 'react-redux'
import { selectPuzzle, checkPuzzles } from '../actions'
import Puzzle from '../components/Puzzle'

const mapDispatchToProps = {
  selectPuzzle,
  checkPuzzles,
}

export default connect(
  undefined,
  mapDispatchToProps,
)(Puzzle)
