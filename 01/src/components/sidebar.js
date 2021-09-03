import Btn from "./btn"

function Sidebar() {
    return (
        <aside className='sidebar'>
            <Btn kind='primary' children='Primário'></Btn>
            <Btn kind='secondary' children='Secundário'></Btn>
            <br/>
        </aside>
    )

}


export default Sidebar