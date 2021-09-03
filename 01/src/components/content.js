import Sidebar from './sidebar'
import * as aux from './aux'

function Content() {
    return <>
        <Sidebar></Sidebar>
        <section className='content'>
            <aux.Github_e />
            <aux.Github_b />
        </section>
    </>
}

export default Content