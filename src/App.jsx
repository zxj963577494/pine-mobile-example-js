import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';

import TopicPage from '@/pages/topics';
import CommentPage from '@/pages/comments';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={TopicPage} exact />
      <Route exact path="/topics" component={TopicPage} />
      <Route exact path="/comments/:id" component={CommentPage} />
    </Switch>
  </Router>
);

export default App;
