const gtmPush = (name, id, entryId) => {
  const currentEnv = (process.env.NODE_ENV === 'production') ? 'PROD' : 'QA';

/*   if (currentEnv === 'PROD') {
    window.sendEvent({
      event: name,
      event_category: name,
      event_action: 'click',
      event_label: name,
      event_location: '/nl/nl/customer-service/support/',
      event_page: '/support/',
      entry_ID: entryId,
      ContentTypeID: id,
      environment: currentEnv,
      custom: {
        version: 123456,
      },
    });
  } */

  window.dataLayer.push({
    event: name,
    event_category: name,
    event_action: 'click',
    event_label: name,
    event_location: '/nl/nl/customer-service/support/',
    event_page: '/support/',
    entry_ID: entryId,
    ContentTypeID: id,
    environment: currentEnv,
    custom: {
      version: 123456,
    },
  });
};

export const gtmTopic = (topicId, gtmData, index) => {
  const event = gtmData[topicId];
  if (event) return gtmPush(event, topicId, index);
};

export const gtmContactCards = (id, contactType, data) => {
  const event = data[contactType];
  if (event) return gtmPush(event, id, id);
};

// Returns data based on the current environment prod/development
export const gtmActionsData = (data) => {
  const actionsList = (process.env.NODE_ENV === 'production') ? data.prod : data.dev;
  return actionsList;
};
