import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import NavBar from '../NavBar';

const mockStore = configureStore([]);
describe('Navbar', () => {
  test('Navbar rendered correctly', () => {
    const store = mockStore({
      rockets: {
        rocket: [
          {
            name: 'Test',
            description: 'Test Description',
            reserved: false,
            id: 'test-id',
          },
        ],
        isLoading: false,
        isError: false,
      },
    });
    const navbar = render(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>,
    );
    expect(navbar).toMatchSnapshot();
  });
});
