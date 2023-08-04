 import './App.css'
 import { Exemplo } from './Exemplo';
 export default function App ({nome}) {
    const listaAlunos = ["joão", "maria", "marcos", "tereza", "tommaso"];
    return (
      <div>
        <h1>Meu nome é {nome}</h1>
        <Exemplo lista={listaAlunos} />
      </div>

    );
}
 
