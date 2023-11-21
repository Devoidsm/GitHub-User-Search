//imports used
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GitInformation } from './gitHubInfo/gitHubInfo.js';
//main index function
ReactDOM.render(
  <React.StrictMode>
    <GitInformation>
      <App />
    </GitInformation>
  </React.StrictMode>,
  document.getElementById('root')
);