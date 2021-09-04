import { H2 } from "./titulos";


export default function FormCar () {
    return <> 
    {/* <H2 text='testando'></H2> */}
    <form>
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


    </>
}