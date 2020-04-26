import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers/rootReducer';

const persistedReducer = persistReducer(
  { keyPrefix: 'covidAgora', key: 'config', storage },
  rootReducer,
);
const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };
