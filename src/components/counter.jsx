import React, { useState, useEffect } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    useEffect(() => {

        document.title = `Du har klickat ${count} gånger`;
    
      });
  
    return (
  
      <div>
  
        <p>Du har klickat {count} gånger!</p>
  
        <button onClick={() => setCount(count + 1)}>
  
          Klicka här!
  
        </button>
  
      </div>
  
    );
  
}

export default Counter;
