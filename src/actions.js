import { createAction } from 'redux-actions'

const DOMAIN = 'puzzles/'

// Action Types

export const SELECT_PUZZLE = `${DOMAIN}SELECT_PUZZLE`

export const MAKE_PUZZLE_ACTIVE = `${DOMAIN}MAKE_PUZZLE_ACTIVE`

export const MAKE_WRONG_STEP = `${DOMAIN}MAKE_WRONG_STEP`

export const MAKE_RIGHT_STEP = `${DOMAIN}MAKE_RIGHT_STEP`

// Action Creators

export const selectPuzzle = createAction(SELECT_PUZZLE)

export const makePuzzleActive = createAction(MAKE_PUZZLE_ACTIVE)

export const makeWrongStep = createAction(MAKE_WRONG_STEP)

export const makeRightStep = createAction(MAKE_RIGHT_STEP)
