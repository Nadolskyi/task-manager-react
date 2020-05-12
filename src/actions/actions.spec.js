import { getTasks, editTask } from './actions';
import * as t from './actionsTypes';

describe('list actions', () => {
	it('getTasks', () => {
		expect(getTasks()).toEqual({
			type: t.GET_TASKS
		})
	})
	it('editTask', () => {
		const expectedAction = {
			type: t.EDIT_TASK,
			index: '',
			task: '',
			isDone: false
		}
		expect(editTask(expectedAction.index, expectedAction.task, expectedAction.isDone)).toEqual(
			expectedAction
		)
	})
})