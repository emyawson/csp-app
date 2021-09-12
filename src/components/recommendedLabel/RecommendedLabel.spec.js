import React from 'react';
// import { render, screen } from "@testing-library/react";
import RecommendedLabel from './RecommendedLabel.jsx';
// import { renderWithRouter } from "../test-utils";
import { renderWithRouter } from '../../../test-utils';

const defaultState = {};

const renderComponent = (state = {}) => {
  const combinedState = {
    ...defaultState,
    ...state,
  };
  return renderWithRouter(<RecommendedLabel />, combinedState);
};

test('renders <RecommendedLabel/>', () => {
  const { container } = renderComponent();
  expect(container).toMatchSnapshot();

  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
