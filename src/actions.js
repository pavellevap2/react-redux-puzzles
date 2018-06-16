import { createAction } from 'redux-actions'

const DOMAIN = 'puzzles/'

// Action Types

export const CREATE_PUZZLES_BOARD = `${DOMAIN}CREATE_PUZZLES_BOARD`

export const SELECT_PUZZLE = `${DOMAIN}SELECT_PUZZLE`

// Action Creators

export const createPuzzlesBoard = createAction(CREATE_PUZZLES_BOARD)

export const selectPuzzle = createAction(SELECT_PUZZLE)
