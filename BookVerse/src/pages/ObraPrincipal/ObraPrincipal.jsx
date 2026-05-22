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

  return (
    <main className={styles.obraPrincipal}>
      <section className={styles.infoPrincipal}>
        <div className={styles.bgTitulo}>
            <h1 className={styles.titulo}>
                {livro ? livro.titulo.toUpperCase() : "..."}
            </h1>
        </div>

        <div className={styles.infoTitulo}>
          <p className={styles.subtitulo}>
            {idioma === "pt" ? "LIVRO PRINCIPAL" : "MAIN BOOK"}
          </p>

          <div className={styles.linha}></div>

          <p className={styles.frase}>
            {livro ? idioma === "pt" ? livro.descricao_pt : livro.descricao_en : "Carregando descrição"}
          </p>
        </div>
      </section>

      <section className={styles.resumoArea}>
        <div className={styles.resumoCard}>
            <div className={styles.resumoHeader}>
                <FaBookOpen className={styles.iconResumo} />

                <div>
                    <h3 className={styles.resumoTitulo}>
                        {livro ? idioma ==="pt" ? "Resumo Dinâmico" : "Dynamic Summary" : "Carregando Resumo"}
                    </h3>
                </div>
            </div>

            <p className={styles.resumoTexto}>
                { livro ?
                    idioma === "pt" ? livro.enredo_pt || "Sem resumo disponível" : livro.enredo_en || "No summary available"
                : "Carregando resumo..."
                }
            </p>

            <div className={styles.infoLivro}>
                <div className={styles.infoBox}>
                    <span>
                        {idioma === "pt" ? "GÊNERO" : "GENRE"}
                    </span>

                    <p>
                        { livro ? idioma === "pt" ? livro.genero_pt : livro.genero_en : "..."
                        }
                    </p>
                </div>

                <div className={styles.infoBox}>
                    <span>
                        {idioma === "pt" ? "ANO" : "YEAR"}
                    </span>

                    <p>{livro ? livro.ano : "..."}</p>
                </div>

                <div className={styles.infoBox}>
                    <span>
                        {idioma === "pt" ? "MOVIMENTO" : "MOVEMENT"}
                    </span>

                    <p>
                        { livro ?
                            idioma === "pt" ? livro.movimento_pt : livro.movimento_en
                            : "..."
                        }
                </p>
                </div>
            </div>
        </div>

        <div className={styles.capaLivro}>
            <img src={livro?.capa_url} alt={livro?.titulo || "Carregando"} />
        </div>

      </section>
    </main>
  );
}

export default ObraPrincipal;
