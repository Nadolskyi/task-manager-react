import React, { createContext, useReducer, useEffect } from 'react';
import { ListReducer } from '../reducers/ListReducer';

export const ListContext = createContext();

const ListContextProvider = (props) => {
  const initialData = [
    {text: 'Cras justo odio', isDone: false},
    {text: 'Dapibus ac facilisis in', isDone: true},
    {text: 'Morbi leo risus', isDone: false},
    {text: 'Porta ac consectetur ac', isDone: false},
    {text: 'Vestibulum at eros', isDone: false}
  ];
  const [tasks, dispatch] = useReducer(ListReducer, [], () => {
    const localData = localStorage.getItem('tasks');
    return localData ? JSON.parse(localData) : initialData;
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <ListContext.Provider value={{ tasks, dispatch }}>
      {props.children}
    </ListContext.Provider>
  );
}

export default ListContextProvider;