import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //Adiwiyata
import App2 from './App2'; //Modul List
import App3 from './App3'; //Praktikum List
import $ from 'jquery';
import Popper from 'popper.js';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    {<App2 />}
    
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
