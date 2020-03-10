import React from 'react'
import { mount, shallow } from 'enzyme'
import AddTask from './AddTask'
import '../../setupTest'
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

describe('addTask component', () => {
	it('render without err', () => {
		const component = mount(
			<Provider store={store}>
				<AddTask />
			</Provider>
		);
		const wrapper = component.find('.AddTask-header');
		expect(wrapper.length).toBe(1);
	})
})