import React from 'react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import PropTypes from 'prop-types';
import './RichText.scss';

const RichTextEditor = ({ data, style }) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => `<b>${text}</b>`,
    },
    renderInlines: {
      [INLINES.HYPERLINK]: (node, next) => `<a href="${node.data.uri}"${node.data.uri.startsWith('https://mydomain.com') ? '' : ' target="_blank"'}>${next(node.content)}</a>`,
      [INLINES.HYPERLINK]: ({ node }, children) => `<a href=${node.data.uri} target='_self'>${children}</a>`,
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, next) => `<h2>${next(node.content.value)}</h2>`,
      [BLOCKS.HEADING_2]: (node, children) => `<h3>${children}</h3>`,
      [BLOCKS.PARAGRAPH]: (node, next) => `<p>${next(node.content).replace(/\n/g, '<br/>')}</p>`,
      [BLOCKS.EMBEDDED_ASSET]: (node) => `<Img fluid="${node.data.target.fluid}" />`,
    },

  };

  const myHtml = documentToHtmlString(data, options);
  return (
    <div className={`richtext-editorstyle ${style || ''}`} dangerouslySetInnerHTML={{ __html: myHtml }} />
  );
};

RichTextEditor.propTypes = {
  data: PropTypes.object,
  style: PropTypes.string,
};

export default RichTextEditor;
