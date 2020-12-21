import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from '../common/reducers/root.reducer';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export default createStore(rootReducer, composeEnhancers(applyMiddleware()));
