import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
import { useDispatch } from 'react-redux';
import DragonCard from '../DragonCard';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));
expect.extend({ toBeInTheDocument });

describe('DragonCard', () => {
  const dragons = [
    {
      id: '0',
      name: 'Dragon 1',
      image: 'Dragon1.jpg',
      type: 'capsule',
      reserved: false,
    },
    {
      id: '1',
      name: 'Dragon 2',
      image: 'Dragon2.jpg',
      type: 'capsule',
      reserved: true,
    },
  ];

  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
  });

  it('renders dragon cards correctly', () => {
    const { getAllByAltText, getByText, queryAllByText } = render(<DragonCard dragons={dragons} />);
    const dragonImages = getAllByAltText('dragon');
    expect(dragonImages.length).toBe(dragons.length);

    const capsuleTextElements = queryAllByText('capsule');

    const dragonType = capsuleTextElements[0];
    expect(dragonType).toBeInTheDocument();

    const dragonName2 = getByText(dragons[1].name);
    const dragonType2 = capsuleTextElements[1];
    expect(dragonName2).toBeInTheDocument();
    expect(dragonType2).toBeInTheDocument();
  });

  it('calls dispatch with the correct action when reserve button is clicked', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);
    const { getByText } = render(<DragonCard dragons={dragons} />);
    const reserveButton = getByText('Reserve Dragon');
    fireEvent.click(reserveButton);
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'dragon/reserveDragon', payload: dragons[0].id });
  });

  it('calls dispatch with the correct action when cancel button is clicked', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);
    const { getByText } = render(<DragonCard dragons={dragons} />);
    const cancelButton = getByText('Cancel Reservation');
    fireEvent.click(cancelButton);
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'dragon/cancelDragon', payload: dragons[1].id });
  });
});
