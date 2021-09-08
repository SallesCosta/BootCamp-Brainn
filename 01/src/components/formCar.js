import Table from "./table";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  function getCarros() {
    fetch("http://localhost:3333/cars")
      .then((result) => result.json())
      .then((result) => setData(result));
  }

  useEffect(() => {
    getCarros()

    return () => {
    };
  }, []);

  return (
    <>
      <Form data={data} getCarros={getCarros} />
      <Table data={data} getCarros={getCarros} />
    </>
  );
}

function Form({ getCarros }) {
  function handleForm(e) {
    e.preventDefault();

    const car = {
      image: e.target.elements.imagem.value,
      brandModel: e.target.elements.marca.value,
      year: e.target.elements.ano.value,
      plate: e.target.elements.placa.value,
      color: e.target.elements.cor.value,
    };

    const requestOption = {
      method: "POST",
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
      <form onSubmit={handleForm}>
        <label>Url da Imagem:</label>
        <input type="text" name="imagem"></input>

        <label>Marca</label>
        <input type="text" name="marca"></input>

        <label>Ano</label>
        <input type="number" name="ano"></input>

        <label>Placa</label>
        <input type="text" name="placa"></input>

        <label>Cor</label>
        <input type="text" name="cor"></input>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default App;