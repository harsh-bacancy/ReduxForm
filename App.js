/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
// import {  } from 'react-native';
import { Provider } from 'react-redux'
import store from './src/redux/store'
import ContactForm from './src/screens/ContactForm'

// const handleInput = () => {
//   alert(`Submitted`)
// }
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ContactForm />
      </Provider>
    );
  }
}

