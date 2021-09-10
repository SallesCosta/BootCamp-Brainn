import { BtnPrimary, BtnSecondary } from "./btn"

function Sidebar({ lista, postar }) {

    return (
        <aside className='sidebar'>
            <BtnPrimary children='primaryButton' />
            <BtnSecondary children='secondaryButton' />
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