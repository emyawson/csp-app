// Modules
import './StatusOrder.scss';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
// Button
import '@ingka/svg-icon/style.scss';
import '@ingka/button/style.scss';
import '@ingka/focus/style.scss';
import Button from '@ingka/button';
import RichTextEditor from '../RichTextEditor/RichText.jsx';
import RecommendedLabel from '../recommendedLabel/RecommendedLabel.jsx';

const StatusOrder = ({
  heading, content, label, urlButton,
}) => (
    <Fragment>
      <div className="status-order">
        <RecommendedLabel />
        <h2 className="status-order__heading">{heading}</h2>

        {content && <RichTextEditor data={content} style={'status-order__description'}/>}
        {/* the URL is dummy for now */}
        <Button type="primary" className="status-order__btn" onClick={() => { window.location.href = urlButton; }}>{label}</Button>
        </div>
    </Fragment>
);

StatusOrder.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.object,
  label: PropTypes.string,
  urlButton: PropTypes.string,
};

export default StatusOrder;
