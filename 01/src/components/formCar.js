import { useState, useEffect } from 'react'
import Lista from './table'
import { post } from './http'

const url = 'http://localhost:3333/cars' 

function App() {
    const [data, setData] = useState([]);

    async function cadastrados() {
        const response = await fetch(url)
        const json = await response.json()
        setData(json)
    }

    useEffect(() => {
        cadastrados()
    }, [])

    return <>
            <Form data={data} cadastrados={cadastrados} />
            <Lista data={data} cadastrados={cadastrados}/>
        </>
}

function Form({ cadastrados }) {
    function handleSubmit(e) {
        e.preventDefault()

        const car = {
            image: e.target.elements.imagem.value,
            brandModel: e.target.elements.marca.value,
            year: e.target.elements.ano.value,
            plate: e.target.elements.placa.value,
            color: e.target.elements.cor.value,
        }

        post(url, car)
        cadastrados()
    }

    return (
        <div className='d-flex card body'>
                <form onSubmit={handleSubmit}>
                    <label>Url da Imagem:</label>
                    <input type="text" name="imagem"></input>

                    <label>Marca</label>
                    <input type="text" name="marca"></input>

                    <label>Ano</label>
                    <input type="number" name="ano"></input>

                    <label>Placa</label>
                    <input type="text" name="placa"></input>

                    <label>Cor</label>
                    <input type="text" name="cor"></input>

                    <button type="submit">Cadastrar</button>
                </form>
        </div>
    )
}

export default App;