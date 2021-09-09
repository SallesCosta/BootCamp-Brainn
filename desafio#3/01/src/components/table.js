import CreateRow from './row'
import { del } from './http'

const url = 'http://localhost:3333/cars'

function Lista({ data, setData }) {

  function handleDelete(e, placa) {
    e.preventDefault()
    const car = data.findIndex((car) => car.plate === e.target.value)

    del(url, { plate: placa })
      .then((response) => {
        if (response.error) {
          return console.log('invalid Operation')
        }
        function attState() {  //essa function attState exclui o carro da lista no FRONT
          setData((x) => {
            x.splice(car, 1)
            return [...x]
          })
        }
        attState()
      }
      )
      console.log('excluiu a placa: ', placa)
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