import React from 'react';
import PropTypes from 'prop-types';
import CardSkeleton from './CardSkeleton.jsx';

function Loading({ marginTop, width, height }) {
  return (
    <div style={{ marginTop: `${marginTop}` }}>
      <CardSkeleton
        skeletonHeight={height}
        skeletonWidth={width}
      />
    </div>
  );
}

Loading.propTypes = {
  marginTop: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Loading;
