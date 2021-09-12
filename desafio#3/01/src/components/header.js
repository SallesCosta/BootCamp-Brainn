import styled from "styled-components"

function Header({ text, bgColor, color }) {
    return <>
        <HeaderInt children={text} bgColor={bgColor} color={color} />
    </>
}

export default Header

const HeaderInt = styled.header`
    width: 100%;
    height: 4rem;
    position: fixed;
    text-align: center;
    color: ${(props) => props.color};
    background: ${(props) => props.bgColor};
`
