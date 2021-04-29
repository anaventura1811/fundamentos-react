import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Primeiro from './components/Primeiro';
import ComParam from './components/ComParam';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
const tag = <strong>Olá!!!!</strong>;

ReactDOM.render(
  <div>
    { tag }
    <Primeiro />
    <ComParam 
      situacao="Situação do(a) aluno(a)"
      aluno="Ana" 
      nota={ 9.8 }
    />
  </div>,
  document.getElementById('root')
);

