/* eslint-disable no-nested-ternary */
/* eslint-disable operator-linebreak */
/* eslint-disable no-shadow */
import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

// styles
import './ContactCard.scss';

import '@ingka/hyperlink/style.scss';
import '@ingka/inline-message/style.scss';

import InlineMessage from '@ingka/inline-message';
import RecommendedLabel from '../recommendedLabel/RecommendedLabel.jsx';
import informationCircle from '../../../node_modules/@ingka/ssr-icon/paths/information-circle';

import RichTextEditor from '../RichTextEditor/RichText.jsx';

// Phrase
import { phrase } from '../../utils/phrase';
import ButtonCard from './Button.jsx';
import openingHoursCMS from '../../utils/openingHoursCMS';

const ContactCard = ({
  cardTitle,
  phoneNumber,
  contactType,
  index,
  recommendedButtonExists,
  standardHours,
  holidayHours,
  cardContent,
  contactLabel,
  imgCMS,
  recommended,
  disclaimer,
  id,
  buttonLink,
}) => {
  const [viewMore, setViewMore] = useState(true);

  const hoursCMS = openingHoursCMS(standardHours);
  const isStoreOpen = () => hoursCMS.afterHoursAvailability === 'open';
  const isTelephone = () => contactType === 'telephone';
  const recommendedExist = recommended;

  // For screen readers
  const ariaLabel = () => {
    if (isStoreOpen() && isTelephone()) return `${phrase.isOpen}. ${phrase.noCharge}`;
    if (isStoreOpen() && !isTelephone()) return phrase.isOpen;
    if (!isStoreOpen() && isTelephone()) return `${phrase.isClosed}. ${phrase.noCharge}`;
    return phrase.isClosed;
  };

  const standardHoursBlock = (weekDay) => standardHours.map((element, index) => (
      <div key={index}>
        <span>{weekDay[index]}</span>
        <span key={index}>{element}</span>
      </div>
  ));
  const cardClass = () => (!imgCMS ? 'card' : 'card-with-image' + ' card');
  const viewOpeningHours = () => (
    <div className="card__all-dates-container">
      <div className="card__week-days">{standardHoursBlock(hoursCMS.weekDay)}</div>
      <div className="card__opening-hours">
        <p className="card__opening-hours-headline">{phrase.holidayHoursHeadLine}</p>
        <RichTextEditor data={holidayHours} />
      </div>
    </div>
  );

  const renderInlineMessage = () => (
    <Fragment>
      <InlineMessage
        className="card__closed"
        ssrIcon={informationCircle}
        title={hoursCMS.afterHoursInline ? hoursCMS.afterHoursInline.headline : null}
        body={hoursCMS.afterHoursInline ? hoursCMS.afterHoursInline.message : null}
      />
      <p className="card__afterHoursMessage">{hoursCMS.afterHoursMessage}</p>
    </Fragment>
  );

  return (
    <Fragment>
      <div className={cardClass()}>
        {imgCMS && <img src={imgCMS} role="presentation" className="card-with-image__picture" />}

        <div className="card__title" data-cytest="contactcard-headline">
          {recommendedExist === false && index === 0 ? <RecommendedLabel /> : null}
          <h2>{cardTitle}</h2>
        </div>

        <div className="card__content-block">
          <div className="card__description" data-cytest="contactcard-description">
            <RichTextEditor data={cardContent} />
          </div>

          <ButtonCard
            id={id}
            index={recommendedButtonExists ? 1 : index}
            buttonLink={buttonLink}
            link={isTelephone()}
            phoneNumber={phoneNumber}
            ariaLabel={ariaLabel()}
            contactType={contactType}
            buttonStyles={'card__button'}
            contactLabel={contactLabel}
          />

          {/* If the IKEA store is open */}
          {isStoreOpen() && holidayHours && (
            <p className="card__open">{hoursCMS.afterHoursMessage}</p>
          )}
          {/* If the IKEA store is closed */}
          {!isStoreOpen() && holidayHours && renderInlineMessage()}
          {disclaimer && <div className="card__disclaimer">{disclaimer}</div>}
          {/* Opening and holiday hours */}
          {holidayHours && viewMore && (
            <p className="card__view-more" aria-hidden="true" onClick={() => setViewMore(false)}>
              {phrase.openingHours}
            </p>
          )}
          {!viewMore && viewOpeningHours()}
        </div>
      </div>
      <div className="separator" />
    </Fragment>
  );
};

ContactCard.propTypes = {
  phoneNumber: PropTypes.string,
  cardTitle: PropTypes.string,
  img: PropTypes.string,
  contactType: PropTypes.string,
  contactLabel: PropTypes.string,
  index: PropTypes.number,
  recommendedButtonExists: PropTypes.bool,
  standardHours: PropTypes.array,
  holidayHours: PropTypes.object,
  cardContent: PropTypes.object,
  recommended: PropTypes.bool,
  buttonLink: PropTypes.string,
  id: PropTypes.string,
};

export default ContactCard;
