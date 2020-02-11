const initialState = [
    {text: 'Cras justo odio', isDone: false},
    {text: 'Dapibus ac facilisis in', isDone: true},
    {text: 'Morbi leo risus', isDone: false},
    {text: 'Porta ac consectetur ac', isDone: false},
    {text: 'Vestibulum at eros', isDone: false}
];

const rootReducer = (state = initialState, action) => {
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

export default rootReducer;