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

    const generalBg = '#11101D'
    const generalBg2 = '#11101D'
    const generalBg3 = '#11101D'
    const generalColor = '#fff'


    return (<>
        <GlobalStyle />
        <Header text='texto do header' bgColor={generalBg} color={generalColor}/>
        <Menu text='meu menu personalizado' bgColor={generalBg2} color={generalColor}/>
        <Content bgColor={generalBg2} color={generalColor}/>
        <Footer text='meu footer' bgColor={generalBg} color={generalColor} />
    </>)
}
