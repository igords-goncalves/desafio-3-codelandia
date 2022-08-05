import React from "react";
import Cards from "./cards/Cards";

const Main = (_) => {
    return (
        <main>
            <div className="cards">
                <Cards
                    className="cards-descript-1"
                    classColor="color-red"
                    classDescript="descript"
                    title="Testanto Componente"
                    description="Elemento testado"
                />
            </div>
        </main>
    );
};

export default Main;
