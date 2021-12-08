import React, { Component, Fragment } from 'react';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Home from './components/Home';

class App extends Component {
  render() {
    return <Fragment>
      <AppHeader />
      <Home />
      <AppFooter />
    </Fragment>;
  }
}
export default App;