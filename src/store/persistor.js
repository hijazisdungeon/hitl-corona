import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

function persistor({ config, ...reducers }) {
  return combineReducers({
    config: persistReducer(
      {
        keyPrefix: 'covidAgora:',
        key: 'config',
        storage,
      },
      config,
    ),
    ...reducers,
  });
}

export default persistor;
