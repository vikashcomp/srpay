import {createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreMiddleware = composeEnhancers(applyMiddleware(thunk))(createStore)
const store = createStoreMiddleware(rootReducer)


export default store;

// store.js
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './rootReducer'; // Import your root reducer

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );

// export default store;
