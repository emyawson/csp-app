// Modules
import React from 'react';
import { withRouter, BrowserRouter } from 'react-router-dom';

import TagManager from 'react-gtm-module';
import ScrollToTop from './components/scrollToTop/ScrollToTop.jsx';
import Routes from './routers/MainRouter.jsx';
// import MetaTags from './utils/MetaTags';

const tagManagerArgs = {
  gtmId: 'GTM-KQG8LR8',
};
TagManager.initialize(tagManagerArgs);

const App = () => (
    <div className="app">
      <BrowserRouter>
         <ScrollToTop />
         <Routes />
      </BrowserRouter>
    </div>
);

export default withRouter(App);
