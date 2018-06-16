import * as R from 'ramda'
import { handleActions, handleAction } from 'redux-actions'
import { combineReducers } from 'redux'
import mixedColors from './helpers'
import {
  CREATE_PUZZLES_BOARD,
  SELECT_PUZZLE,
  CHECK_PUZZLES,
  WRONG_STEP,
  CORRECT_STEP,
} from './actions'

const puzzlesBoard = handleActions(
  {
    [SELECT_PUZZLE]: (state, { payload }) =>
      state.map((x, i) => (i === payload ? { ...x, active: true } : { ...x })),

    [WRONG_STEP]: state => state.map(x => ({ ...x, active: false })),

    [CORRECT_STEP]: state => state.filter(x => !x.active),
  },
  mixedColors,
)

const rounds = handleAction(CORRECT_STEP, state => state + 1, 0)

export default combineReducers({ puzzlesBoard, rounds })
