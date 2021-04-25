import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react'
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk';
import Questionnaire from './components/Questionnaire';
import rootReducer from './reducers/index';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
  
const store = createStore(
  persistedReducer,
  applyMiddleware(thunk)
);

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Questionnaire />
    </PersistGate>  
  </Provider>,
  document.getElementById('root')
);
