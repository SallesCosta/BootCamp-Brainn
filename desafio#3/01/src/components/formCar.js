import { useState, useEffect } from 'react'
import {Lista, Wrapper} from './lista'
import { post } from './http'
import { BtnPrimary } from './btn'
import { Input } from './titulos'

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
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <label>Url da Imagem:</label>
                <Input type='text' name='imagem' placeholder='selecione um link' required/>

                <br />
                <label>Marca</label>
                <Input type='text' name='marca' placeholder='marca da caranga' required/>

                <br />
                <label>Ano</label>
                <Input type='text' name='ano' placeholder='ano' required/>

                <br />
                <label>Placa</label>
                <Input type='text' name='placa' placeholder='Ex.: AAA-0000' required/>

                <br />
                <label>Cor</label>
                <Input type='text' name='cor' placeholder='cor' required/>

                <br />
                <BtnPrimary type="submit" children='Cadastrar' />
            </form>
        </Wrapper>
    )
}

export default FormCar;