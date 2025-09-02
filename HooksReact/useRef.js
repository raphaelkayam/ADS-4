import React, { useRef, useEffect } from 'react';

function Formulario() {
  const inputRef = useRef(null); // cria uma referência inicial com valor null

  useEffect(() => {
    // Quando o componente monta, foca no input
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Digite seu nome:</h2>
      <input ref={inputRef} type="text" placeholder="Seu nome" />
    </div>
  );
}

export default Formulario;