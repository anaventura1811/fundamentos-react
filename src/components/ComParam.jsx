import React from 'react';

export default function ComParam(props) {
  const { situacao, aluno, nota } = props;
  const status = nota >= 7 ? 'Aprovado(a)' : 'Reprovado(a)';
  const notaArredonda = Math.ceil(nota); 
  // Podemos fazer processamentos de dados antes do componente, 
  // mas não diretamente sobre as propriedades
  // É necessário criar outra variável para
  // utilizar métodos JS, as propriedades/props são 'read-only'
  return (
    <div>
      <h2>{ situacao }</h2>
     <p> 
        <strong>{ aluno } </strong>
        tem nota 
        <strong> { notaArredonda } </strong>
        e foi <strong> { status }</strong>!
      </p>
    </div>
  )
}