
export default function CreateRow({ arrayDaEntrada }) {
    return (<>
        {arrayDaEntrada.map((item, index) => (
            <tr>
                <td key={index}>{item.image}</td>
                <td key={index}>{item.brandModel}</td>
                <td key={index}>{item.year}</td>
                <td key={index}>{item.plate}</td>
                <td key={index}>{item.color}</td>
            </tr>
        ))}
    </>
    )
}

// post(arrayDaEntrada)