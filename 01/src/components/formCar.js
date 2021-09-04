import { H2 } from "./titulos";
import { useState } from "react";

export default function FormCar () {
    const [imgValue, setImgValue] = useState('') 
    console.log('imgValue: ', imgValue)
    
    const [modelValue, setModelValue] = useState('') 
    console.log('modelValue: ', modelValue)
    
    const [anoValue, setAnoValue] = useState('') 
    console.log('anoValue: ', anoValue)
    
    const [placaValue, setPlacaValue] = useState('') 
    console.log('placaValue: ', placaValue)
    
    const [corValue, setCorvalue] = useState('') 
    console.log('corValue: ', corValue)

    function handleChange (e) {

    }
    

    return <div className='d-flex card body'> 
    {/* <H2 text='testando'></H2> */}
    <form >
        <div>
            <label>Imagem</label>
            <input value={imgValue} onChange={handleChange}/>
        </div>
        <div>
            <label>Marca Modelo</label>
            <input value={modelValue} onChange={handleChange}/>
        </div>
        <div>
            <label>Ano</label>
            <input value={anoValue} onChange={handleChange}/>
        </div>
        <div>
            <label>Placa</label>
            <input value={placaValue} onChange={handleChange}/>
        </div>
        <div>
            <label>Cor</label>
            <input value={corValue} onChange={handleChange}/>
        </div>
        <button className='primary'>Cadastrar</button>            
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