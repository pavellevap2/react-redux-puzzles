import * as R from 'ramda'
import { handleActions } from 'redux-actions'
import {
  CREATE_PUZZLES_BOARD,
  SELECT_PUZZLE,
  CHECK_PUZZLES,
  WRONG_STEP,
  CORRECT_STEP,
} from '../actions'
import { mixColors, allColors } from '../utils'
import { combineReducers } from 'redux'

const puzzlesBoard = handleActions(
  {
    [CREATE_PUZZLES_BOARD]: () =>
      mixColors.map(color => ({ color, active: false })),

    [SELECT_PUZZLE]: (state, { payload }) =>
      state.map(
        (x, i) => (i === payload ? { ...x, active: !x.active } : { ...x }),
      ),
    [WRONG_STEP]: state => state.map(x => ({ ...x, active: false })),
    [CORRECT_STEP]: state => state.filter(x => !x.active),
  },
  [],
)

export default combineReducers({ puzzlesBoard })
