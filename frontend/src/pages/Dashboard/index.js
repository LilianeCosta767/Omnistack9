import React, { useEffect, useState } from 'react';
import api from '../../service/api';

export default function Dashboard() {
    const [spots, setSpots] = useState([]); // array vazio pq receberei um array dentro dessa variavel 

    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user'); // pegando o id do usuario
            const response = await api.get('/dashboard', {
                headers: { user_id }
            }); // pego somente os dashboards apenas do usuario logado

           setSpots(response.data);
        }

        loadSpots();
    }, []);

    return (
        <>
            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot._id}>
                        <header />
                        <strong>{spot.company}</strong>
                        <span>{spot.price}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}

// OBSERVAÇÕES 
// useEffect recebe dois parametros: uma função e um array de dependencias (passa o filtro da listagem e toda vez que esse array for alterado a função será executada novamente, se a gente passa esse array vazio a função só será executada uma única vez)