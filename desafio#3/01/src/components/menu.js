import styled from "styled-components"

function Menu({ text, bgColor, color }) {
   return <>
      <MenuInt children={text} color={color} bgColor={bgColor} />
   </>
}

export default Menu

const MenuInt = styled.nav`
    top: 4rem;
    width: 100%;
    height: 3rem;
    position: fixed;
    text-align: center;
    color: ${(props) => props.color};
    background: ${(props) => props.bgColor};


`