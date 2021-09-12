/* eslint-disable no-console */
import React from 'react';
import Home from './Home.jsx';
import { renderWithRouter } from '../../../test-utils';
import pagesMock from '../../services/mock/pagesMock';

const initialState = {
  router: {},
  loading: {},
  pages: pagesMock,
  breadcrumbPathname: [],
  errors: {},
};

const renderComponent = () => renderWithRouter(<Home/>, {}, initialState);

test('renders <Home/ >', () => {
  const { container } = renderComponent();
  expect(container).toMatchSnapshot();
});
