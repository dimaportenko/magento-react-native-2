import { createStore, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import FilesystemStorage from 'redux-persist-filesystem-storage';

import rootReducer from '../reducers'; // the value from combineReducers


const persistConfig = {
  key: 'root',
  storage: FilesystemStorage,
  stateReconciler: autoMergeLevel2,
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Reducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  Reducer,
  composeEnhancer(),
);

export const persistor = persistStore(store, null);

persistor.purge();
