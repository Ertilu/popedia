import React, { Component } from 'react';
import { StyleProvider } from "native-base";
import { Provider } from "react-redux";
import Router from "./router";
import { store } from './redux/store';


export default class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}