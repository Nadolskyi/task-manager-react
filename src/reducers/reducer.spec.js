import * as t from '../actions/actionsTypes'
import rootReducer, { initialState, downloadedList } from './rootReducer';

describe('list reducer', () => {
  it('GET_TASKS', () => {
    const action = {
      type: t.GET_TASKS
    }
    expect(rootReducer(initialState, action)).toEqual(
      [...downloadedList]
    );
  })
  it('ADD_TASK', () => {
    const action = {
      type: t.ADD_TASK,
      task: '',
      isDone: false
    }
    expect(rootReducer(initialState, action)).toEqual(
      [...initialState, {text: action.task, isDone: action.isDone}]
    );
  })
})