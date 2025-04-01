import React from "react";
import Slider from "./Slider";
import "./App.css"; // Mantemos o App.css caso queira estilos adicionais

const arrayImagens = [
  { 
    url: "https://picsum.photos/800/400?random=1", 
    alt: "Imagem 1", 
    link: "#" 
  },
  { 
    url: "https://picsum.photos/800/400?random=2", 
    alt: "Imagem 2", 
    link: "#" 
  },
  { 
    url: "https://picsum.photos/800/400?random=3", 
    alt: "Imagem 3", 
    link: "#" 
  },
];

function App() {
  return (
    <div className="App">
      <h1>Slider de Imagens</h1>
      <Slider imagens={arrayImagens} />
    </div>
  );
}

export default App;
