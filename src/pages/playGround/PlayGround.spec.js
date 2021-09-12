import React from 'react';
// import { render, screen } from "@testing-library/react";
import PlayGround from './PlayGround.jsx';
// import { renderWithRouter } from "../test-utils";
import { renderWithRouter } from '../../../test-utils';

const defaultState = {};

const renderComponent = (state = {}) => {
  const combinedState = {
    ...defaultState,
    ...state,
  };
  return renderWithRouter(<PlayGround />, combinedState);
};

test('renders <PlayGround/>', () => {
  const { container } = renderComponent();
  expect(container).toMatchSnapshot();

  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
