import React from 'react'
import { mount } from 'enzyme'
import AddTask from './AddTask'
import '../../setupTest'
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

describe('addTask', () => {
	describe('container loading', () => {
		it('renders', () => {
			mount(
				<Provider store={store}>
					<AddTask />
				</Provider>
			)
		})
	})
})