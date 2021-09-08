function Table({ data, getCarros }) {

    function handleClick(e) {
      e.preventDefault()
  
      const car = data.find((car) => car.plate === e.target.value)
          
      const requestOption = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(car),
      };
      fetch("http://localhost:3333/cars", requestOption)
        .then((response) => response.json())
        .then((response) => {
          console.log(response)
          getCarros()
        })
    }
  
    return (
      <section >
        <table>
          <tbody>
            <tr>
              <th>Carro</th>
              <th>Marca</th>
              <th>Ano</th>
              <th>Placa</th>
              <th>Cor</th>
              <th>Editar</th>
            </tr>
            {data.length !== 0 &&
              data.map((item) => 
                <tr key={item.plate}>
                  <td><img src={item.image} alt="carro"></img></td>
                  <td>{item.brandModel}</td>
                  <td>{item.year}</td>
                  <td>{item.plate}</td>
                  <td>{item.color}</td>
                  <td><button onClick={handleClick} value={item.plate}>Remover</button></td>
                </tr>
              )}
          </tbody>
        </table>
      </section>
    );
  }
  
  export default Table;