import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import MyProfile from '../MyProfile';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('MyProfile Component', () => {
  it('should render MyProfile component with mission, rocket, and dragon lists', () => {
    useSelector.mockImplementation((selector) => {
      if (selector) {
        if (selector({ missions: { missions: [] } })) {
          return { missions: [] };
        }
        if (selector({ rockets: { rockets: [] } })) {
          return { rockets: [] };
        }
        if (selector({ dragons: { dragons: [] } })) {
          return { dragons: [] };
        }
      }
      return null;
    });

    const { container } = render(<MyProfile />);

    expect(container).toMatchSnapshot();
  });
});
