import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from "react-router-dom";
import "./index.css"
import NavBar from './NavBar';


ReactDOM.render(
  <BrowserRouter>
    <NavBar/>
    <App/>
  </BrowserRouter>
  , document.getElementById('root')
);

