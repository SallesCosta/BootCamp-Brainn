import Btn from "./btn"

function Sidebar( {lista} ) {
    return (
        <aside className='sidebar'>
            <Btn kind='primary' children='Primário'></Btn>
            <Btn kind='secondary' children='Secundário'></Btn>
            <br />
            <ul>
                {lista.map((item) => (
                    <li key={item.id}>
                        <a href={item.id}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </aside>
    )

}

export default Sidebar