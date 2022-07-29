import React, { useState } from "react";
import Item from "./Item";
import style from './Lista.module.scss';

function Lista() {
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
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                setTarefas([...tarefas, { tarefa: "Estudar estado", tempo: "01:30:00"}]) 
            }}>Estudos do dia:</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                    key="{index}"
                    {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;