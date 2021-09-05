// import { H2 } from "./titulos";
//import { useState } from "react";

export default function FormCar({ abc }) {
    // const [imgValue, setImgValue] = useState('foto do carro') 
    // console.log('imgValue: ', imgValue)

    // const [modelValue, setModelValue] = useState('modelo novo') 
    // console.log('modelValue: ', modelValue)

    // const [anoValue, setAnoValue] = useState('2021')  //controlado
    // console.log('anoValue: ', anoValue)

    // const [placaValue, setPlacaValue] = useState('abc-9393') 
    // console.log('placaValue: ', placaValue)

    // const [corValue, setCorvalue] = useState('prata') 
    // console.log('corValue: ', corValue)

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e.target.elements.img.value)
        console.log(e.target.elements.model.value)
        console.log(e.target.elements.ano.value)
        console.log(e.target.elements.placa.value)
        console.log(e.target.elements.cor.value)
    }


    return <div className='d-flex card body'>
        <form onSubmit={handleSubmit} >
            <div>
                <label>Imagem</label>
                <input type='text' name='img' value='foto do carro'/>
            </div>
            <div>
                <label>Marca Modelo</label>
                <input type='text' name='model' value='carroNOvo'/>
            </div>
            <div>
                <label>Ano</label>
                <input type='text' name='ano' value='2021'/>
            </div>
            <div>
                <label>Placa</label>
                <input type='text' name='placa' value='abc-0000'/>
            </div>
            <div>
                <label>Cor</label>
                <input type='text' name='cor' value='prata'/>
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

            <tbody data-js="table">
            </tbody>
        </table>


    </div>
}