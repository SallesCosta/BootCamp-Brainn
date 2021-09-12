import Header from './components/header'
import Menu from './components/menu'
import Footer from './components/footer'
import Content from './components/content'
import { createGlobalStyle } from 'styled-components'
import { useState } from 'react'

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

    const themeA = {
        bg1: '#11101D',
        bg2: '#D93A54',
        bg3: '#306D85',
    }

    const themeB = {
        bg1: '#f1ede3',
        bg2: '#D93A54',
        bg3: '#11101D',
    }

    const [state, setState]= useState(themeA)

    function changeTheme({setState}){
        setState(themeB)
    }

    return (<>
        <GlobalStyle />
        <Header text='texto do header' bgColor={state.bg1} color={color} />
        <Menu text='meu menu personalizado' bgColor={state.bg2} color={color} />
        <Content bgColor={state.bg3} color={color} onClick={changeTheme} />
        <Footer text='meu footer' bgColor={state.bg1} color={color} />
    </>)
}

// const [Bg1, setBg1] = useState(themeA.bg1)
// const [Bg2, setBg2] = useState(themeA.bg2)
// const [Bg3, setBg3] = useState(themeA.bg3)


// function changeThemeToA() {
//     setBg1(themeA.bg1)
//     setBg2(themeA.bg2)
//     setBg3(themeA.bg3)
//     return console.log('ativou o tema A')
// }

// function changeThemeToB() {
//     setBg1(themeB.bg1)
//     setBg2(themeB.bg2)
//     setBg3(themeB.bg3)
//     return console.log('ativou o tema B')
// }





// return (<>
//     <GlobalStyle />
//     <Header text='texto do header' bgColor={Bg1} color={color} />
//     <Menu text='meu menu personalizado' bgColor={Bg2} color={color} />
//     <Content bgColor={Bg3} color={color} onClick={changeThemeToB} />
//     <Footer text='meu footer' bgColor={Bg1} color={color} />
// </>)