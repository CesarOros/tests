import React from "react";
function Saludo() {
    const [titulo, setTitulo] = React.useState("Hola React");
    function handleInputChange(event) {
        console.log("input cambiado!", event);
        setTitulo(event.target.value)
    }
    return (
        <div>
            <h1>{titulo}</h1>
            <input placeholder="Actualización titulo" onChange={handleInputChange}/>
        </div>
    );
}

export default Saludo;