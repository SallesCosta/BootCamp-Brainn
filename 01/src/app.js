import Header from './components/header'
import Menu from './components/menu'
import Content from './components/content'
import Footer from './components/footer'
import Lista from './components/content'
import { useState } from 'react'


function App() {



    return (<>
        <Header></Header>
         <Menu></Menu>
        <Content></Content>
        <Footer></Footer> 
    </>)
}


export default App

//uma observação. quando bolei meu layout.. eu pus o sidebar dentro do content...
//entao isso muda minhas configurações.. mas estou preservando a intenção do exercício
//o componente Sidebar e o array de artigos estao no componetne Content. E a lista é passada
//como props para o Sidebar 