import CreateRow from './row'
import { del } from './http'

const url = 'http://localhost:3333/cars' 

function Lista({ data, cadastrados}) {
    function handleDelete(e) {
        e.preventDefault()
        const car = data.find((car) => car.plate === e.target.value)
        del(url, car)
        cadastrados()
    }

    return (<div className='d-flex card body'>
        <form >
            <table>
                <tbody>
                    <tr>
                        <th>Carro</th>
                        <th>Model</th>
                        <th>Ano</th>
                        <th>Placa</th>
                        <th>Cor</th>
                        <th>Excluir</th>
                    </tr>
                    <CreateRow data={data} deletar={handleDelete} />
                </tbody>
            </table>
        </form>
    </div>
    )
}

export default Lista;