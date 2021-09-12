import React from 'react';
import './RecommendedLabel.scss';
import { phrase } from '../../utils/phrase';

const RecommendedLabel = () => (
        <p className="label">{phrase.recommendedLabel}</p>
);

export default RecommendedLabel;
