import Header from './components/header'
import Menu from './components/menu'
import Content from './components/content'
import Footer from './components/footer'
// import Sidebar from './components/sidebar'


function App() {
    return (<>
        <Header></Header>
         <Menu></Menu>
        <Content></Content>
        {/* <Sidebar/> */}
        <Footer></Footer> 

    </>)
}

// const artigos = [
//     {
//         id: '01',
//         title: 'Primeiro Artigo',
//         content: 'conteúdo do pimeiro artigo'
//     },
//     {
//         id: '02',
//         title: 'Segundo Artigo',
//         content: 'conteúdo do segundo artigo'
//     }
// ]



export default App