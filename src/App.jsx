import { useState } from "react";

import "./App.css";
import Titulo from "./componentes/Titulo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="contenedor">
        <h1>Welinton Suarez</h1>
        <p>Soy el mejor desarrillador</p>
        <div>imagen</div>
        <Titulo />
      </div>
    </>
  );
}

export default App;
