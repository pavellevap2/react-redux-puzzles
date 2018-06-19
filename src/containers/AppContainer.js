import * as R from 'ramda'
import { connect } from 'react-redux'
import { getRounds } from '../selectors'
import { App } from '../components'

const mapStateToProps = R.applySpec({
  rounds: getRounds,
})

export default connect(mapStateToProps)(App)
