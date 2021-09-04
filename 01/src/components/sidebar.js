import Btn from "./btn"

function Sidebar({ lista, postar }) {

    return (
        <aside className='sidebar'>
            <Btn kind='primary' children='Desafios #1 e #2'></Btn>
            <Btn kind='secondary' children='Desafio #3'></Btn>
            <br />
            <ul>
                {lista.map((item) => (
                    <li key={item.id}>
                        <a href={item.id} className='links_articles' onClick={(event) => {
                            event.preventDefault()
                            postar(item.id)
                        }
                        }>
                            {item.title}</a>
                    </li>
                ))}
            </ul>
        </aside >
    )
}

export default Sidebar