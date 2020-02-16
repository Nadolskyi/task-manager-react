import * as t from '../actions/actionsTypes'

export const initialState = [];

export const downloadedList = [
  { text: 'Cras justo odio', isDone: false },
  { text: 'Dapibus ac facilisis in', isDone: true },
  { text: 'Morbi leo risus', isDone: false },
  { text: 'Porta ac consectetur ac', isDone: false },
  { text: 'Vestibulum at eros', isDone: false }
];

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.ADD_TASK:
      return [...state, { text: action.task, isDone: action.isDone }]
    case t.REMOVE_BOOK:
      return state.filter((task, i) => state.indexOf(state[action.index]) !== i)
    case t.EDIT_BOOK:
      return returnEditedList(state, action);
    case t.GET_TASKS:
      return downloadedList;
    default:
      return state
  }

};

const returnEditedList = (state, action) => {
  state.map((task, i) => {
    if (i === action.index) {
      state[i] = {
        text: action.task,
        isDone: action.isDone
      }
    }
  })
  return [...state];
}

export default rootReducer;