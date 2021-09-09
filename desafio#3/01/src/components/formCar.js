import { useState, useEffect } from 'react'
import Lista from './lista'
import { post } from './http'

const url = 'http://localhost:3333/cars'

function FormCar() {
    const [data, setData] = useState('');

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((response) => {
                setData([...response])
            })
        console.log('console limpinho.. nadinha')
    }, [])

    return <><div className=''>

        <Form data={data} setData={setData} />
        <Lista data={data} setData={setData} />
    </div>
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
        post(url, car)
            .then((response) => {
                if (response.error) {
                    return console.log('invalid Operation - Placa já existente')
                }

                function attState() {
                    setData((e) => {
                        return [
                            ...e, {
                                image: car.image,
                                brandModel: car.brandModel,
                                year: Number(car.year),
                                plate: car.plate,
                                color: car.color
                            }
                        ]
                    })
                }
                attState()
            })
        console.log('cadastrou a placa: ', car.plate)
    }

    return (
        <div className='card'>
            <form onSubmit={handleSubmit}>
                <label>Url da Imagem:</label>
                <input type="text" name="imagem"></input>

                <br />
                <label>Marca</label>
                <input type="text" name="marca"></input>

                <br />
                <label>Ano</label>
                <input type="number" name="ano"></input>

                <br />
                <label>Placa</label>
                <input type="text" name="placa"></input>

                <br />
                <label>Cor</label>
                <input type="text" name="cor"></input>

                <br />
                <button type="submit" className='primary'>Cadastrar</button>
            </form>
        </div>
    )
}

export default FormCar;