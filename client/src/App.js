import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import Report from './components/reports/Report';

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import About from './components/pages/About';
import PrivateRoute from './components/routing/PrivateRoute';
import AuthState from './context/auth/AuthState';

import Test from './components/pages/Test';
import TestReport from './components/reports/TestReport';

import NotFound from './components/pages/NotFound';
import MailchimpState from './context/mailchimp/MailchimpState';
import AlertState from './context/alert/AlertState';
import './App.css';

import setAuthToken from './utils/setAuthToken';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <MailchimpState>
        <AlertState>
          <Router>
            <Fragment>
              <div className='App'>
                <Navbar />
                <div className='container'>
                  <Alert />
                  <Switch>
                    <PrivateRoute exact path='/' component={Home} />
                    <PrivateRoute exact path='/report/:id' component={Report} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/test' component={Test} />
                    <Route exact path='/testing/:id' component={TestReport} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' component={Login} />
                    <Route component={NotFound} />
                  </Switch>
                </div>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </MailchimpState>
    </AuthState>
  );
};

export default App;
