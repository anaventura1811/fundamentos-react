import React from 'react';

export default function Aleatorio(props) {
  const { min, max } = props;
  const num = Math.round(Math.random() * (max - min) + min);

  return (
    <>
      <h2>Valor Aleatório</h2>
      <p>Valor Mínimo: { min }</p>
      <p>Valor Máximo: { max }</p>
      <p>Valor aleatório: { num }</p>
    </>
  );
}

// Source: http://devfuria.com.br/javascript/numeros-aleatorios/