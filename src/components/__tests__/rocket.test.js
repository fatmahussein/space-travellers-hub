import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Rocket from '../rocket';

const mockStore = configureStore([]);

describe('test', () => {
  test('should render rocket component', () => {
    const store = mockStore({
      rockets: {
        rockets: [{
          id: '5e9d0d95eda69955f709d1eb',
          name: 'Falcon 1',
          description: 'The Falcon 1 was an expendable launch system',
          image: 'https://imgur.com/DaCfMsj.jpg',
          reserved: true,
        }],
        isLoading: false,
        isError: false,
      },
    });

    const myRocket = render(
      <Provider store={store}>
        <Rocket />
      </Provider>,
    );

    expect(myRocket).toMatchSnapshot();
  });
});
