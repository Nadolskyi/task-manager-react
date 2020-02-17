import React from 'react'
import { shallow } from 'enzyme'
import { Container } from './Container'
import '../../setupTest'

describe('Container', () => {
  const props = {
    tasks: [],
    onGetTasks: () => { },
  }

  describe('container loading', () => {
    const container = shallow(<Container {...props} />)

    it('renders properly', () => {
      expect(container).toMatchSnapshot();
    })
    
    it('isLoading', () => {
      expect(container.find('h1').text()).toEqual('Loading...')
    })
  })

  describe('news container render <News List />', () => {
    const nextProps = {
      ...props,
      tasks: [1, 2]
    }
    const container = shallow(<Container {...nextProps} />)

    it('renders properly News List ', () => {
      expect(container).toMatchSnapshot();
    })
    it('render <News List />', () => {
      expect(container.find('ListTask')).toHaveLength(1)
    })
  })

  describe('function has been called', () => {
    const getTask = jest.fn();
    const nextProps = {
      ...props,
      onGetTasks: getTask
    }
    const container = shallow(<Container {...nextProps} />)

    it('been called', () => {
      expect(getTask).toHaveBeenCalled();
    })
  })

})