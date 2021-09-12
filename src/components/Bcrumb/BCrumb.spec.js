import React from 'react';
// import { render, screen } from "@testing-library/react";
import BCrumb from './BCrumb.jsx';
// import { renderWithRouter } from "../test-utils";
import { renderWithRouter } from '../../../test-utils';

const defaultState = {};

const renderComponent = (state = {}) => {
  const combinedState = {
    ...defaultState,
    ...state,
  };
  return renderWithRouter(<BCrumb />, combinedState);
};

test('renders <BCrumb/>', () => {
  const { container } = renderComponent();
  expect(container).toMatchSnapshot();

  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
