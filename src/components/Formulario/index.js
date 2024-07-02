import { useState } from 'react'
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [descricao, setdescricao] = useState('')
    const [imagem, setImagem] = useState('')
    const [funcao, setFuncao] = useState('')

    const aoSalvar = (event) => {
        event.preventDefault()
        props.aoJogadorCadastrado({
            nome,
            descricao,
            imagem,
            funcao
        })
        setdescricao('')
        setFuncao('')
        setImagem('')
        setNome('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Criar card de conteúdo preferido, preencha os dados abaixo</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Título"
                    placeholder="Digite o titúlo"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Descrição"
                    placeholder="Descreva o conteúdo"
                    valor={descricao}
                    aoAlterado={valor => setdescricao(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Categoria" 
                    itens={props.responsa}
                    valor={funcao}
                    aoAlterado={valor => setFuncao(valor)}
                />
                <Botao /*texto="Criar card"*/>Criar card</Botao>
            </form>
        </section>
    )
}

export default Formulario