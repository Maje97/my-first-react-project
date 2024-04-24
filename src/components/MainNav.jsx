import React from "react";

function MainNav ({titles}) {
    return(
        <nav>
            <div class="flex justify-center py-4">
                {titles.map((word, index) => (
                    <p class="max-w-fit px-4" key={index}>{word}</p>
                ))}
            </div>
        </nav>
    )
}

export default MainNav;