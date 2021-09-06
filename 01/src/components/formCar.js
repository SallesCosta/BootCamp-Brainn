import { useState, useEffect } from "react"
//import {get, post, del} from './http'
// import { H2 } from "./titulos";



export default function FormCar({ abc }) {

    const [image, setImgValue] = useState('')
    const [brandModel, setModelValue] = useState('')
    const [year, setAnoValue] = useState('')  //controlado
    const [plate, setPlacaValue] = useState('')
    const [color, setCorValue] = useState('')


    console.log('imgValue: ', image)
    console.log('modelValue: ', brandModel)
    console.log('anoValue: ', year)
    console.log('placaValue: ', plate)
    console.log('corValue: ', color)



    function handleSubmit(e) {
         e.preventDefault()
        const elements = [
            setImgValue(e.target.elements.img.value),
            setModelValue(e.target.elements.model.value),
            setAnoValue(e.target.elements.ano.value),
            setPlacaValue(e.target.elements.placa.value),
            setCorValue(e.target.elements.cor.value),
        ];
        console.log('elements: ',elements)
        
        const data = {
            image,
            brandModel,
            year,
            plate,
            color,
        }
        console.log('data :', data)
    }

    useEffect(() => {

        const url = 'http://localhost:3333/cars'
        async function listarCadastrados() {
            const response = await fetch(url)
            const json = await response.json()

            json.forEach(car => {
                
            });
            console.log('lista de carros :', json)
        }
        listarCadastrados()
    })

    return <div className='d-flex card body'>
        <form onSubmit={handleSubmit} >
            <div>
                <label>Imagem</label>
                <input type='text' name='img' />
            </div>
            <div>
                <label>Marca Modelo</label>
                <input type='text' name='model' />
            </div>
            <div>
                <label>Ano</label>
                <input type='text' name='ano' />
            </div>
            <div>
                <label>Placa</label>
                <input type='text' name='placa' />
            </div>
            <div>
                <label>Cor</label>
                <input type='text' name='cor' />
            </div>
            <button type='submit' className='primary'>Cadastrar</button>
        </form>

        <table border="1" >
            <thead>
                <tr>
                    <th>Imagem</th>
                    <th>Marca / Modelo</th>
                    <th>Ano</th>
                    <th>Placa</th>
                    <th>Cor</th>
                    <th></th>
                </tr>
            </thead>
        </table>
    </div>
}