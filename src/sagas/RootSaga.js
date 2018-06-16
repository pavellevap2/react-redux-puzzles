import { all, call } from 'redux-saga/effects'
import checkPuzzlesWatcher from './checkPuzzle'

export default function*() {
  yield all([call(checkPuzzlesWatcher)])
}
