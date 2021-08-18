import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/Assets/fonts/GOTHAM-BLACK.OTF';
import '../src/Assets/fonts/GOTHAM-BOLD.OTF';
import '../src/Assets/fonts/GOTHAM-MEDIUM.OTF';
import 'antd/dist/antd.css';
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
