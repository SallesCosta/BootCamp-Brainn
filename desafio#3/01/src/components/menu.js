import styled from "styled-components"


function Menu({ text, bgColor, color }) {
   return <>
      <MenuInternal children={text} color={color} bgColor={bgColor} />
   </>
}

export default Menu


const MenuInternal = styled.nav`
    top: 4rem;
    height: 3rem;
    
    width: 100%;
    position: fixed;
    text-align: center;
    color: ${(props) => props.color};
    background: ${(props) => props.bgColor};
    `


// const MenuInt = styled(HeaderInt)`
//         /* height: 3rem;
//         top: 4rem; */
   //  `

   //  const HeaderInt = styled.header`

   //     height: 4rem;

   //      width: 100%;
   //      position: fixed;
   //      text-align: center;
   //      color: ${(props) => props.color};
   //      background: ${(props) => props.bgColor};
   //  `