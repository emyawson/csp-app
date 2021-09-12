import React from 'react';
// import { render, screen } from "@testing-library/react";
import ContactCard from './ContactCard.jsx';
// import { renderWithRouter } from "../test-utils";
import { renderWithRouter } from '../../../test-utils';

const defaultState = {};

const renderComponent = (state = {}, props) => {
  const richTextDocument = {
    nodeType: 'document',
    data: {},
    content: [
      {
        nodeType: 'paragraph',
        data: {},
        content: [
          {
            nodeType: 'text',
            value: 'Hello',
            data: {},
            marks: [{ type: 'bold' }],
          },
          {
            nodeType: 'text',
            value: ' world!',
            data: {},
            marks: [{ type: 'italic' }],
          },
        ],
      },
    ],
  };

  const mockProps = {
    afterHoursAvailability: 'open',
    afterHoursMessage: 'Open today, 08:00-21:00',
    cardContent: richTextDocument,
  };

  const combinedState = {
    ...defaultState,
    ...state,
  };
  return renderWithRouter(<ContactCard {...mockProps} {...props} />, combinedState);
};

test('renders <ContactCard/>', () => {
  const { container } = renderComponent();
  expect(container).toMatchSnapshot();

  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
