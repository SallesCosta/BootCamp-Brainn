import CreateRow from "./row";
import { del } from './http'

function Table({ data, getCarros }) {

    function handleDelete(e) {
        e.preventDefault()

        const car = data.find((car) => car.plate === e.target.value)

        del('http://localhost:3333/cars', car)
        // const requestOption = {
        //     method: "DELETE",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(car),
        // };
        // fetch("http://localhost:3333/cars", requestOption)
        //     .then((response) => response.json())
        //     .then((response) => {
        //         console.log(response)
        //         getCarros()
        //     })
    }

    return (<div className='d-flex card body'>

        <form >
            <table>
                <tbody>
                    <tr>
                        <th>Carro</th>
                        <th>Marca</th>
                        <th>Ano</th>
                        <th>Placa</th>
                        <th>Cor</th>
                        <th>Deletar</th>
                    </tr>
                    <CreateRow data={data} deletar={handleDelete} />
                </tbody>
            </table>
        </form>
    </div>

    )
}

export default Table;