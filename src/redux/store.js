import  { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    //если ты хочешь юзать посредника thunk то же должен обернгуть свой middlware функцимей 
    composeEnhancers(applyMiddleware(thunk)) //тут мы говорим что хотим использовать посредника
    // thunk
  );

  export default store;