// arquivo para exportação de componentes auxiliares
import { H3, H4 } from './titulos'

function Github_e() {
    return (<>
        <br />
        <a href='https://github.com/SallesCosta' target="_blank" rel='noreferrer' className="git">
            <span><i class="fa fa-github" aria-hidden="true"></i> <H3 text = 'Github'/></span></a>
        <H4 text='Follow me... te pago uma breja' />
        <p>valeu!!!</p>
        <br />
    </>)
}

function Github_b() {
    return (<>
        <a href='https://github.com/brainnco' target="_blank" rel='noreferrer' className="git">
            <span><i class="fa fa-github" aria-hidden="true"></i> <H3 text='Github'/></span></a>
        <H4 text='mandar a fatura da breja para esse endereço'/>
    </>)
}

export { Github_e, Github_b }