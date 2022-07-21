import React from "react";
import Botao from "../Botao";
import './style.scss'

class Formulario extends React.Component {

    render() {
        return (
            <form className="novaTarefa">
                <div className="inputContainer">
                    <label htmlFor="tarefa">
                        Adicione um item:
                    </label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="O que você vai estudar/desenvolver?" required/>
                </div>
                <div className="inputContainer">
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