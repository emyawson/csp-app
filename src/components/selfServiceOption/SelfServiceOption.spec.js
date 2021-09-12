import React from 'react';
// import { render, screen } from "@testing-library/react";
import SelfServiceOption from './SelfServiceOption.jsx';
// import { renderWithRouter } from "../test-utils";
import { renderWithRouter } from '../../../test-utils';

const defaultState = {};

const mockProps = {

  selfServiceHeadline: 'Headline self service',
  selfServiceButton: 'label button',
  selfServiceContent: {
    content: [
      { value: 'need body text' },
    ],
  },
  selfServiceButtonExists: true,
  img: 'asset/test.jpg',

};

const renderComponent = (state = {}, props) => {
  const combinedState = {
    ...defaultState,
    ...state,
  };
  return renderWithRouter(<SelfServiceOption {...mockProps} {...props} />, combinedState);
};

test('renders <SelfServiceOption/>', () => {
  const { container } = renderComponent();
  expect(container).toMatchSnapshot();

  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
