import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Favicon url="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1567961926/website/favicon.jpg" />
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);