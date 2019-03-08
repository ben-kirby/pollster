import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';
import NewPoll from './NewPoll';
import Poll from './Poll'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/New' component={NewPoll} />
      <Route path='/*' component={Poll} />
    </Switch>  );
}

export default App;