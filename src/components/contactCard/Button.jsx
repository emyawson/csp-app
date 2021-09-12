import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Button
import '@ingka/svg-icon/style.scss';
import '@ingka/button/style.scss';
import '@ingka/focus/style.scss';
import Button from '@ingka/button';

// Widget
import openWebChat from '../../utils/widget';
import { gtmContactCards } from '../../utils/gtm';
import { GTM_CONTACT_BUTTONS } from '../../constants/GTMmarket';

function ButtonCard({
  index,
  ariaLabel,
  contactType,
  phoneNumber,
  buttonStyles,
  link,
  contactLabel,
  buttonLink,
  id,
}) {
  const [widgetChat, setWidgetChat] = useState(false);
  const [phoneState, setPhoneState] = useState(null);
  let colorButton;
  colorButton = index <= 0 ? (colorButton = 'primary') : (colorButton = 'secondary');
  const isTelephone = () => contactType === 'telephone';
  const isChat = () => contactType === 'chatbot' || 'chat';

  const btnOptions = (phone, contactType) => {
    // gtm
    gtmContactCards(id, contactType, GTM_CONTACT_BUTTONS);
    // button actions
    if (buttonLink) return (window.location.href = buttonLink);
    if (isTelephone()) return setPhoneState(phone);
    if (isChat()) return openWebChat();
    return null;
  };

  // State has an initial value according to the device size.
  useEffect(() => {
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth < 600) {
      setPhoneState(phoneNumber);
    } else {
      setPhoneState(contactLabel);
    }

    if (process.env.NODE_ENV == 'production' && !window._genesys.widgets.webchat.open) {
      setWidgetChat(true);
    } else {
      setWidgetChat(false);
    }
  }, []);
  return (
    <Button
      data-cytest="contactcard-button"
      type={colorButton}
      aria-label={ariaLabel}
      className={buttonStyles}
      href={link && `tel:${phoneNumber}`}
      onClick={() => btnOptions(phoneNumber, contactType)}
      disabled={contactType == 'chatbot' ? widgetChat : false}
    >
      {isTelephone() ? phoneState : contactLabel}
    </Button>
  );
}

ButtonCard.propTypes = {
  index: PropTypes.number,
  ariaLabel: PropTypes.string,
  contactType: PropTypes.string,
  contactLabel: PropTypes.string,
  phoneNumber: PropTypes.string,
  link: PropTypes.bool,
  buttonLink: PropTypes.string,
  buttonStyles: PropTypes.string,
  id: PropTypes.string,
};

export default ButtonCard;
