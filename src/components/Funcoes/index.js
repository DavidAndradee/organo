import Card from '../Card'
import './funcao.css'

const Funcao = (props) => {
    return (
        (props.jogadores.length> 0) && <section className='function' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='players'>
                {props.jogadores.map(jogador => <Card corDeFundo={props.corPrimaria} key={jogador.nome} nome={jogador.nome} descricao={jogador.descricao} imagem={jogador.imagem} />)}
            </div>
        </section>
    )
}

export default Funcao