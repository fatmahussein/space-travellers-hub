import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
import { useDispatch } from 'react-redux';
import RocketCard from '../RocketCard';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));
expect.extend({ toBeInTheDocument });
describe('RocketCard', () => {
  const rockets = [
    {
      id: '1',
      name: 'Falcon 9',
      image: 'falcon9.jpg',
      description: 'This is Falcon 9 rocket',
      reserved: false,
    },
    {
      id: '2',
      name: 'Starship',
      image: 'starship.jpg',
      description: 'This is Starship rocket',
      reserved: true,
    },
  ];
  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
  });
  it('renders rocket cards correctly', () => {
    const { getAllByAltText, getByText } = render(<RocketCard rockets={rockets} />);
    const rocketImages = getAllByAltText('picha');
    expect(rocketImages.length).toBe(rockets.length);
    rockets.forEach((rocket, index) => {
      const rocketName = getByText(rocket.name);
      const rocketDescription = getByText(rocket.description);
      const rocketImage = rocketImages[index];
      expect(rocketName).toBeInTheDocument();
      expect(rocketDescription).toBeInTheDocument();
      expect(rocketImage).toBeInTheDocument();
    });
  });
  it('calls dispatch with the correct action when reserve button is clicked', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);
    const { getByText } = render(<RocketCard rockets={rockets} />);
    const reserveButton = getByText('Reserve Rocket');
    fireEvent.click(reserveButton);
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'rocket/reserveRocket', payload: rockets[0].id });
  });
  it('calls dispatch with the correct action when cancel button is clicked', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);
    const { getByText } = render(<RocketCard rockets={rockets} />);
    const cancelButton = getByText('Cancel Reservation');
    fireEvent.click(cancelButton);
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'rocket/cancelRocket', payload: rockets[1].id });
  });
});
