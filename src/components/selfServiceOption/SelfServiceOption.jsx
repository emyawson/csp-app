/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import Button from '@ingka/button';
import RecommendedLabel from '../recommendedLabel/RecommendedLabel.jsx';

// Button
import '@ingka/svg-icon/style.scss';
import '@ingka/button/style.scss';
import '@ingka/focus/style.scss';
import RichTextEditor from '../RichTextEditor/RichText.jsx';
import './SelfServiceOption.scss';
import StillNeedHelp from '../stillNeedHelp/StillNeedHelp.jsx';

const SelfServiceOption = ({
  headline, content, buttonLink, buttonLabel, imgCMS,
}) => {
  const cardClass = () => (!imgCMS ? 'selfservice' : 'selfservice-with-image' + ' selfservice');
  return (
    <Fragment>
      <div className={cardClass()}>
        {imgCMS && (
          <div
            className="selfservice-with-image__picture"
            data-cytest="selfservice-image"
          >
            <img src={imgCMS} role="presentation" />
          </div>
        )}
        <div>
          <div className="selfservice__label" data-cytest="recommended-label">
            <RecommendedLabel />
          </div>
          {/* Description and title DESKTOP */}
          <h2 className="selfservice__title" data-cytest="selfservice-headline">
            {headline}
          </h2>
          <div className="selfservice__description" data-cytest="selfservice-description">
            <RichTextEditor data={content} />
          </div>

          {buttonLabel !== null && (
            <Button
              data-cytest="button-selfService"
              onClick={() => {
                window.location.href = buttonLink;
              }}
              className="selfservice__button"
              type="primary"
            >
              {buttonLabel}
            </Button>
          )}
        </div>
      </div>
      <div className="separator" />
      {/* This component shows as a way to present the contact cards. */}
      <StillNeedHelp />
    </Fragment>
  );
};

export default SelfServiceOption;
