import React from 'react';
import RichTextEditor from './RichText.jsx';

import { renderWithRouter } from '../../../test-utils';

const defaultState = {};

const renderComponent = (state = {}) => {
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

  const combinedState = {
    ...defaultState,
    ...state,
  };
  return renderWithRouter(<RichTextEditor data={richTextDocument} />, combinedState);
};

test('renders <richTextDocument/>', () => {
  const { container } = renderComponent();
  expect(container).toMatchSnapshot();
});
