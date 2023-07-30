import './App.css';
import Metodo01 from './componentes/Hello/Metodo01';
import Metodo02 from './componentes/Hello/Metodo02';
import Metodo03 from './componentes/Hello/Metodo03';
import Msg from './componentes/Hello/Metodo04';
import Hello from './componentes/Hello/Metodo05';
import World from './componentes/Hello/Metodo06';
import HelloWorld from './componentes/Hello/Metodo07';
import Msage from './componentes/Hello/Metodo08';
import Mod9 from './componentes/Hello/Metodo09';
import Mod10 from './componentes/Hello/Metodo10';

function App() {
  return (
    <div className="App">
     <h1>Hello World - Welcome</h1> 
      <Metodo01 />
      <Metodo02 />
      <Metodo03 />
      <Msg M1='Hello ' M2='World 04' />
      <Hello />
      <World />
      <HelloWorld />
      <Msage />
      <Mod9 />
      <Mod10 />

      <br></br>
      <h2>Dez forma de exibir Hello World</h2>
    </div>
  );
}

export default App;
