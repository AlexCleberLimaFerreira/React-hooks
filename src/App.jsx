import { useState,useEffect, use } from 'react';
import './src/components/App.css';
import { useState } from 'react';


export default function App() {

  const [valor, mudarValor] = useState(true);

  function alterarValor() {
    mudarValor(!valor);
  }

  return (
    <div style={{ backgroundColor: valor ? 'blue' : 'red' }}>
    <button style={{ backgroundColor: valor ? 'blue' : 'red' }} onClick={alterarValor}>CLIQUE!</button>
    </div>
  )
};