// Modules
import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Layout from '../../components/layout/Layout.jsx';
import BCrumb from '../../components/Bcrumb/BCrumb.jsx';
import Headline from '../../components/headline/Headline.jsx';
import ContactCard from '../../components/contactCard/ContactCard.jsx';
import SelfServiceOption from '../../components/selfServiceOption/SelfServiceOption.jsx';
import imgSVG from '../../utils/rectangle.svg';
import {
  selectPages, selectSelectedTopic, selectLoadingPages, selectContactPage,
} from '../../store/selectors';
// styles
import LoadingWrapper from '../../components/loading/LoadingWrapper.jsx';

const HeadlineLoader = LoadingWrapper(Headline);
const SelfServiceOptionLoader = LoadingWrapper(SelfServiceOption);
const ContactCardLoader = LoadingWrapper(ContactCard);

const GetSupport = () => {
  // new code
  const loadingPages = useSelector(selectLoadingPages);
  const pages = useSelector(selectPages);
  const topicID = useSelector(selectSelectedTopic);
  const selectedContactID = useSelector(selectContactPage);
  const [selfService, setSelfService] = useState(false);
  const [selfServiceButton, setSelfServiceButton] = useState(false);
  const [listSelectedtopics, setListSelectedtopics] = useState([]);
  const [selectedContactPage, setSelectedContactPage] = useState({});

  useEffect(() => {
    if (pages) {
      setListSelectedtopics(() => pages.topics.find(({ id }) => id === topicID).topics);
      setSelectedContactPage(listSelectedtopics.find(({ id }) => id === selectedContactID));
    }

    if (selectedContactPage) {
      setSelfService(() => (!!selectedContactPage.recommendation));
    }

    if (selfService) {
      setSelfServiceButton(() => (!!selectedContactPage.recommendation.callToActionText));
    }
  }, [
    pages,
    selectedContactPage,
    selfService,
    selfServiceButton]);

  return (
    <Layout>
      <BCrumb />
      {selectedContactPage && (
        <Fragment>
          <HeadlineLoader
            isLoading={loadingPages}
            title={selectedContactPage.headline}
            description={selectedContactPage.body}
            loadingMarginTop="60px"
            loadingWidth="505px"
            loadingHeight="106px"
          />

          {/* recommendation Option */}
          {selectedContactPage.recommendation && (
            <Fragment key={selectedContactPage.recommendation.id}>
              <SelfServiceOptionLoader
                isLoading={loadingPages}
                headline={selectedContactPage.recommendation.headline}
                content={selectedContactPage.recommendation.body}
                buttonLabel={selectedContactPage.recommendation.callToActionText}
                buttonLink={selectedContactPage.recommendation.callToActionUrl}
                // imgCMS={imgSVG}
                imgCMS={selectedContactPage.recommendation.image}
              />
            </Fragment>
          )}
          {selectedContactPage.contactMethods
            ? selectedContactPage.contactMethods.map((item, index) => (
              <Fragment key={item.id}>
                <ContactCardLoader
                  isLoading={loadingPages}
                  id={item.id}
                  cardTitle={item.titleContact}
                  cardContent={item.bodyContact}
                  contactType={item.type}
                  contactLabel={item.buttonLabel}
                  index={index}
                  phoneNumber={item.phoneNumber}
                  standardHours={item.standardHours}
                  holidayHours={item.holidayHours}
                  imgCMS={item.image}
                  // imgCMS={imgSVG}
                  recommended={selfService}
                  recommendedButtonExists={selfServiceButton}
                  disclaimer={item.disclaimer}
                  buttonLink={item.callToActionUrl}
                />
              </Fragment>
            ))
            : ''}
        </Fragment>
      )}
    </Layout>
  );
};

GetSupport.propTypes = {
  location: PropTypes.object,
};

export default GetSupport;
