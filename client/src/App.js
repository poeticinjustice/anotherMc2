import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Testing from './components/reports/Testing';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import Report from './components/reports/Report';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import MailchimpState from './context/mailchimp/MailchimpState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
  return (
    <MailchimpState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/report/:id' component={Report} />
                <Route exact path='/about' component={About} />
                <Route exact path='/testing' component={Testing} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </MailchimpState>
  );
};

export default App;
