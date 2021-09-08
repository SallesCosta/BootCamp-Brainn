import { useState, useEffect } from 'react'
import Lista from './table'
import { post } from './http'

const url = 'http://localhost:3333/cars'

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((response) => {
                setData([...response])
            })
    }, [])

    return <>
        <Form data={data} cadastrados={setData} />
        <Lista data={data} cadastrados={setData} />
    </>
}

function Form({ setData }) {
    function handleSubmit(e) {
        e.preventDefault()

        const car = {
            image: e.target.elements.imagem.value,
            brandModel: e.target.elements.marca.value,
            year: e.target.elements.ano.value,
            plate: e.target.elements.placa.value,
            color: e.target.elements.cor.value,
        }
        fetch(url, {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                image: car.image,
                brandModel: car.brandModel,
                year: car.year,
                plate: car.plate,
                color: car.color
            })
        })
            .then(response => response.json())
            .then((response) => {
                if (response.error) {
                    return console.log(response.error)
                }
                setData((prevState) => {
                    return [
                        ...prevState, {
                            image: car.image,
                            brandModel: car.brandModel,
                            year: Number(car.year),
                            plate: car.plate,
                            color: car.color
                        }
                    ]
                })
            })
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