import React from 'react';
import PropTypes from 'prop-types';
import './Headline.scss';

const Headline = ({ title, description }) => (
  <div className="headline">
      <h1 className="headline__title" data-cytest="headline">{title}</h1>
      {description && <p className="headline__description">{description}</p>}
  </div>
);

Headline.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Headline;
