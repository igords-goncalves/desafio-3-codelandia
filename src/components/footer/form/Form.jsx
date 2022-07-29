import React from "react";
import Button from "../../button/Button";
import './Form.css'

const textArea = {
    rezise: "none",
};

const Form = (props) => {
    return (
        <form action="#" method="get">
            <h2>Entre em contato</h2>
            <input
                type="text"
                name="nome"
                id="nome"
                placeholder="nome"
                required
            />
            <input
                type="email"
                name="e-mail"
                id="e-mail"
                placeholder="E-mail"
                pattern=".+@globex\.com"
                size={30}
                required
            />
            <input
                type="tel"
                name="tel"
                id="tel"
                placeholder="Telefone"
                pattern="[0-9]{2}[0-9]{5}[0-9]{4}"
                required
            />
            <textarea
                name="msg"
                id="msg"
                cols="30"
                rows="0"
                maxLength={500}
                spellCheck="false"
                placeholder="Mensagem"
                style={textArea}
            ></textarea>
            <Button
                className="botao"
                name="botao"
                atribute="atr-footer"
                value="Enviar Mensagem"
            >
                Enviar Mensagem
            </Button>
        </form>
    );
};

export default Form;
