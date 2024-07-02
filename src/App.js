
import { useState } from 'react';
import Banner from './components/Banner';
import CampoTexto from './components/CampoTexto';
import Formulario from './components/Formulario';
import Funcao from './components/Funcoes';
import Footer from './components/Banner-footer';

function App() {

  const responsa = [
    {
      nome: 'Anime',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Filme',
      corPrimaria: '#e06b69',
      corSecundaria: '#fae9f5'
    },
    {
      nome: 'Série',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9'
    },
    {
      nome: 'Canais do YouTube',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    }
  ]

  const [jogadores, setJogador] = useState([])

  const aoNovoJogador = (jogador) => {
    // console.log(jogador);
    debugger
    setJogador([...jogadores, jogador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario responsa={responsa.map(func => func.nome)} aoJogadorCadastrado={jogador => aoNovoJogador(jogador)} />
      {responsa.map(resp => <Funcao
        key={resp.nome}
        nome={resp.nome}
        corPrimaria={resp.corPrimaria}
        corSecundaria={resp.corSecundaria}
        jogadores={jogadores.filter(jogador => jogador.funcao == resp.nome)}
      />)}
      <Footer/>
    </div>
  );
}

export default App;
