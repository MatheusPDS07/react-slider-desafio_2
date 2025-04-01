import React, { useState, useEffect } from "react";
import styles from "./Slider.module.css";

const Slider = ({ imagens }) => {
  const [indiceAtual, setIndiceAtual] = useState(0);

  const proximaImagem = () => {
    setIndiceAtual((prev) => (prev + 1) % imagens.length);
  };

  const imagemAnterior = () => {
    setIndiceAtual((prev) => (prev - 1 + imagens.length) % imagens.length);
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      proximaImagem();
    }, 3000);

    return () => clearInterval(intervalo);
  }, [indiceAtual]);

  return (
    <div className={styles.slider}>
      <div 
        className={styles.sliderContent}
        style={{ transform: `translateX(-${indiceAtual * 100}%)` }}
      >
        {imagens.map((imagem, index) => (
          <div key={index} className={styles.slide}>
            <a href={imagem.link} target="_blank" rel="noopener noreferrer">
              <img
                src={imagem.url}
                alt={imagem.alt}
                className={styles.imagem}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x400?text=Imagem+não+carregada';
                }}
              />
            </a>
          </div>
        ))}
      </div>

      <button className={styles.setaEsquerda} onClick={imagemAnterior}>◀</button>
      <button className={styles.setaDireita} onClick={proximaImagem}>▶</button>
      
      <div className={styles.paginacao}>
        {imagens.map((_, index) => (
          <span
            key={index}
            className={index === indiceAtual ? styles.ativo : ''}
            onClick={() => setIndiceAtual(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;