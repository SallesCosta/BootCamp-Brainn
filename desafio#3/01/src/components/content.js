import Sidebar from './sidebar'
import FormCar from './formCar'
// import styled from 'styled-components'

export default function Content() {

    return <>
        <Sidebar />
        <section className='content'>
            <FormCar />
        </section>
    </>
}
