import React, { useState } from 'react';
import api from '../../service/api';

export default function Login({ history }) {
    const [email, setEmail] = useState(''); // o campo email vai receber o que tá em useState('') em tempo real, setEmail serve para atualizar o valor da variavel email

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await api.post('/sessions', { email });

        const { _id } = response.data; // pega o id do usuario que entrou na aplicação

        localStorage.setItem('user', _id); // armazena o id pra que fique disponivel em toda a aplicação 

        history.push('/dashboard');
    }


    return (
        <>
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
        </>
    )
}

// OBSERVAÇÕES
// o react permte criar tags vazias, chamado de fragment
// o history é usado para fazer navegação