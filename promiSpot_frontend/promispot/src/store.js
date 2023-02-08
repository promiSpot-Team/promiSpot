import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import storageSession from 'redux-persist/lib/storage/session'
import user from './reducer/user'

const persistConfig = {
  key: 'root',
  version: 1,
  storage
  // storage: storageSession,
} 

const rootReducer = combineReducers({
  user
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer, 
  composeWithDevTools()
)

export default store;