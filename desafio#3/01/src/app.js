import Header from './components/header'
import Menu from './components/menu'
import Footer from './components/footer'
import Content from './components/content'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    margin: 0;
     padding: 0;
    box-sizing: border-box;
}
 `

export default function App() {

    return (<>
        <GlobalStyle />
        <Header text='' bgColor='' color=''/>
        <Menu text='meu menu personalizado' bgColor='#13391D' color='#fff'></Menu>
        <Content />
        <Footer text='meu footer' bgColor='#11101D' color='#fff' />
    </>)
}
