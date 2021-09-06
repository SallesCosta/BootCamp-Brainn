import { useState, useEffect } from "react";
// import { H2 } from "./titulos";
// import { json } from "body-parser";


export default function FormCar({ abc }) {

    const [imgValue, setImgValue] = useState('')
    const [modelValue, setModelValue] = useState('')
    const [anoValue, setAnoValue] = useState('')  //controlado
    const [placaValue, setPlacaValue] = useState('')
    const [corValue, setCorValue] = useState('')


    console.log('imgValue: ', imgValue)
    console.log('modelValue: ', modelValue)
    console.log('anoValue: ', anoValue)
    console.log('placaValue: ', placaValue)
    console.log('corValue: ', corValue)



    function handleSubmit(e) {
        e.preventDefault()
        setImgValue(e.target.elements.img.value)
        setModelValue(e.target.elements.model.value)
        setAnoValue(e.target.elements.ano.value)
        setPlacaValue(e.target.elements.placa.value)
        setCorValue(e.target.elements.cor.value)
    }



    const url = 'http://localhost/3333'
    fetch(url)
        .then(result => result.json)
        .then(result => console.log(result))




    useEffect(() => {

        async function listarCadastrados() {
            const response = await fetch(url)
            const json = await response.json()
            console.log('lista de carros :', json)
        }
        json.array.forEach(element => {

        });
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