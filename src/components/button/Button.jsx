import React from "react";

const Button = (props) => {
    const value = props.value;

    const params = {
        name: props.name,
        className: props.className,
        atribute: props.atribute,
    };

    return (
        <button
            className={params.name}
            name={params.className}
            atribute={params.atribute}
        >
            {value}
        </button>
    );
};

export default Button;
