import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import history from '../helpers/history';

import DiscoverPage from '../containers/DiscoverPage';
import DonePage from '../containers/DonePage';
import Footer from './Footer';
import MediaDetailsPage from '../containers/MediaDetailsPage';
import NavContainer from '../containers/NavContainer';
import RelatedPage from '../containers/RelatedPage';
import TodoPage from '../containers/TodoPage';

const App = () => (
  <Container style={{ marginTop: '1em', marginBottom: '2em' }}>
    <Router history={history}>
      <div>
        <NavContainer />
        <Switch>
          <Route path="/" exact component={TodoPage} />
          <Route path="/done" component={DonePage} />
          <Route path="/discover" exact component={DiscoverPage} />
          <Route path="/discover/related/:category/:id" exact component={RelatedPage} />
          <Route path="/view/:category/:id" component={MediaDetailsPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  </Container>
);

export default App;
