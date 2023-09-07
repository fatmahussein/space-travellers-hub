import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Missions from '../Missions';

const mockStore = configureStore([]);

describe('test', () => {
  test('should render mission component', () => {
    const store = mockStore({
      missions: {
        missions: [
          {
            name: 'Test Mission 1',
            description: 'Test Description',
            reserved: false,
            id: 'test-id',
          },
          {
            name: 'Test Mission 2',
            description: 'Test Description 2',
            reserved: true,
            id: 'test-id 2',
          },
        ],
        pending: false,
        error: false,
      },
    });

    const myMissions = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(myMissions).toMatchSnapshot();
  });
});
