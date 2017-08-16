import React, { Component } from 'react';
import  uploadResultContainer from './upload-result-container';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {css} from 'aphrodite';
import {styles} from '../styles/styles';

class App extends Component {

  render() {
    return (
      <div>
        <Route exact path="/" component={uploadResultContainer} />
      </div>
    );
  }
}

export default connect(
  (state) => ({ router: state.router }))(App);