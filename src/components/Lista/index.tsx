import React from "react";

function Lista() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '01:30:00'
    }, {
        tarefa: 'Spring',
        tempo: '01:30:00'
    }, {
        tarefa: 'Java',
        tempo: '01:30:30'
    }]
    return (
        <aside>
            <h2>Estudos do dia:</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index}>
                        <h3> {item.tarefa} </h3>
                        <span> {item.tempo} </span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;