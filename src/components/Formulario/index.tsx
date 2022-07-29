import React from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss';

class Formulario extends React.Component {
    state = {
        tarefa: " ",
        tempo: "00:00"
    }

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault(); 
        console.log('state: ', this.state);
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um item de estudo:
                    </label>
                    <input type="text" name="tarefa" id="tarefa" value={this.state.tarefa} onChange={evento => this.setState({ ...this.state, tarefa: evento.target.value})} placeholder="O que você vai estudar/desenvolver?" required/>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo de duração: 
                    </label>
                    <input type="time" id="tempo" value={this.state.tempo} onChange={evento => this.setState({ ...this.state, tempo: evento.target.value})} step="1" name="tempo" min="00:00:00" max="01:30:30" required/>
                </div>
                <Botao>Adicionar</Botao>
            </form>
        )
    }

}

export default Formulario;