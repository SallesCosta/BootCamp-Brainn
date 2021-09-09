// arquivo para exportação de componentes auxiliares
import { H2, H3, H4 } from './titulos'

function Github_e() {
    return (<>
        <br />
        <a href='https://github.com/SallesCosta' target="_blank" rel='noreferrer' className="git">
            <span><i className="fa fa-github" aria-hidden="true"></i> <H3 text='Github' /></span></a>
        <H4 text='Follow me... te pago uma breja' />
        <p>valeu!!!</p>
        <br />
    </>)
}

function Github_b() {
    return (<>
        <a href='https://github.com/brainnco' target="_blank" rel='noreferrer' className="git">
            <span><i className="fa fa-github" aria-hidden="true"></i> <H3 text='Github' /></span></a>
        <H4 text='mandar a fatura da breja para esse endereço' />
    </>)
}

function Art({ tit, cont }) {
    return <>
        <H2>{tit}</H2>
        <H3>{cont}</H3>
    </>
}

export { Github_e, Github_b, Art }