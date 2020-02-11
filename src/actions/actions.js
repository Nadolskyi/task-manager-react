export const deletePost = (index) => {
	return {
		type: 'REMOVE_BOOK',
		index
	}
};

export const addTask = (taskText, isDone) => { 
	return { 
		type: 'ADD_TASK',
		task: taskText,
		isDone 
	} 
};

export const editTask = (index, taskText, isDone) => {
	return {
		type: 'EDIT_BOOK',
		index,
		task: taskText,
		isDone
	}
}