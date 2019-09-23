export const ListReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, {text: action.task, isDone: action.isDone}]
        case 'REMOVE_BOOK':
            return state.filter((task, i) => state.indexOf(state[action.index]) !== i)
        case 'EDIT_BOOK':
            return returnEditedList(state, action);
        default:
            return state
    }

}

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