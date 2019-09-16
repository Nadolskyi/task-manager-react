import React, { createContext, useReducer, useEffect } from 'react';
import { ListReducer } from '../reducers/ListReducer';

export const ListContext = createContext();

const ListContextProvider = (props) => {
  const initialData = [
    'Cras justo odio',
    'Dapibus ac facilisis in',
    'Morbi leo risus',
    'Porta ac consectetur ac',
    'Vestibulum at eros'
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