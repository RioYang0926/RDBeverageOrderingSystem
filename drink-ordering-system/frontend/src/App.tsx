import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import Menu from './components/Menu';
import Order from './components/Order';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/menu" component={Menu} />
        <Route path="/order" component={Order} />
        <Route path="/" exact>
          <h1>Welcome to the Drink Ordering System</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;