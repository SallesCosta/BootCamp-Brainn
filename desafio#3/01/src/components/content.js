import Sidebar from './sidebar'
import FormCar from './formCar'

export default function Content({color, bgColor, onClick}) {

    return <>
        <Sidebar bgColor={bgColor} color={color} onClick={onClick}/>
        <FormCar />
    </>
}
