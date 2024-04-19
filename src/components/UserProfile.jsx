import React from "react";

function UserProfile ({ name='Unknown', age='Unknown', location='Unknown' }) {
    return (
        <div>
            <h1>Välkommen {name}!</h1>
            <p>Ålder: {age}</p>
            <p>Plats: {location}</p>
        </div>
    );
}

export default UserProfile;