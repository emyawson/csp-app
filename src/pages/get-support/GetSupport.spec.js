import React from 'react';
// import { render, screen } from "@testing-library/react";
import GetSupport from './GetSupport.jsx';
// import { renderWithRouter } from "../test-utils";
import { renderWithRouter } from '../../../test-utils';
import pagesMock from '../../services/mock/pagesMock';

const defaultState = {
  router: {},
  loading: {},
  pages: pagesMock,
  selectedTopic: '1L8HKugsJOw3bgoVI4txrc',
  selectedContactPage: '1SuaI8C7L4mQBQLrgFwsGr',
  breadcrumbPathname: [],
  errors: {},
};

const renderComponent = () => renderWithRouter(<GetSupport />, {}, defaultState);

test('renders <GetSupport/>', () => {
  const { container } = renderComponent();
  expect(container).toMatchSnapshot();

  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
