import { useState,useEffect, use } from 'react';


export default function App() {

  const [mensagem1, mudarMensagem1] = useState('Hello World!');  // Estado inicial da mensagem1 é "Hello World!"
  const [mensagem2, mudarMensagem2] = useState('Hello World!');

  useEffect(() => {
    console.log('Executando na renderização');
  },[mensagem1,mensagem2]); // O useEffect é chamado sempre que a mensagem1 ou mensagem2 muda no butão


  return (
    <>
      <h1>{mensagem1}</h1>
      <button onClick={() => {
        mudarMensagem1('Olá Mundo1!');
      }}>Mudar Idioma</button>


      <h1>{mensagem2}</h1>
      <button onClick={() => {
        mudarMensagem2('Olá Mundo2!');
      }}>Mudar Idioma</button>
    </>
  )
}