import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Main from './Main';
import NewPoll from './NewPoll';
import Poll from './Poll';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/New' component={NewPoll} />
        <Route path='/*' component={Poll} />
      </Switch>);
  }
}

export default withRouter(connect()(App));
