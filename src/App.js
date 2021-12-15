import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BrandPage from './pages/brandpage/BrandPage';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={BrandPage}>
              <BrandPage />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  };
};