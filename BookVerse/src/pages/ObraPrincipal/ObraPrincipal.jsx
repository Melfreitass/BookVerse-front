import styles from "./ObraPrincipal.module.css";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaBookOpen, FaChevronRight } from "react-icons/fa";
import { buscarLivros, buscarPersonagem} from "../../services/api"
import CardPersonagem from "../../components/CardPersonagem/CardPersonagem"

function ObraPrincipal({ idioma }) {
    const navigate = useNavigate();
    const scrollRef = useRef(null);
    const [livro, setLivro] = useState(null)
    const [personagem, setPersonagem] = useState([]);

    function scrollLeft() {
        scrollRef.current.scrollBy({
            left: -320,
            bahavior: "smooth",
        })
    }

    function scrollRight() {
        scrollRef.current.scrollBy({
            left: 320,
            bahavior: "smooth",
        })
    }

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
                  <h1 className={styles.titulo}>{livro ? livro.titulo.toUpperCase() : '...'}</h1>
              </div>

              <div className={styles.infoTitulo}>
                  <p className={styles.subtitulo}>
                      {idioma === 'pt' ? 'LIVRO PRINCIPAL' : 'MAIN BOOK'}
                  </p>

                  <div className={styles.linha}></div>

                  <p className={styles.frase}>
                      {livro
                          ? idioma === 'pt'
                              ? livro.descricao_pt
                              : livro.descricao_en
                          : 'Carregando descrição'}
                  </p>
              </div>
          </section>

          <section className={styles.resumoArea}>
              <div className={styles.resumoCard}>
                  <div className={styles.resumoHeader}>
                      <FaBookOpen className={styles.iconResumo} />

                      <div>
                          <h3 className={styles.resumoTitulo}>
                              {livro
                                  ? idioma === 'pt'
                                      ? 'Resumo Dinâmico'
                                      : 'Dynamic Summary'
                                  : 'Carregando Resumo'}
                          </h3>
                      </div>
                  </div>

                  <p className={styles.resumoTexto}>
                      {livro
                          ? idioma === 'pt'
                              ? livro.enredo_pt || 'Sem resumo disponível'
                              : livro.enredo_en || 'No summary available'
                          : 'Carregando resumo...'}
                  </p>

                  <div className={styles.infoLivro}>
                      <div className={styles.infoBox}>
                          <span>{idioma === 'pt' ? 'GÊNERO' : 'GENRE'}</span>

                          <p>
                              {livro
                                  ? idioma === 'pt'
                                      ? livro.genero_pt
                                      : livro.genero_en
                                  : '...'}
                          </p>
                      </div>

                      <div className={styles.infoBox}>
                          <span>{idioma === 'pt' ? 'ANO' : 'YEAR'}</span>

                          <p>{livro ? livro.ano : '...'}</p>
                      </div>

                      <div className={styles.infoBox}>
                          <span>{idioma === 'pt' ? 'MOVIMENTO' : 'MOVEMENT'}</span>

                          <p>
                              {livro
                                  ? idioma === 'pt'
                                      ? livro.movimento_pt
                                      : livro.movimento_en
                                  : '...'}
                          </p>
                      </div>
                  </div>
              </div>

              <div className={styles.capaLivro}>
                  <img src={livro?.capa_url} alt={livro?.titulo || 'Carregando'} />
              </div>
          </section>

          <section className={styles.personagensSection}>
              <div className={styles.personagensHeader}>
                  <h2 className={styles.personagensTitulo}>
                      {idioma === 'pt' ? 'Análise de Personagens' : 'Character Analysis'}
                  </h2>

                  <div className={styles.scrollButtons}>
                      <button onClick={scrollLeft} className={styles.scrollBtn}>
                          <FaChevronLeft />
                      </button>

                      <button onClick={scrollRight} className={styles.scrollBtn}>
                          <FaChevronRight />
                      </button>
                  </div>
              </div>

              <div className={styles.personagensGrid} ref={scrollRef}>
                  {personagem.map((item) => (
                      <CardPersonagem key={item.id} personagem={item} idioma={idioma} />
                  ))}
              </div>
          </section>

          <section className={styles.contextoSection}>
              <div className={styles.contextoTexto}>
                  <h2 className={styles.contextoTitulo}>
                      {idioma === 'pt' ? 'Contexto Histórico' : 'Historical Context'}
                  </h2>

                  <p className={styles.contextoDescricao}>
                      {idioma === 'pt'
                          ? livro?.contexto_historico_pt || 'Carregando contexto...'
                          : livro?.contexto_historico_en || 'Loading context...'}
                  </p>
              </div>

              <div className={styles.anoCard}>
                  <h2>{livro?.ano || '...'}</h2>

                  <span>{idioma === 'pt' ? 'ANO DE PUBLICAÇÃO' : 'PUBLICATION YEAR'}</span>
              </div>
          </section>

          <section className={styles.autorSection}>
              <h2>{idioma === 'pt' ? 'Sobre o Autor' : 'About the Author'}</h2>

              <p>{idioma === 'pt' ? livro?.detalhes_autor_pt : livro?.detalhes_autor_en}</p>
          </section>

          <section className={styles.analiseSection}>
              <div className={styles.analiseCard}>
                  <h3>{idioma === 'pt' ? 'Estilo de Escrita' : 'Writing Style'}</h3>

                  <p>{idioma === 'pt' ? livro?.estilo_escrita_pt : livro?.estilo_escrita_en}</p>
              </div>

              <div className={styles.analiseCard}>
                  <h3>{idioma === 'pt' ? 'Verossimilhança' : 'Verisimilitude'}</h3>

                  <p>{idioma === 'pt' ? livro?.verossimilhanca_pt : livro?.verossimilhanca_en}</p>
              </div>

              <div className={styles.analiseCard}>
                  <h3>
                      {idioma === 'pt' ? 'Características Literárias' : 'Literary Characteristics'}
                  </h3>

                  <p>
                      {idioma === 'pt'
                          ? livro?.caracteristicas_literarias_pt
                          : livro?.caracteristicas_literarias_en}
                  </p>
              </div>
          </section>

          <section className={styles.videoSection}>
              <h2 className={styles.videoTitulo}>
                  {idioma === 'pt'
                      ? 'Um pouco mais sobre o livro...'
                      : 'Learn more about the book...'}
              </h2>

              <div className={styles.videoContainer}>
                  {livro?.video_url ? (
                      <iframe
                          src="https://www.youtube.com/embed/3shsFZRYfN0"
                          title="Vídeo do livro"
                          allowFullScreen></iframe>
                  ) : (
                      <div className={styles.videoPlaceholder}>Carregando vídeo...</div>
                  )}
              </div>

              <div className={styles.videoInfo}>
                  <p>
                      {idioma === 'pt'
                          ? 'Acesse nosso simulado exclusivo sobre a obra.'
                          : 'Access our exclusive quiz about the book'}
                  </p>

                  <div className={styles.videoButtons}>
                      <button
                          className={styles.btnPrincipal}
                          onClick={() => navigate('/simulados')}>
                          {idioma === 'pt' ? 'Iniciar Simulado' : 'Start Quiz'}
                      </button>
                  </div>
              </div>
          </section>

          <section className={styles.conclusaoSection}>
              <h2>
                  {idioma === 'pt'
                      ? 'Conclusão'
                      : 'Conclusion'}
              </h2>

              <p>

              </p>
          </section>
      </main>
  );
}

export default ObraPrincipal;
