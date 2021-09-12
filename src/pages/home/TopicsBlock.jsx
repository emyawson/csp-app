import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import ActionList from '@ingka/action-list';
import Topic from '../../components/topic/Topic.jsx';
import LoadingWrapper from '../../components/loading/LoadingWrapper.jsx';
import { ROUTE_GET_HELP } from '../../constants/routes';
import { SET_SELECTED_TOPIC_ID } from '../../store/actions';
import { store } from '../../store';
import { gtmTopic, gtmActionsData } from '../../utils/gtm.js';
//import { delay } from '../../utils/delay.js';
import { GTM_DATA } from '../../constants/GTMmarket';

const TopicsBlock = ({ homeTopics, loading }) => {
  const history = useHistory();
  const TopicLoaderLoader = LoadingWrapper(Topic);
  const numerOfTopics = [5, 6, 9];
  const isLayoutAdditional = numerOfTopics.includes(homeTopics.length);
  const getClassName = (isLayoutAdditional ? 'topics-container-additional' : 'topics-container');

  const topicClickHandler = async (topicId, index) => {
   
    // gtm
    gtmTopic(topicId, gtmActionsData(GTM_DATA), index);
    // Next page
    store.dispatch({ type: SET_SELECTED_TOPIC_ID, payload: { topicId } });

    // await delay(3000);
    history.push(ROUTE_GET_HELP);

  };
  return (
    <ActionList className={getClassName} data-cytest="topics-list">
      {homeTopics.map((topic, index) => (
        <Fragment key={index}>
          <TopicLoaderLoader
            isLoading={loading}
            loadingHeight="106px"
            label={topic.topicHeadline}
            caption={topic.topicBody}
            clickHandler={() => topicClickHandler(topic.id, index)}
          />
        </Fragment>
      ))}
    </ActionList>
  );
};

export default TopicsBlock;
