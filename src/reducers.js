import { handleActions, handleAction } from 'redux-actions'
import { combineReducers } from 'redux'
import { SELECT_PUZZLE, WRONG_STEP, RIGHT_STEP } from './actions'
import mixedColors from './helpers'

const puzzlesBoard = handleActions(
  {
    [SELECT_PUZZLE]: (state, { payload }) =>
      state.map(
        (x, i) => (i === payload ? { ...x, active: !x.active } : { ...x }),
      ),

    [WRONG_STEP]: state => state.map(x => ({ ...x, active: false })),

    [RIGHT_STEP]: state => state.filter(x => !x.active),
  },
  mixedColors,
)

const rounds = handleAction(RIGHT_STEP, state => state + 1, 0)

export default combineReducers({ puzzlesBoard, rounds })
