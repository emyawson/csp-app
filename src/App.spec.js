import React from 'react';
import App from './App.jsx';
import { renderWithRouter } from '../test-utils';
import pagesMock from './services/mock/pagesMock';

const initialState = {
  router: {},
  loading: {},
  pages: pagesMock,
  breadcrumbPathname: [],
  errors: {},
};

const renderComponent = () => renderWithRouter(<App />, {}, initialState);

test('renders <App/>', () => {
  const { container } = renderComponent();
  expect(container).toMatchSnapshot();
});
