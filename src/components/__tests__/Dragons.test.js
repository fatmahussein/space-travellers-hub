import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Dragons from '../Dragons';

const mockStore = configureStore([]);

describe('Dragons Component', () => {
  test('should render dragon component', () => {
    const store = mockStore({
      dragons: {
        dragons: [{
          id: '5e9d058759b1ff74a7ad5f8f',
          name: 'Dragon 1',
          type: 'capsule',
          image: 'https://i.imgur.com/9fWdwNv.jpg',
          reserved: true,
        }],
        isLoading: false,
        isError: false,
      },
    });

    const myDragon = render(
      <Provider store={store}>
        <Dragons />
      </Provider>,
    );

    expect(myDragon).toMatchSnapshot();
  });
});
