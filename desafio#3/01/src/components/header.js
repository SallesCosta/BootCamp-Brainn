import styled from "styled-components"

function Header(text, bgColor, color) {
    return <>
     {/* <header className='header'>Header</header> */}
     <HeaderInt children={text} bgColor={bgColor} color={color}/>
     </>
}

export default Header

const HeaderInt = styled.header`
    display: flex;
    width: 100%;
    height: 4rem;
    text-align: center;
    position: fixed;
    background: #11101D;
    color: #fff;
`