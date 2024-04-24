import React from "react";

function MainHeader ({title, description}) {
    return(
        <header class="flex-initial flex-col">
            <h1 class="text-2xl">{title}</h1>
            <p class="text-base">{description}</p>
        </header>
    )
}

export default MainHeader;