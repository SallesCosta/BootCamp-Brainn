import { H3 } from './titulos'
import { useState, useEffect } from 'react'
import { Lista, Wrapper } from './lista'
import { post } from './http'
import { BtnPrimary } from './btn'
import { Input } from './titulos'
import styled from 'styled-components'

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

    return <>
        <Ajuste>
            <Form data={data} setData={setData} />
            <Lista data={data} setData={setData} />
        </Ajuste>
    </>
}

const Ajuste = styled.section`
display: table-row-group;
top: 7rem;
left: 10%;
width: 90%;
bottom: 3rem;
height: 100%-7rem;
background-color: rgba(209, 213, 219, 1);
text-align: center;
position: absolute;
`


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
                <H3 text='Cadastro de carros' />
                <label>Imagem</label>
                <Input type='text' name='imagem' placeholder='selecione um link' required />

                <br />
                <br />
                <label>Marca</label>
                <br />
                <Input type='text' name='marca' placeholder='marca da caranga' required />

                <br />
                <br />
                <label>Ano</label>
                <br />
                <Input type='text' name='ano' placeholder='ano' required />

                <br />
                <br />
                <label>Placa</label>
                <br />
                <Input type='text' name='placa' placeholder='Ex.: AAA-0000' required />

                <br />
                <br />
                <label>Cor</label>
                <br />
                <Input type='text' name='cor' placeholder='cor' required />

                <br />
                <br />
                <BtnPrimary type="submit" children='Cadastrar' />
            </form>
        </Wrapper>
    )
}


export default FormCar;