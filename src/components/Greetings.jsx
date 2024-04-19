import React from "react";

function TraditionalGreeting (props) {
    return (<h1>Hej {props.name}!</h1>);
};

export const ArrowGreeting = (name) => <h1> "Hej " + name + "!" </h1>;

export default TraditionalGreeting;