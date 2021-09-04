import { H2 } from "./titulos";


export default function FormCar () {
    return <div className='d-flex card body'> 
    {/* <H2 text='testando'></H2> */}
    <form >
        <div>
            <label>Imagem</label>
            <input/>
        </div>
        <div>
            <label>Marca Modelo</label>
            <input/>
        </div>
        <div>
            <label>Ano</label>
            <input/>
        </div>
        <div>
            <label>Placa</label>
            <input/>
        </div>
        <div>
            <label>Cor</label>
            <input/>
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