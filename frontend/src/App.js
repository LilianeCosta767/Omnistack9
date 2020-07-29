import React, { useState } from 'react';
import api from './service/api';
import './App.css';

import logo from './assets/logo.svg';

function App() {
  const [email, setEmail] = useState(''); // o campo email vai receber o que tá em useState('') em tempo real, setEmail serve para atualizar o valor da variavel email

  function handleSubmit(event) {
    event.preventDefault();

    console.log(email);
  }

  return (
   <div className="container">
     <img id="logo" src={ logo } alt="AirCnc"/>
     <div className="content">
       <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa</p>

       <form onSubmit={handleSubmit}>
         <label htmlFor="email">E-MAIL *</label>
         <input 
            type="email" 
            id="email" 
            placeholder="Seu melhor email"
            value={email}
            onChange={event => setEmail(event.target.value)}
         />

         <button className="btn" type="submit">Entrar</button>
       </form>
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