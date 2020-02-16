export const deletePost = (index) => ({
	type: 'REMOVE_BOOK',
	index
});

export const addTask = (taskText, isDone) => ({
	type: 'ADD_TASK',
	task: taskText,
	isDone
});

export const editTask = (index, taskText, isDone) => ({
	type: 'EDIT_BOOK',
	index,
	task: taskText,
	isDone
});

export const getTasks = () => ({
	type: 'GET_TASKS'
})
