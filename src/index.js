import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import './assets/css/bootstrap.min.css'
import './assets/css/react-bootstrap-table2.min.css'
import { Provider } from "react-redux";

const app = (

    <BrowserRouter>
        <App />
    </BrowserRouter>

);

ReactDOM.render(app, document.getElementById('index'));