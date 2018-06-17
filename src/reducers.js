import { handleActions, handleAction } from 'redux-actions'
import { combineReducers } from 'redux'
import { MAKE_RIGHT_STEP, MAKE_PUZZLE_ACTIVE, MAKE_WRONG_STEP } from './actions'
import mixedColors from './helpers'

const puzzlesBoard = handleActions(
  {
    [MAKE_PUZZLE_ACTIVE]: (state, { payload }) =>
      state.map(
        (x, i) => (i === payload ? { ...x, active: !x.active } : { ...x }),
      ),

    [MAKE_WRONG_STEP]: state => state.map(x => ({ ...x, active: false })),

    [MAKE_RIGHT_STEP]: state => state.filter(x => !x.active),
  },
  mixedColors,
)

const rounds = handleAction(MAKE_RIGHT_STEP, state => state + 1, 0)

export default combineReducers({ puzzlesBoard, rounds })
