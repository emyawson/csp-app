/* eslint-disable react/prop-types */
// Modules
import React, { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import ActionList from '@ingka/action-list';
import Layout from '../../components/layout/Layout.jsx';
import BCrumb from '../../components/Bcrumb/BCrumb.jsx';
import Headline from '../../components/headline/Headline.jsx';
import StatusOrder from '../../components/statusOrder/StatusOrder.jsx';
import Topic from '../../components/topic/Topic.jsx';

import { selectPages, selectSelectedTopic, selectLoadingPages } from '../../store/selectors';
import { SET_SELECTED_CONTACT_ID } from '../../store/actions';
import { ROUTE_GET_SUPPORT } from '../../constants/routes';
import { store } from '../../store';

// styles
import '../home/Home.scss';
import LoadingWrapper from '../../components/loading/LoadingWrapper.jsx';
import { GTM_DATA } from '../../constants/GTMmarket';
import { gtmTopic, gtmActionsData } from '../../utils/gtm';

const HeadlineLoader = LoadingWrapper(Headline);
const StatusOrderLoader = LoadingWrapper(StatusOrder);
const TopicLoader = LoadingWrapper(Topic);

const GetHelp = () => {
  const loadingPages = useSelector(selectLoadingPages);
  const pages = useSelector(selectPages);
  // Recommended topics of the current selected topic

  const topicID = useSelector(selectSelectedTopic);
  const [selectedTopicDetails, setSelectedTopicDetails] = useState({});
  const [hasRecommendation, setHasRecommendation] = useState({});

  const history = useHistory();

  const topicClickHandler = (contactId, index) => {
    // gtm
    gtmTopic(contactId, gtmActionsData(GTM_DATA), index);
    // next page
    store.dispatch({ type: SET_SELECTED_CONTACT_ID, payload: { contactId } });

    history.push(ROUTE_GET_SUPPORT);
  };
  useEffect(() => {
    if (pages) {
      setSelectedTopicDetails(pages.topics.find(({ id }) => id === topicID));
    }

    if (selectedTopicDetails) {
      setHasRecommendation(selectedTopicDetails.recommendation);
    }
  }, [pages, selectedTopicDetails]);
  return (
    <Layout>
      <BCrumb />
      <HeadlineLoader
        isLoading={loadingPages}
        loadingMarginTop="60px"
        loadingWidth="505px"
        loadingHeight="106px"
        title={selectedTopicDetails.headline}
        description={selectedTopicDetails.body}
      />
      {hasRecommendation ? (
        <StatusOrderLoader
        loadingHeight="106px"
          isLoading={loadingPages}
          heading={hasRecommendation.headline}
          content={hasRecommendation.body}
          urlButton={hasRecommendation.callToActionUrl}
          label={hasRecommendation.callToActionText}
        />
      ) : null}
      {selectedTopicDetails.topics ? (
        <ActionList className="topics-container" data-cytest="subtopics-list">
          {selectedTopicDetails.topics.map((suggestedTopic, index) => (
            <Fragment key={index}>
              <TopicLoader
                loadingHeight="106px"
                isLoading={loadingPages}
                label={suggestedTopic.topicHeadline}
                caption={suggestedTopic.topicBody}
                clickHandler={() => topicClickHandler(suggestedTopic.id, index)}
              />
            </Fragment>
          ))}
        </ActionList>
      ) : (
        ''
      )}
    </Layout>
  );
};
export default withRouter(GetHelp);
