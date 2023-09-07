import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import RocketCard from '../RocketCard';

const mockStore = configureStore([]);

describe('RocketCard Component', () => {
  it('renders the component with reserved badge if reserved is true', () => {
    const rocket = {
      id: '1',
      name: 'Rocket 1',
      image: 'rocket1.jpg',
      description: 'Description for Rocket 1',
      reserved: true,
    };

    const store = mockStore();

    render(
      <Provider store={store}>
        <RocketCard fcrockets={rocket} />
      </Provider>,
    );

    const reservedBadge = screen.getByText(/Reserved/i);
    expect(reservedBadge).toBeInTheDocument();
    expect(reservedBadge).toMatchSnapshot();
  });

  it('renders the component without reserved badge if reserved is false', () => {
    const rocket = {
      id: '2',
      name: 'Rocket 2',
      image: 'rocket2.jpg',
      description: 'Description for Rocket 2',
      reserved: false,
    };
    const store = mockStore();
    render(
      <Provider store={store}>
        <RocketCard rockets={rocket} />
      </Provider>,
    );
    const reservedBadge = screen.queryByText(/Reserved/i);
    expect(reservedBadge).toBeNull();
  });

  it('calls reserveRocket action when Reserve button is clicked', () => {
    const rocket = {
      id: '3',
      name: 'Rocket 3',
      image: 'rocket3.jpg',
      description: 'Description for Rocket 3',
      reserved: false,
    };
    const store = mockStore();
    render(<Provider store={store}><RocketCard rockets={rocket} /></Provider>);
    const reserveButton = screen.getByText(/Reserve rocket/i);
    fireEvent.click(reserveButton);
  });
});
