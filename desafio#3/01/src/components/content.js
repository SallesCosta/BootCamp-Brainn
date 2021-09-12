import Sidebar from './sidebar'
import FormCar from './formCar'

export default function Content({color, bgColor, onClick1, onClick2}) {

    return <>
        <Sidebar bgColor={bgColor} color={color} onClick1={onClick1} onClick2={onClick2}/>
        <FormCar />
    </>
}
