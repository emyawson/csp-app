import React from 'react';
import PropTypes from 'prop-types';

// Skapa action list
import '@ingka/action-list/style.scss';
import '@ingka/focus/style.scss';
import '@ingka/switch/style.scss';
import '@ingka/svg-icon/style.scss';
import '@ingka/aspect-ratio-image/style.scss';
import '@ingka/button/style.scss';
import '@ingka/forms/style.scss';
import { ActionListItem } from '@ingka/action-list';

const Topic = ({
  label, caption, clickHandler,
}) => (
        <ActionListItem
          control='navigational'
          onClick={clickHandler}
          label={label}
          caption={caption}
        />
);

Topic.propTypes = {
  label: PropTypes.string,
  caption: PropTypes.string,
  clickHandler: PropTypes.func,
};

export default Topic;
