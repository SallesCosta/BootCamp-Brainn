import Sidebar from './sidebar'
import FormCar from './formCar'

export default function Content({color, bgColor}) {

    return <>
        <Sidebar bgColor={bgColor} color={color} />
        <FormCar />
    </>
}
