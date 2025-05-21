import { use, useState } from 'react';
import Contador from './components/contador/Contador';

export default function App() {

  // const [nome] = useState("Alexandre");
  // const [situacao, setSituacao] = useState(true);

  // function mudarSituacao() {
  //   setSituacao(!situacao);
  // }



  return (
    <>
    <Contador/>
    {/* <h2>Nome:{nome}</h2>
    <h2>Situação:{situacao ? 'Ativo' : 'Inativo'}</h2>
      <button onClick={mudarSituacao}>Mudar Situação</button> */}
    </>
  )
}