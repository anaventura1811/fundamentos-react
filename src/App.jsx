import React from 'react';
import Primeiro from './components/Primeiro';
import ComParam from './components/ComParam';
import Aleatorio from './components/Aleatorio';

const tag = <strong>Olá!!!!</strong>;

export default function App(props) {
  return (
      <div className="App">
          <h1>Fundamentos React</h1>
          <Aleatorio 
            min={1} 
            max={60} 
          />
            { tag }
              <Primeiro />
              <ComParam 
                situacao="Situação do(a) aluno(a)"
                aluno="Ana" 
                nota={ 9.8 }
              />
        </div> 
  );
}
