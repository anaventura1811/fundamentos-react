import React from 'react';

export default function ComParam(props) {
  const { situacao, aluno, nota } = props;
  const status = nota >= 7 ? 'Aprovado(a)' : 'Reprovado(a)'
  return (
    <div>
      <h2>{ situacao }</h2>
     <p> 
        <strong>{ aluno } </strong>
        tem nota 
        <strong> { nota } </strong>
        e foi <strong> { status }</strong>!
      </p>
    </div>
  )
}