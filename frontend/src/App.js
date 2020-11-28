import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './components/aboutUs';
import HomePage from './components/homepage';
import Dashboard from './components/dashboard';
import PersonForm from './components/personForm';
import loginService from './services/login';
import LoginForm from './components/loginForm';
import Navbar from './components/navbar';
import SignUpForm from './components/signUpForm';
import RatingPage from './components/rating';
import ProfilePage from './components/profilePage';
import SettingsPage from './components/settingPage';
import Loading from './components/loading';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const App = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorSnackOpen, setErrorSnackOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
    setUser(JSON.parse(window.localStorage.getItem('userLoggedIn')));
  }, []);

  const handleLogin = async event => {
    event.preventDefault();
    try {
      const User = await loginService.login({
        userName: username,
        password,
      });
      console.log(User);
      setUser(User);
      window.localStorage.setItem('userLoggedIn', JSON.stringify(User));
      setUsername('');
      setPassword('');
    } catch (exception) {
      setErrorSnackOpen(true);
      setUsername('');
      setPassword('');
    }
  };

  const handleUsernameChange = event => {
    event.preventDefault();
    setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleErrorSnackClose = e => {
    setErrorSnackOpen(false);
  };
  return (
    <div>
      {loading === true ? (
        <div style={{ display: 'flex' }}>
          <Loading />
        </div>
      ) : (
        <Router>
          {user ? <Navbar setUser={setUser} user={user} /> : null}
          <Switch>
            <Route path="/rate">
              {!user ? (
                <LoginForm
                  handleLogin={handleLogin}
                  handleUsernameChange={handleUsernameChange}
                  username={username}
                  password={password}
                  handlePasswordChange={handlePasswordChange}
                />
              ) : (
                <RatingPage />
              )}
            </Route>
            <Route path="/settings">
              {!user ? (
                <LoginForm
                  handleLogin={handleLogin}
                  handleUsernameChange={handleUsernameChange}
                  username={username}
                  password={password}
                  handlePasswordChange={handlePasswordChange}
                />
              ) : (
                <SettingsPage />
              )}
            </Route>
            <Route path="/profile">
              {!user ? (
                <LoginForm
                  handleLogin={handleLogin}
                  handleUsernameChange={handleUsernameChange}
                  username={username}
                  password={password}
                  handlePasswordChange={handlePasswordChange}
                />
              ) : (
                <ProfilePage user={user} />
              )}
            </Route>
            <Route path="/about">
              {!user ? (
                <LoginForm
                  handleLogin={handleLogin}
                  handleUsernameChange={handleUsernameChange}
                  username={username}
                  password={password}
                  handlePasswordChange={handlePasswordChange}
                />
              ) : (
                <AboutUs />
              )}{' '}
            </Route>
            <Route path="/you">
              {!user ? (
                <LoginForm
                  handleLogin={handleLogin}
                  handleUsernameChange={handleUsernameChange}
                  username={username}
                  password={password}
                  handlePasswordChange={handlePasswordChange}
                />
              ) : (
                <PersonForm />
              )}
            </Route>
            <Route path="/signup">
              <SignUpForm />
            </Route>
            <Route path="/home">
              {!user ? (
                <LoginForm
                  handleLogin={handleLogin}
                  handleUsernameChange={handleUsernameChange}
                  username={username}
                  password={password}
                  handlePasswordChange={handlePasswordChange}
                />
              ) : (
                <HomePage />
              )}
            </Route>
            <Route path="/dashboard">
              {!user ? (
                <LoginForm
                  handleLogin={handleLogin}
                  handleUsernameChange={handleUsernameChange}
                  username={username}
                  password={password}
                  handlePasswordChange={handlePasswordChange}
                />
              ) : (
                <Dashboard user={user} />
              )}
            </Route>
            <Route path="/">
              {!user ? (
                <LoginForm
                  handleLogin={handleLogin}
                  handleUsernameChange={handleUsernameChange}
                  username={username}
                  password={password}
                  handlePasswordChange={handlePasswordChange}
                />
              ) : (
                <HomePage />
              )}
            </Route>
          </Switch>
        </Router>
      )}
      <Snackbar
        open={errorSnackOpen}
        autoHideDuration={1500}
        onClose={handleErrorSnackClose}
      >
        <Alert severity="error" variant="filled">
          Wrong Username or Password!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default App;
