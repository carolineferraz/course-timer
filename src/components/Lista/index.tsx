import React, { useState } from "react";
import Item from "./Item";
import style from './Lista.module.scss';

interface ITarefa {
    tarefa: string,
    tempo: string
}

function Lista({ tarefas }: {tarefas: ITarefa[]}) {

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia:</h2>
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