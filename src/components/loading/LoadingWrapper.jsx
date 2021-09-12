/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading.jsx';

function LoadingWrapper(Component) {
  return function LoadingWrapperComponent({
    isLoading, loadingMarginTop, loadingWidth, loadingHeight, ...props
  }) {
    if (!isLoading) return (<Component {...props} />);
    return (<Loading marginTop={loadingMarginTop} width={loadingWidth} height={loadingHeight}/>);
  };
}

LoadingWrapper.propTypes = {
  Component: PropTypes.element,
};

export default LoadingWrapper;
