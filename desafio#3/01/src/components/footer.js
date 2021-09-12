import styled from "styled-components"

const FooterInt = styled.footer`
       width: 100%;
       height: 3rem;
       display: flex;
       justify-content: space-between;
       align-items: center;
       position: fixed;
       bottom: 0;

       color: #fff;
       background: ${(props)=>props.bgColor};
       ` 

function Footer({text, color, bgColor}) {
    return <>
        <footer>
        <FooterInt children={text} color={color} bgColor={bgColor}/>
        </footer>
        </>
}
export default Footer