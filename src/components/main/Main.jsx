import React from "react";
import Cards from "./cards/Cards";
import "./Main.css";

import { title, description } from "./cards/texts.js";

const Main = (_) => {
    return (
        <main>
            <div className="cards">
                <Cards
                    className="cards-descript-1 box"
                    classColor="color-red"
                    classDescript="descript"
                    title={title.red}
                    description={description.red}
                />
                <Cards
                    className="cards-descript-2 box"
                    classColor="color-green"
                    classDescript="descript"
                    title={title.verde}
                    description={description.verde}
                />
                <Cards
                    className="cards-descript-3 box"
                    classColor="color-yellow"
                    classDescript="descript"
                    title={title.amarelo}
                    description={description.amarelo}
                />
                <Cards
                    className="cards-descript-4 box"
                    classColor="color-blue"
                    classDescript="descript"
                    title={title.azul}
                    description={description.azul}
                />
                <Cards
                    className="cards-descript-5 box"
                    classColor="color-orange"
                    classDescript="descript"
                    title={title.laranja}
                    description={description.laranja}
                />
                <Cards
                    className="cards-descript-6 box"
                    classColor="color-purple"
                    classDescript="descript"
                    title={title.roxo}
                    description={description.roxo}
                />
                <Cards
                    className="cards-descript-7 box"
                    classColor="color-white"
                    classDescript="descript"
                    title={title.branco}
                    description={description.branco}
                />
                <Cards
                    className="cards-descript-8 box"
                    classColor="color-black"
                    classDescript="descript"
                    title={title.preto}
                    description={description.preto}
                />
            </div>
        </main>
    );
};

export default Main;
