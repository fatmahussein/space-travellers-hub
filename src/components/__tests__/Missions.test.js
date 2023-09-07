import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { useDispatch, useSelector } from 'react-redux';
import '@testing-library/jest-dom/extend-expect'; // Import the matcher

import Missions from '../Missions'; // Update the import path to the correct location of Missions.js
import { reserveMission } from '../../Redux/Missions/MissionSlice'; // Import your actions

// Mock the useDispatch and useSelector hooks
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('Missions Component', () => {
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    store = mockStore({
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
    });

    // Mock the useDispatch and useSelector hooks
    useDispatch.mockReturnValue(store.dispatch);
    useSelector.mockImplementation((selector) => selector(store.getState()));
  });

  afterEach(() => {
    jest.restoreAllMocks(); // Clean up spies
  });

  it('should call reserveMission when the button is clicked', async () => {
    // Create a spy function for the reserveMission action
    const reserveMissionSpy = jest.spyOn(store, 'dispatch');

    // Wait for the component to be fully rendered
    const { getByText } = await render(
      <Provider store={store}>
        <Missions />
      </Provider>
    );

    // Make sure the button text is "Join Mission" initially
    const joinButton = getByText('Join Mission');
    expect(joinButton).toBeInTheDocument();

    // Trigger the button click
    fireEvent.click(joinButton);

    // Wait for the Redux action to be dispatched
    await waitFor(() => {
      // Check that the reserveMission action was called with the correct action
      expect(reserveMissionSpy).toHaveBeenCalledWith(reserveMission({ missionId: '1' }));
    });

    // Check if the button text is updated
    expect(joinButton).toHaveTextContent('Leave Mission');
  });
});
