import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import './index.less'
import { store } from './redux/configureStore'
import { Provider } from "react-redux";

const app = (
    // BrowserRouter : <Router> that uses the history API to keep the UI in sync with the URL
    <BrowserRouter>
        {/* Provider : The higher-order component provided by React Redux that binds Redux to React */}
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>

);

ReactDOM.render(app, document.getElementById('index'));