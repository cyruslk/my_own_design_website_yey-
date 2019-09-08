import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Favicon from 'react-favicon';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
  <Favicon url="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1567962112/proccess/favicon.jpg" />
  <App />
  </div>, document.getElementById('root'));
registerServiceWorker();
