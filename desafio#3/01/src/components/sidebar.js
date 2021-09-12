import styled from "styled-components"
import { BtnPrimary, BtnSecondary } from "./btn"


function Sidebar({ bgColor, color }) {

    return (
        <SidebarInt bgColor={bgColor} color={color}>
            <BtnPrimary children='Tema A' />
            <BtnSecondary children='Tema B' />
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
