import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Missions from '../Missions';

const mockStore = configureStore([]);
const initialState = {
  missions: {
    isLoading: false,
    missions: [
      {
        mission_id: '1',
        mission_name: 'Mission 1',
        description: 'Mission 1 Description',
        reserved: false,
      },
      {
        mission_id: '2',
        mission_name: 'Mission 2',
        description: 'Mission 2 Description',
        reserved: true,
      },
    ],
  },
};
const store = mockStore(initialState);

test('Missions component renders correctly', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Missions />
    </Provider>
  );

  expect(asFragment()).toMatchSnapshot();
});
