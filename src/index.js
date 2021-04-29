import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Primeiro from './components/Primeiro'
// import App from './App';
// import reportWebVitals from './reportWebVitals';
const tag = <strong>Olá!!!!</strong>;

ReactDOM.render(
  <div>
    { tag }
    <Primeiro />
  </div>,
  document.getElementById('root')
);

