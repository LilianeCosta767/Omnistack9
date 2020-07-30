import React from 'react';
import './App.css';

import logo from './assets/logo.svg';

import Routes from './routes';

function App() {
  return (
   <div className="container">
     <img id="logo" src={ logo } alt="AirCnc"/>
     <div className="content">
      <Routes />
     </div>
   </div>
  );
}

export default App;

// OBSERVAÇÕES
// no onSubmit pegamos uma função
// sempre que usamos javascript no html usamos as {}
// no react temos o estado, que é qualquer tipo de informação que vamos armazenada num componente
// useState serve para criação de novos estados, que retorna um vetor com duas posições
// event.target.value possui o que está dentro do input
// localStorage é um banco de dados do navegador