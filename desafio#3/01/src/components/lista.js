import CreateRow from './row'
import { del } from './http'
import styled from 'styled-components'

const url = 'http://localhost:3333/cars'

const Wrapper = styled.div`
 display: flex;
 margin-top: auto;
 margin-left: auto;
 margin-right: auto;
 max-width: 400px;
 border: 3px solid #444;
 border-radius: 10px;
 background-color: #fff;
 text-align: center;
 align-items: center;
}
 `

function Lista({ data, setData }) {

  function handleDelete(e, placa) {
    e.preventDefault()
    del(url, { plate: placa })
      .then((response) => {
        if (response.error) {
          return console.log('invalid Operation')
        }
        setData((prevState) => prevState.filter((car) => car.plate !== placa))
      }
      )
    console.log('excluiu a placa: ', placa)
  }

  return (<Wrapper>
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
  </Wrapper>
  )
}
export { Lista, Wrapper};

