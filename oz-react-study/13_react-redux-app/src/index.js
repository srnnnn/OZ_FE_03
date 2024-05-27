import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers';
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import { loggerMiddleware } from './middleware';
import {thunk} from 'redux-thunk'

const root = ReactDOM.createRoot(document.getElementById('root'));


const middleware = applyMiddleware(thunk,loggerMiddleware);

//redux store 
const store = createStore(rootReducer, middleware);


root.render( //react redux provider로 감싸주기
  <React.StrictMode>
    <Provider store={store}>
    <App 
    // onIncrement={() => store.dispatch({type:'INCREMENT'})}
    // onDecrement={() => store.dispatch({type:'DECREMENT'})}
    />
    </Provider>
  </React.StrictMode>
);
// render(); //provider로 대체될예정,,.그냥 이런게 있다..
// store.subscribe(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
