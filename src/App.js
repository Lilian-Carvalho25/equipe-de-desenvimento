import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

const times = [
  {
    nome: 'Programação',
    corPrimaria: '#601E8F',
    corSecundaria: '#DCADFD'
  },
  {
    nome: 'Front-End',
    corPrimaria: '#60C1F8',
    corSecundaria: '#D0EEFF'
  },
  {
    nome: 'Data Science',
    corPrimaria: '#F28705',
    corSecundaria: '#FFDAAC'
  },
  {
    nome: 'Devops',
    corPrimaria: '#E06B69',
    corSecundaria: '#FDE7E8'
  },
  {
    nome: 'UX Design',
    corPrimaria: '#E354BF',
    corSecundaria: '#FFC2ED'
  },
  {
    nome: 'Mobile',
    corPrimaria: '#255929',
    corSecundaria: '#DAFFDD'
  },
  {
    nome: 'Inovação e Gestão',
    corPrimaria: '#D90718',
    corSecundaria: '#FFD6D9'
  }
]

const [colaboradores, setColaboradores] = useState([])

const aoNovoColaboradorAdicionado = (colaborador) => {
setColaboradores([...colaboradores, colaborador])
}

  return (
    <div className="App">
      <Banner />
    <Formulario 
    times={times.map(time => time.nome)}
    aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} 
    />

  {times.map(time => <Time key={time.nome} 
  nome={time.nome} 
  corPrimaria={time.corPrimaria}
  corSecundaria={time.corSecundaria}
colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
  />)}
    </div>
  );
}

export default App;
