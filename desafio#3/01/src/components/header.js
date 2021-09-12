import styled from "styled-components"

function Header({ text, bgColor, color }) {
    return <>
        <HeaderInternal children={text} bgColor={bgColor} color={color} />
    </>
}

const HeaderInternal = styled.header`
    width: 100%;
    height: 4rem;
    position: fixed;
    text-align: center;
    color: ${(props) => props.color};
    background: ${(props) => props.bgColor};
    `

export default Header