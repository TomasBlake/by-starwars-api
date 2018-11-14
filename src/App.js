import React, { Component } from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import {Route, Switch} from 'react-router-dom';
import PeoplePage from './containers/Pages/PeoplePage/PeoplePage';
import StarshipsPage from './containers/Pages/StarshipsPage/StarshipsPage';

class App extends Component {
  
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/people' component={PeoplePage} />
          <Route path='/starships' component={StarshipsPage} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
