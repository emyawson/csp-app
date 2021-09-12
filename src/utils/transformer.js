const recommendationTransformer = (data) => {
  const {
    id, headline, body, image, callToActionText, callToActionUrl,
  } = data;
  return {
    id,
    headline: headline || null,
    body,
    image: image || null,
    callToActionText: callToActionText || null,
    callToActionUrl: callToActionUrl || null,
  };
};

const contactMethodsTransformer = (contactMethods) => contactMethods.map((contact) => {
  const {
    id, headline, body, type, image, callToActionText,
    disclaimer, phoneNumber, openingHours, recommendation, callToActionUrl,
  } = contact;
  return {
    id,
    titleContact: headline || null,
    bodyContact: body,
    type: type || null,
    image: image || null,
    buttonLabel: callToActionText || null,
    disclaimer: disclaimer || null,
    phoneNumber: phoneNumber || null,
    standardHours: openingHours && openingHours.standardHours ? openingHours.standardHours : null,
    holidayHours: openingHours && openingHours.holidayHours ? openingHours.holidayHours : null,
    recommendation: recommendation ? recommendationTransformer(recommendation) : null,
    callToActionUrl: callToActionUrl || null,
  };
})
  .filter((contact) => contact !== null);

const topicsTransformer = (topics) => topics.map((topic) => {
  const {
    id, headline, body, contactMethods, recommendation, topicHeadline, topicBody,
  } = topic;
  return {
    id,
    headline,
    body: body || null,
    recommendation: recommendation ? recommendationTransformer(recommendation) : null,
    contactMethods: contactMethods ? contactMethodsTransformer(contactMethods) : [],
    topicHeadline: topicHeadline || null,
    topicBody: topicBody || null,
  };
})
  .filter((topic) => topic !== null);

const firstLevelTopics = (mainTopics) => mainTopics.map((topic) => {
  const {
    id, headline, body, topics, topicHeadline, topicBody, recommendation,
  } = topic;
  return {
    id,
    headline,
    body: body || null,
    recommendation: recommendation ? recommendationTransformer(recommendation) : null,
    topicHeadline: topicHeadline || null,
    topicBody: topicBody || null,
    topics: topics ? topicsTransformer(topics) : [],

  };
})
  .filter((topic) => topic !== null);

const transformerData = (data) => {
  const {
    id, headline, body, topicHeadline, topicBody, topics, metaDescription, metaTitle,
  } = data;
  return {
    id,
    headline: headline || null,
    body: body || null,
    topics: topics ? firstLevelTopics(topics) : [],
    topicHeadline: topicHeadline || null,
    topicBody: topicBody || null,
    metaTitle: metaTitle || null,
    metaDescription: metaDescription || null,
  };
};

export default transformerData;
