import React from "react";

function MainHeader ({title, description}) {
    return(
        <header>
            <h1>{title}</h1>
            <p>{description}</p>
        </header>
    )
}

export default MainHeader;