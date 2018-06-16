import { call, put, select, takeEvery } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { getPuzzlesBoard } from '../selectors'
import {
  CHECK_PUZZLES,
  checkPuzzles,
  wrongStep,
  correctStep,
  selectPuzzle,
} from '../actions'

const checkPuzzlesWorker = function*({ payload }) {
  const currentPuzzlesBoard = yield select(getPuzzlesBoard)
  const currentSelectedPuzzles = currentPuzzlesBoard.filter(x => x.active)
  if (currentSelectedPuzzles.length <= 1) {
    yield put(selectPuzzle(payload))
  }

  const puzzlesBoard = yield select(getPuzzlesBoard)
  const selectedPuzzles = puzzlesBoard.filter(x => x.active)
  yield delay(1500)

  if (
    selectedPuzzles.length == 2 &&
    selectedPuzzles[0] === selectedPuzzles[1]
  ) {
    yield put(correctStep())
  }
  yield put(wrongStep())
}

const checkPuzzlesWatcher = function*() {
  yield takeEvery(CHECK_PUZZLES, checkPuzzlesWorker)
}

export default checkPuzzlesWatcher
