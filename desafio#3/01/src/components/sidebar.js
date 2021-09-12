import styled from "styled-components"
import { BtnPrimary, BtnSecondary } from "./btn"


function Sidebar({ bgColor, color, onClick1, onClick2 }) {

    return (
        <SidebarInt bgColor={bgColor} color={color}>
            <BtnPrimary children='Tema A' onClick={onClick1} />
            <BtnSecondary children='Tema B' onClick={onClick2} />
        </SidebarInt>
    )
}
export default Sidebar

const SidebarInt = styled.aside`
    position: fixed;
    left: 0;
    bottom: 3rem;
    top: 7rem;
    height: 100%-7rem;
    width: 10%;
    color: ${(props)=> props.color} ;
    background: ${(props) => props.bgColor}
`
