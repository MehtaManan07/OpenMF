import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage'
import Alert from './components/core/Alert'

import store from './store/store';

function App() {
  return (
    <Provider store={store}>
    <ToastContainer autoClose={3000} position="bottom-center" />
      <div className="containerBI">
        <Alert />
        <Switch>
          <Route path="/login" exact component={LoginPage} />
          <Route path='/' exact component={HomePage} />
          <Route path='/about' exact component={AboutPage} />
          <Route path='/contact' exact component={ContactPage} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
