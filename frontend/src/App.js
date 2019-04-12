import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Search from './Components/home/search';
import Explore from './Pages/Explore';

// import redux things
import { Provider } from 'react-redux';
import store from './store';

// import testing components
import Register from './Components/register/register'
import Login from './Components/login/login'
import Dashboard from './Components/dashboard/dashboard'
import PrivateRoute from './Components/private-route/privateRoute';

// authen
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Search}/>
            <Route path="/explore" component={Explore}/>
          </Switch>

          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />

          <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>

        </Router>
      </Provider>
    );
  }
}

export default App;
