import React from 'react';
// import { render, screen } from "@testing-library/react";
import GetHelp from './GetHelp.jsx';
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

const renderComponent = () => renderWithRouter(<GetHelp/>, {}, defaultState);

test('renders <GetHelp/>', () => {
  const { container } = renderComponent();
  expect(container).toMatchSnapshot();
});
