// Modules

import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { withRouter } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import Breadcrumb from '@ingka/breadcrumb';
import Hyperlink from '@ingka/hyperlink';
import './BCrumb.scss';

// @ingka
import '@ingka/hyperlink/style.scss';
import '@ingka/focus/style.scss';
import '@ingka/breadcrumb/style.scss';
import { ROUTE_BASE, ROUTE_CUSTOMER_SERVICE, ROUTE_NL } from '../../constants/routes';
import { phrase } from '../../utils/phrase';
import { selectPages } from '../../store/selectors';

const BCrumb = () => {
  const pages = useSelector(selectPages);
  let lastCrumb;
  pages.error ? lastCrumb = pages.error.message : lastCrumb = pages.headline;

  const bcrumbPathName = [
    { url: ROUTE_NL, location: phrase.rootHome },
    { url: ROUTE_CUSTOMER_SERVICE, location: phrase.rootCustomerService },
    { url: ROUTE_BASE, location: lastCrumb },
  ];

  return (
    <Breadcrumb className="breadcrumb" data-cytest="breadcrumb">
      {bcrumbPathName.map((item, index) => (
        <Hyperlink url={item.url} key={index}>
          <span className="breadcrumb__item" data-cytes='crumb'>{item.location}</span>
        </Hyperlink>
      ))}
    </Breadcrumb>
  );
};

BCrumb.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(BCrumb);
