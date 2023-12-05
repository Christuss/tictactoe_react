import { useState } from "react";
import "./App.css";
import Jatekter from "./components/JatekTer";
import Model from "./model/TicTacToeModel.js"
//elem komponens létrehoz
//onClick -> console

const MODEL = new Model();

function App() {

  const [lista, setLista] = useState([...MODEL.getLista()])

  function click(index) {
    console.log("pop1");
    MODEL.setLista(index);
    setLista([...MODEL.getLista()]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tictactoe</h1>
      </header>
      <Jatekter click={click} list = {lista}/>
    </div>
  );
}

export default App;
