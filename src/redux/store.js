import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authSlice from './AuthSlice';
import userSlice from './UserSlice';

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'hackathon_project',
  version: 1,
  storage,
};

const combinedStorage = combineReducers({
  Auth: authSlice,
  User: userSlice,
});

const persistedReducer = persistReducer(persistConfig, combinedStorage);
const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(Store);
export { Store };
