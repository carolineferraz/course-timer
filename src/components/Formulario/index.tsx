import React from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss';

class Formulario extends React.Component {

    render() {
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um item:
                    </label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="O que você vai estudar/desenvolver?" required/>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo de duração: 
                    </label>
                    <input type="time" step="1" name="tempo" id="tempo" min="00:00:00" max="01:30:30" required/>
                </div>
                <Botao />
            </form>
        )
    }

}

export default Formulario;