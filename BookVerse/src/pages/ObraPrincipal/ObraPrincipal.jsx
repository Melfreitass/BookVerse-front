import styles from "./ObraPrincipal.module.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
import { FaPlay, FaBookOpen, FaBrain, FaArrowRight } from "react-icons/fa";
import { buscarLivros, buscarPersonagem, buscarCuriosidades, buscarSimulados } from "../../services/api"

function ObraPrincipal({ idioma }) {
    const [livro, setLivro] = useState(null)
    const [personagem, setPersonagem] = useState([]);
    const [curiosidades, setCuriosidades] = useState([]);
    const [simulados, setSimulados] = useState([]);

    useEffect(() => {
        async function carregarDados() {
            try {

                //livro
                const livrosData =
                    await buscarLivros();

                setLivro(livrosData[0]);

                //personagem
                const personagemData =
                   await buscarPersonagem();

                setPersonagem(personagemData);

                //livro
                const curiosidadesData =
                   await buscarCuriosidades();

               setCuriosidades(curiosidadesData);

                //simulados
                const simuladosData =
                    await buscarSimulados();

                setSimulados(simuladosData);

            }

            catch (error) {
                console.error(
                    "Erro ao carregar dados:",
                    error
                );
            }
        }

        carregarDados();
    }, []);

    if (!livro) {
        return (
            <p className={styles.loading}>
                Carregando...
            </p>
        );
    }

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
