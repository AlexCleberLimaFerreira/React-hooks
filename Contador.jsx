import { useState } from 'react';
import './Contador.css';

export default function Contador() {
const [numero,setNumero] = useState(0);

function incrementar() {
  setNumero(numero + 1);
}

function decrementar() {
  setNumero(numero - 1);
}
function zerar() {
    setNumero(0);
}


  return (
   <div className='box'>
    <span>{numero}</span>
    <div className='botoes'>
    <button className='botao' onClick={decrementar}>-</button>
    <button className='botao'  onClick={incrementar}>+</button>
    <button onClick={zerar}>0</button>
    </div>
   </div>
  );
}