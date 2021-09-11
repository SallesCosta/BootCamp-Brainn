import { BtnPrimary, BtnSecondary } from "./btn"

function Sidebar() {

    return (
        <aside className='sidebar'>
            <BtnPrimary children='primaryButton' />
            <BtnSecondary children='secondaryButton' />       
        </aside >
    )
}

export default Sidebar