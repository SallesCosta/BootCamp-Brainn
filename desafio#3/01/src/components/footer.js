import styled from "styled-components"

function Footer({text, color, bgColor}) {
    return <>
        <FooterInt children={text} color={color} bgColor={bgColor}/>
        </>
}
export default Footer

const FooterInt = styled.footer`
       width: 100%;
       height: 3rem;       
       text-align: center;
       position: fixed;
       bottom: 0;
       color: ${(props)=>props.color};
       background: ${(props)=>props.bgColor};
       ` 