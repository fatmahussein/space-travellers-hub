// import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store'; // You may need to install this package

// import Missions from '../components/Missions'; // Make sure to provide the correct path to Missions.js

// // Mock the useDispatch and useSelector hooks
// jest.mock('react-redux', () => ({
//   ...jest.requireActual('react-redux'),
//   useDispatch: jest.fn(),
//   useSelector: jest.fn(),
// }));

// describe('Missions Component', () => {
//   const mockStore = configureStore();
//   let store;

//   beforeEach(() => {
//     store = mockStore({
//       missions: {
//         isLoading: false,
//         missions: [
//           {
//             mission_id: '1',
//             mission_name: 'Mission 1',
//             description: 'Mission 1 Description',
//             reserved: false,
//           },
//           {
//             mission_id: '2',
//             mission_name: 'Mission 2',
//             description: 'Mission 2 Description',
//             reserved: true,
//           },
//         ],
//       },
//     });

//     useDispatch.mockReturnValue(jest.fn());
//     useSelector.mockImplementation((selector) => selector(store.getState()));
//   });

//   it('should call handleMissionAction when the button is clicked', async () => {
//     const { getByText } = render(
//       <Provider store={store}>
//         <Missions />
//       </Provider>
//     );

//     const joinButton = getByText('Join Mission');
//     fireEvent.click(joinButton);

//     // Wait for the Redux action to be dispatched (you might need to adjust the timing)
//     await waitFor(() => expect(store.getActions()).toHaveLength(1));

//     // Check that the reserveMission action was called with the correct missionId
//     expect(store.getActions()[0]).toEqual({
//       type: 'missions/reserveMission',
//       payload: { missionId: '1' },
//     });
//   });
// });import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { useDispatch, useSelector } from 'react-redux';
import '@testing-library/jest-dom/extend-expect'; // Import the matcher

import Missions from '../components/Missions'; // Update the import path to the correct location of Missions.js

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
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockImplementation((selector) => selector(store.getState()));
  });

  it('should call handleMissionAction when the button is clicked', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <Missions />
      </Provider>
    );

    // Make sure the button text is "Join Mission" initially
    const joinButton = getByText('Join Mission');
    expect(joinButton).toBeInTheDocument();

    // Trigger the button click
    fireEvent.click(joinButton);

    // Wait for the Redux action to be dispatched (you might need to adjust the timing)
    await waitFor(() => {
      // Check that the reserveMission action was called with the correct missionId
      expect(store.getActions()).toEqual([
        {
          type: 'missions/reserveMission',
          payload: { missionId: '1' },
        },
      ]);
    });
  });
});
