import Header from './components/header'
import Menu from './components/menu'
import Footer from './components/footer'
import Content from './components/content'
import { createGlobalStyle } from 'styled-components'
import { useState, useEffect } from 'react'

const GlobalStyle = createGlobalStyle`
 body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
 `

export default function App() {

    const color = '#fff'
    useEffect(() => {

    })
    const themeA = {
        bg1: '#11101D',
        bg2: '#D93A54',
        bg3: '#306D85',
        color: '#fff',
    }
    // const themeB = {
    //     bg1:'#f1ede3',
    //     bg2:'#D93A54',
    //     bg3:'#11101D,
    // }

    const [Bg1, setBg1] = useState(themeA.bg1)
    const [Bg2, setBg2] = useState(themeA.bg2)
    const [Bg3, setBg3] = useState(themeA.bg3)


    function changeTheme() {
        return
    }





    // const generalBg1 = '#11101D'
    // const generalBg2 = '#f1ede3'
    // const generalBg3 = '#11101D'
    // const generalColor = '#fff'


    return (<>
        <GlobalStyle />
        <Header text='texto do header' bgColor={Bg1} color={color} />
        <Menu text='meu menu personalizado' bgColor={Bg2} color={color} />
        <Content bgColor={Bg3} color={color} />
        <Footer text='meu footer' bgColor={Bg1} color={color} />
    </>)
}
