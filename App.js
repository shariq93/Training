import { StatusBar } from 'expo-status-bar';
import { Component, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Home from './src/screen/Home';
import { Provider } from 'react-redux';
import { configureStore } from './src/redux/store/RootStore';




export default function App() {



const store = configureStore()

  return <Provider store={store}>
    <Home />
  </Provider>
}


