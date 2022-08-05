import React from "react";
import './Cards.css'

const Cards = (props) => {
    return (
        <div className={props.className}>
            <div className={props.classColor}></div>
            <div className={props.classDescript}>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default Cards;
