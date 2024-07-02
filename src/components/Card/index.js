import './Card.css'

const Player = (props) =>{
    return(
        <div className='player'>
            <div className='cabecalho' style={{backgroundColor:props.corDeFundo}}>
                <img src={props.imagem} alt='DavidAndrade'/>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.descricao}</h5>
            </div>
        </div>
    )
}

export default Player 