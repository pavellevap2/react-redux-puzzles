import { connect } from 'react-redux'
import { selectPuzzle } from '../actions'
import Puzzle from '../components/Puzzle'

const mapDispatchToProps = {
  selectPuzzle,
}

export default connect(
  undefined,
  mapDispatchToProps,
)(Puzzle)
