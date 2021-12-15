import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/home-page/HomePage';
import Contact from './pages/contact/Contact';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" component={HomePage}>
              <HomePage />
            </Route>
            {/*<Route exact path="/" component={Contact}>
              <Contact />
    </Route>*/}
          </Routes>
        </div>
      </Router>
    )
  };
};