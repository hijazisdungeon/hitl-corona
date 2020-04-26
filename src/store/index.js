import { createStore } from 'redux';
import { persistStore } from 'redux-persist';

import persistReducers from './persistor';
import { reducers } from './reducers';

const store = createStore(persistReducers(reducers));
const persistor = persistStore(store);

export { store, persistor };
