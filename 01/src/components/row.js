export default function CreateRow({ data, deletar }) {

    return <>
        {data.length !== 0 && data.map((item) => (
                <tr key={item.plate}>
                    <td><img src={item.image} alt="car"></img></td>
                    <td>{item.brandModel}</td>
                    <td>{item.year}</td>
                    <td>{item.plate}</td>
                    <td>{item.color}</td>
                    <td><button onClick={(event) => deletar(event, item.plate)} value={item.plate}>Excluir</button></td>
                </tr>
            ))}
    </>
}