import React, {useState, useMemo} from 'react';

import camera from '../../assets/camera.svg';

import './styles.css'

export default function New() {
    const [thumbnail, setThumbnail] = useState(null);
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');

    // sempre que a thumbnail for atualizada cria-se um preview da imagem dela
    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail]) // array de quando ele deve executar

    function handleSubmit() {

    }

    return(
        <form onSubmit={handleSubmit}>
            <label id="thumbnail" style={{ backgroundImage: `url(${preview})` }} >
                <input type="file" onChange={event => setThumbnail(event.target.files[0])} /> 
                <img id="cam-icon" src={camera} alt="Select img" />
            </label>

            <label htmlFor="company">EMPRESA *</label>
            <input
                id="company"
                placeholder="Sua empresa inccrível"
                value={company}
                onChange={event => setCompany(event.target.value)}
            />

            <label htmlFor="techs">TECNOLOGIA * <span>(separadas por vírgula)</span></label>
            <input
                id="techs"
                placeholder="Quais tecnologias usam?"
                value={techs}
                onChange={event => setTechs(event.target.value)}
            />

            <label htmlFor="price">VALOR DA DIÁRIA * <span>(em branco para GRATUITO)</span></label>
            <input
                id="price"
                placeholder="Valor cobrado por dia"
                value={price}
                onChange={event => setPrice(event.target.value)}
            />

            <button type="submit" className="btn">Cadastrar</button>
        </form>
    )
}

// OBSERVAÇÕES
// através do <input type="file"/>  que conseguiremos o upload
// a variavel mutiple permite que o usuario selecione mais de um arquivo
// sempre que alteramos um estado do react o programa executa a função novamente tudo do zero
// createObjectURL cria uma URL para uma variavel temporaria