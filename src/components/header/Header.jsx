import React from "react";
import Button from "../button/Button";

import "./Header.css";

const Header = (props) => {
    return (
        <header>
            <div className="header">
                <div className="header-descript">
                    <h2 className="title">
                        O significado psicológico das cores primárias e
                        secundárias.
                    </h2>
                    <p className="text">
                        Cores primárias são as “cores puras”, que não surgem de
                        outras. Cores secundárias surgem da união de duas cores
                        primárias.
                    </p>
                    <Button
                        className="botao"
                        name="botao"
                        atribute="atr-header"
                        value="Contato"
                    >
                        Contato
                    </Button>
                </div>
                <div className="header-image">
                    <img
                        src="../../assets/img/image.svg"
                        alt="gifts"
                        className="image"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
