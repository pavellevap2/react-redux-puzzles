import { createAction } from 'redux-actions'

const DOMAIN = 'puzzles/'

// Action Types

export const CREATE_PUZZLES_BOARD = `${DOMAIN}CREATE_PUZZLES_BOARD`

export const SELECT_PUZZLE = `${DOMAIN}SELECT_PUZZLE`

export const CHECK_PUZZLES = `${DOMAIN}CHECK_PUZZLES`

export const WRONG_STEP = `${DOMAIN}WRONG_STEP`

export const CORRECT_STEP = `${DOMAIN}CORRECT_STEP`

// Action Creators

export const createPuzzlesBoard = createAction(CREATE_PUZZLES_BOARD)

export const selectPuzzle = createAction(SELECT_PUZZLE)

export const checkPuzzles = createAction(CHECK_PUZZLES)

export const wrongStep = createAction(WRONG_STEP)

export const correctStep = createAction(CORRECT_STEP)
