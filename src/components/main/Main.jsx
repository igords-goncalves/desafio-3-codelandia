import React from "react";
import Cards from "./cards/Cards";
import "./Main.css";

const Main = (_) => {
    return (
        <main>
            <div className="cards">
                <Cards
                    className="cards-descript-1 box"
                    classColor="color-red"
                    classDescript="descript"
                    title="Testanto Componente"
                    description="Elemento testado"
                />
                <Cards
                    className="cards-descript-2 box"
                    classColor="color-green"
                    classDescript="descript"
                    title="Testanto Componente"
                    description="Elemento testado"
                />
            </div>
        </main>
    );
};

export default Main;
