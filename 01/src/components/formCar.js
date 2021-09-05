import { H2 } from "./titulos";
import { useState } from "react";
import reactDom from "react-dom";

export default function FormCar({ abc }) {
    const [imgValue, setImgValue] = useState('')
    // console.log('imgValue: ', imgValue)

    const [modelValue, setModelValue] = useState('')
    // console.log('modelValue: ', modelValue)

    const [anoValue, setAnoValue] = useState('')  //controlado
    // console.log('anoValue: ', anoValue)

    const [placaValue, setPlacaValue] = useState('')
    // console.log('placaValue: ', placaValue)

    const [corValue, setCorValue] = useState('')
    // console.log('corValue: ', corValue)

    function handleSubmit(e) {
        e.preventDefault()
        setImgValue(e.target.elements.img.value)
        setModelValue(e.target.elements.model.value)
        setAnoValue(e.target.elements.ano.value)
        setPlacaValue(e.target.elements.placa.value)
        setCorValue(e.target.elements.cor.value)
    }


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