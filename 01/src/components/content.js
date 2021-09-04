import Sidebar from './sidebar'
import * as aux from './aux'
import { useState } from 'react'
import { H4, P } from './titulos'


export default function Content() {

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

    const [title, setTitle] = useState(Lista[0].title)
    const [content, setContent] = useState(Lista[0].content)

    function postar(novoPostId) {
        const novoPost = Lista.find((item) => item.id === novoPostId);
        setTitle(novoPost.title)
        setContent(novoPost.content)
    }


    return <>

        <Sidebar lista={Lista} postar={postar} />
        <section className='content'>
            <aux.Github_e />
            <br />
            <aux.Github_b />
            <br />
            <div className='card'>
                <H4 text={title} />
                <br />
                <P text={content} />
            </div>
        </section>
    </>
}