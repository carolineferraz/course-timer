import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss';

function App() {
  //na const abaixo, tarefas representa o nosso estado atual e setTarefas é função para mudar o estado
  const [tarefas, setTarefas] = useState([{
    tarefa: 'TypeScript',
    tempo: '01:30:00'
  }, {
    tarefa: 'SASS',
    tempo: '01:30:00'
  }, {
    tarefa: 'Java',
    tempo: '01:30:00'
  }]);
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
