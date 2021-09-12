import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from '@ingka/skeleton';
import '@ingka/skeleton/style.scss';
import '@ingka/variables/style.scss';

const CardSkeleton = ({ skeletonHeight, skeletonWidth }) => (
        <span className="link">
            <div className="info">
                <div className="text-wrapper">
                    <Skeleton width={skeletonWidth} height={skeletonHeight} className="label" />
                </div>
            </div>
        </span>
);

CardSkeleton.propTypes = {
  skeletonHeight: PropTypes.string,
  skeletonWidth: PropTypes.string,
};

export default CardSkeleton;
