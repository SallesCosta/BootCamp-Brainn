import { useState, useEffect } from "react"
import { get, post, del } from './http'
import CreateRow from "./row"
// import { H2 } from "./titulos";



export default function MyApp() {

    useEffect(() => {
        const url = 'http://localhost:3333/cars'
        async function listarCadastrados() {
            const response = await fetch(url)
            const json = await response.json()
            if (json.length === 0) { return console.log('array vazio no db') }
            console.log('lista de carros no db :', json)
        }
        listarCadastrados()
    }, []);

    return (<FormCar />)

    function FormCar() {

        const [image, setImgValue] = useState('')
        const [brandModel, setModelValue] = useState('')
        const [year, setAnoValue] = useState('')  //controlado
        const [plate, setPlacaValue] = useState('')
        const [color, setCorValue] = useState('')


        function handleSubmit(e) {
            e.preventDefault()
            const elements = [
                setImgValue(e.target.elements.img.value),
                setModelValue(e.target.elements.model.value),
                setAnoValue(e.target.elements.ano.value),
                setPlacaValue(e.target.elements.placa.value),
                setCorValue(e.target.elements.cor.value),
            ];
            //console.log('elements: ',elements)

        }
        const arrayDaEntrada = {
            image,
            brandModel,
            year,
            plate,
            color,
    }


        // post(data)
        // console.log('data :', data)


        return <div className='d-flex card body'>
            <form onSubmit={handleSubmit} >
                <div>
                    <label>Imagem</label>
                    <input type='text' name='img' placeholder='coloque uma foto'/>
                </div>
                <div>
                    <label>Marca Modelo</label>
                    <input type='text' name='model' placeholder='qual o modelo?'/>
                </div>
                <div>
                    <label>Ano</label>
                    <input type='text' name='ano' placeholder='de que ano?'/>
                </div>
                <div>
                    <label>Placa</label>
                    <input type='text' name='placa' placeholder='placa'/>
                </div>
                <div>
                    <label>Cor</label>
                    <input type='text' name='cor' placeholder='qual a cor?'/>
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
                        <th>deletar</th>
                    </tr>
                </thead>
                <tbody>
                    <CreateRow arrayDaEntrada={arrayDaEntrada} />
                </tbody>
            </table>
        </div>
    }
}