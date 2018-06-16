import { createAction } from 'redux-actions'

const DOMAIN = 'puzzles/'

// Action Types

export const SELECT_PUZZLE = `${DOMAIN}SELECT_PUZZLE`

export const CHECK_PUZZLES = `${DOMAIN}CHECK_PUZZLES`

export const WRONG_STEP = `${DOMAIN}WRONG_STEP`

export const RIGHT_STEP = `${DOMAIN}CORRECT_STEP`

// Action Creators

export const selectPuzzle = createAction(SELECT_PUZZLE)

export const checkPuzzles = createAction(CHECK_PUZZLES)

export const wrongStep = createAction(WRONG_STEP)

export const rightStep = createAction(RIGHT_STEP)
