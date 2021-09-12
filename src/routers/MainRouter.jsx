// Modules
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  ROUTE_HOME,
  ROUTE_GET_HELP,
  ROUTE_GET_SUPPORT,
  ROUTE_PLAYGROUND,
  ROUTE_ERROR_PAGE,
} from '../constants/routes';

import HomePage from '../pages/home/Home.jsx';
import GetHelpPage from '../pages/get-help/GetHelp.jsx';
import GetSupportPage from '../pages/get-support/GetSupport.jsx';
import PlayGround from '../pages/playGround/PlayGround.jsx';
import ErrorPage from '../pages/error/ErrorPage.jsx';

const MainRouter = () => (
       <Switch>
         <Route path={ROUTE_HOME} exact component={HomePage} />
         <Route path={ROUTE_GET_HELP} exact strict component={GetHelpPage} />
         <Route path={ROUTE_GET_SUPPORT} exact strict component={GetSupportPage} />
         <Route path={ROUTE_PLAYGROUND} exact strict component={PlayGround} />
         <Route path={ROUTE_ERROR_PAGE} exact strict component={ErrorPage} />
      </Switch>
);

export default MainRouter;
