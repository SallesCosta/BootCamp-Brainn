import Sidebar from './sidebar'
import * as aux from './aux'

function Content() {

const Lista = [
    {
        id: '01',
        title: 'Primeiro Artigo',
        content: 'conteúdo do pimeiro artigo'
    },
    {
        id: '02',
        title: 'Segundo Artigo',
        content: 'conteúdo do segundo artigo'
    },
    {
        id: '03',
        title: 'Terceiro Artigo',
        content: 'conteúdo do terceiro artigo'
    },
    {
        id: '04',
        title: 'Quarto Artigo',
        content: 'conteúdo do quarto artigo'
    },
    {
        id: '05',
        title: 'Quinto Artigo',
        content: 'conteúdo do quinto artigo'
    }
]

    return <>
        <Sidebar lista={Lista}/>
        <section className='content'>
            <aux.Github_e />
            <aux.Github_b />
        </section>
    </>
}

export default Content