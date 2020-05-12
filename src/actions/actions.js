export const deletePost = (index) => ({
	type: 'REMOVE_TASK',
	index
});

export const addTask = (taskText, isDone) => ({
	type: 'ADD_TASK',
	task: taskText,
	isDone
});

export const editTask = (index, taskText, isDone) => ({
	type: 'EDIT_TASK',
	index,
	task: taskText,
	isDone
});

export const getTasks = () => ({
	type: 'GET_TASKS'
})
