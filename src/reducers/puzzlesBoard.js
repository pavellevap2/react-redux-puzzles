import * as R from 'ramda'
import { handleActions } from 'redux-actions'
import { CREATE_PUZZLES_BOARD, SELECT_PUZZLE } from '../actions'
import { mixColors, allColors } from '../utils'
import { combineReducers } from 'redux'

const puzzlesBoard = handleActions(
  {
    [CREATE_PUZZLES_BOARD]: state =>
      mixColors.map(color => ({ color, active: false })),
    [SELECT_PUZZLE]: (state, { payload }) =>
      state.map(
        (x, i) => (i === payload ? { ...x, active: !x.active } : { ...x }),
      ),
  },
  allColors.map(color => ({ color, active: false })),
)

export default combineReducers({ puzzlesBoard })
