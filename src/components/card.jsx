import React from "react";

function CardContainer ({ children }) {
    const Style = {
        backgroundColor: "DodgerBlue",
        padding: "10px",
    };
    return <div style={Style}>{children}</div>;
}

export default CardContainer;