import React from 'react';
import ReactDOM from "react-dom";

import App from "./components/App";

import { createStore } from 'redux';
import reducers from './reducers';  // index 파일을 불러오기 때문에 /index.js 생략 가능

import { Provider } from 'react-redux';


const store = createStore(reducers);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
