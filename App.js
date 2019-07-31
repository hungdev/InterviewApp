import React, { Component } from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';
//Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './src/reducers'

import AppContainer from './src/appNavigation/AppContainer'
import { REHYDRATE, PURGE, persistCombineReducers, persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // or whatever storage you are using
import { PersistGate } from 'redux-persist/es/integration/react';

const persistConfig = {
  key: 'root',
  storage,
  //sẽ persist
  // whitelist: [                    
  //   'accountReducer'
  // ],
  //ko persist
  blacklist: [
    // 'late'
  ]
}

// let reducer = persistCombineReducers(config, allReducers)
const persistedReducer = persistReducer(persistConfig, allReducers)

let store = createStore(persistedReducer);
let persistor = persistStore(store)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
}