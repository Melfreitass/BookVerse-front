import styles from "./ObraPrincipal.module.css";
import { NavLink } from "react-router-dom";
import { FaPlay, FaBookOpen, FaBrain, FaArrowRight } from "react-icons/fa";

import livros from "../../data/livros.js";
import personagens from "../../data/personagens.js";
import curiosidades from "../../data/curiosidades.js";
import simulados from "../../data/simulados.js";

const livro = livros[0];



function ObraPrincipal({idioma}) {
  return (
    <home className={styles.obraPrincipal}>
      <section className={styles.infoPrincipal}>
        <div className={styles.infoTitulo}>
          <p className={styles.subtitulo}>
            {idioma === "pt" ? "LIVRO PRINCIPAL" : "MAIN BOOK"}
          </p>

          <h1 className={styles.titulo}>{livro.titulo}</h1>

          <p className={styles.frase}>
            {idioma === "pt" ? livro.descricao_pt : livro.descricao_en}
          </p>
        </div>
      </section>
    </home>
  );
}

export default ObraPrincipal;
