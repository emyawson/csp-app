/* eslint-disable react/prop-types */
// Modules
import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Layout from '../../components/layout/Layout.jsx';
import Headline from '../../components/headline/Headline.jsx';
import LoadingWrapper from '../../components/loading/LoadingWrapper.jsx';
import BCrumb from '../../components/Bcrumb/BCrumb.jsx';
import Faq from '../../components/faq/Faq.jsx';
import { ROUTE_ERROR_PAGE } from '../../constants/routes';
import TopicsBlock from './TopicsBlock.jsx';

// Selectors
import { selectPages, selectLoadingPages } from '../../store/selectors';

// styles
import './Home.scss';

// eslint-disable-next-line no-unused-vars
const Home = ({ history }) => {
  // Selectors
  const pages = useSelector(selectPages);
  const loadingPages = useSelector(selectLoadingPages);

  const HeadlineLoader = LoadingWrapper(Headline);

  const [homePage, setHomePage] = useState({});
  const [homePageTopics, setHomePageTopics] = useState([]);

  useEffect(() => {
    if (pages) {
      setHomePage(pages);
    }
    if (homePage) {
      setHomePageTopics(homePage.topics);
    }
    if (pages.error !== null) {
      history.push(ROUTE_ERROR_PAGE);
    }
  }, [pages, homePage]);

  return (
    <Layout>
      <BCrumb />
      <Fragment>
        {homePage && <HeadlineLoader
          isLoading={loadingPages}
          title={homePage.headline}
          description={homePage.body}
          loadingMarginTop="60px"
          loadingWidth="505px"
          loadingHeight="106px"
        />}
        <div className="topic-wrapper">
          {homePageTopics && <TopicsBlock homeTopics={homePageTopics} loading={loadingPages} />}
        </div>
        
        <Faq />

      </Fragment>

    </Layout>
  );
};

export default withRouter(Home);
