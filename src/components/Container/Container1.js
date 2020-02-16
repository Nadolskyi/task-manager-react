import React from 'react'
import { shallow } from 'enzyme'
import { Container } from './Container'

describe('Container', () => {
  const props = { // описываем props
    tasks: [],
    // функция получения новостей onGetNews. Ее содержимое тестировать не нужно.
    // Но нам потребуется протестировать, что функция была вызвана в componentDidMount
    onGetTasks: () => {},
  }
  
  // здесь будут будущие it
  
})