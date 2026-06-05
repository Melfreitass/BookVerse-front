import styles from "./Sobre.module.css";
import escritorio from "../../assets/escritorio.png";
import { useEffect, useState, useRef } from "react";
import { buscarMembros } from "../../services/api";

function Sobre({ idioma }) {
  const [membro, setMembros] = useState([]);
  const [loading, setLoading] = useState(true);

  const scrollRef = useRef(null);

  useEffect(() => {
    async function carregarMembro() {
      try {
        const membroData = await buscarMembros();

        setMembros(membroData);
      } catch (error) {
        console.error("Erro ao carregar equipe:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarMembro();
  }, []);

  const scroll = (direcao) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direcao === "esquerda" ? -350 : 350,
        behavior: "smooth",
      });
    }
  };

  if (loading) {
    return (
      <p className={styles.loading}>
        {idioma === "pt" ? "Carregando equipe..." : "Loading team..."}
      </p>
    );
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.subtitulo}>
          {idioma === "pt" ? "EXCELÊNCIA TÉCNICA" : "TECHNICAL EXCELLENCE"}
        </p>

        <h1 className={styles.tituloPrincipal}>
          {idioma === "pt"
            ? "Literatura e Tecnologia em "
            : "Literature and Technology in "}
          <span className={styles.destaque}>
            {idioma === "pt" ? "Sinergia" : "Synergy"}
          </span>
          .
        </h1>

        <p className={styles.texto}>
          {idioma === "pt"
            ? "O BookVerse nasceu da união de mentes técnicas focadas em revolucionar o acesso ao conhecimento especializado. Nossa missão é integrar sistemas complexos a uma experiência de aprendizagem editorial de luxo."
            : "BookVerse was born from the union of technical minds focused on revolutionizing access to specialized knowledge. Our mission is to integrate complex systems into a premium editorial learning experience."}
        </p>

        <section className={styles.cards}>
          <div className={styles.cardGrande}>
            <img
              src={escritorio}
              alt={idioma === "pt" ? "Escritório" : "Office"}
              className={styles.imagem}
            />

            <div className={styles.overlay}>
              <h2>{idioma === "pt" ? "Nossa Essência" : "Our Essence"}</h2>

              <p>
                {idioma === "pt"
                  ? "O BookVerse nasceu da união entre literatura e tecnologia, criando uma biblioteca virtual focada em tornar o aprendizado mais acessível, moderno e interativo. Nosso projeto conecta Vidas Secas a novas experiências digitais por meio da integração com outras obras literárias."
                  : "BookVerse was born from the union of literature and technology, creating a virtual library focused on making learning more accessible, modern, and interactive. Our project connects Vidas Secas to new digital experiences through integration with other literary works."}
              </p>
            </div>
          </div>

          <div className={styles.cardsLado}>
            <div className={styles.cardPequeno}>
              <div className={styles.icone}>⌘</div>

              <h3>
                {idioma === "pt" ? "Dev. de Sistemas" : "Systems Development"}
              </h3>

              <span>
                {idioma === "pt" ? "INTEGRAÇÃO FLUIDA" : "SEAMLESS INTEGRATION"}
              </span>
            </div>

            <div className={styles.cardPequeno}>
              <h3>{idioma === "pt" ? "Alunos Sesi" : "Sesi Students"}</h3>

              <span>
                {idioma === "pt"
                  ? "PRECISÃO ESTRUTURAL"
                  : "STRUCTURAL PRECISION"}
              </span>
            </div>
          </div>
        </section>

        <section className={styles.equipeSection}>
          <div className={styles.equipeHeader}>
            <div>
              <h2 className={styles.equipeTitulo}>
                {idioma === "pt" ? "Nossa Equipe" : "Our Team"}
              </h2>

              <p className={styles.equipeSubtitulo}>
                {idioma === "pt"
                  ? "Conheça os profissionais responsáveis pelo desenvolvimento da plataforma."
                  : "Meet the professionals responsible for developing the platform."}
              </p>
            </div>

            <div className={styles.navegacao}>
              <button
                className={styles.botaoNav}
                onClick={() => scroll("esquerda")}
              >
                ❮
              </button>

              <button
                className={styles.botaoNav}
                onClick={() => scroll("direita")}
              >
                ❯
              </button>
            </div>
          </div>

          <div ref={scrollRef} className={styles.equipeGrid}>
            {membro.map((membro) => (
              <div key={membro.id} className={styles.cardEquipe}>
                <div className={styles.cardImagemContainer}>
                  <img
                    src={membro.fotoURL}
                    alt={membro.nome}
                    className={styles.cardImagem}
                  />
                </div>

                <div className={styles.cardConteudo}>
                  <h3 className={styles.cardNome}>{membro.nome}</h3>

                  <span className={styles.cardFuncao}>{membro.objetivo}</span>

                  <p className={styles.cardCurso}>{membro.curso}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.integracaoSection}>
          <div className={styles.integracaoCard}>
            <h2 className={styles.integracaoTitulo}>
              {idioma === "pt"
                ? "A Integração Técnica como "
                : "Technical Integration as a "}

              <span>{idioma === "pt" ? "Pilar" : "Pillar"}</span>
            </h2>

            <div className={styles.integracaoLista}>
              <div className={styles.integracaoItem}>
                <div className={styles.integracaoIcone}>✣</div>

                <div>
                  <h3>
                    {idioma === "pt"
                      ? "Conectividade de Dados"
                      : "Data Connectivity"}
                  </h3>

                  <p>
                    {idioma === "pt"
                      ? "Nossos sistemas integram e organizam informações literárias de forma contínua, permitindo uma navegação fluida entre conteúdos teóricos, análises e um questionário para estudo."
                      : "Our systems integrate and continuously organize literary information, enabling a smooth navigation between theoretical content, analyses, and a study questionnaire."}
                  </p>
                </div>
              </div>

              <div className={styles.integracaoItem}>
                <div className={styles.integracaoIcone}>✦</div>

                <div>
                  <h3>
                    {idioma === "pt"
                      ? "Estética Funcional"
                      : "Functional Aesthetics"}
                  </h3>

                  <p>
                    {idioma === "pt"
                      ? "Cada elemento da interface foi projetado com foco na experiência de leitura, combinando clareza visual e usabilidade para tornar o aprendizado mais intuitivo e envolvente."
                      : "Each element of the interface was designed with a focus on the reading experience, combining visual clarity and usability to make learning more intuitive and engaging."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Sobre;
