import styles from "./DetalheLivro.module.css";

import { buscarLivroPorId } from "../../services/api";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function DetalheLivro({ idioma }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [livro, setLivro] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    async function carregarLivro() {
      try {
        const respostaApi = await buscarLivroPorId(id);
        console.log("=== DADO RECEBIDO DO BACK-END ===", respostaApi);

        if (respostaApi && respostaApi.data) {
          const livroDados = respostaApi.data;

          setLivro({
            idOrigin:
              livroDados.idOrigin || livroDados.id || livroDados._id || null,

            titulo:
              livroDados.titulo ||
              livroDados.title ||
              livroDados.tituloDoLivro ||
              livroDados.tituloPT ||
              livroDados.nome ||
              (idioma === "pt" ? "Título não informado" : "Title not informed"),

            autor:
              livroDados.autor ||
              livroDados.author ||
              livroDados.autores ||
              null,

            capa_url:
              livroDados.capa_url ||
              livroDados.capa ||
              livroDados.image ||
              livroDados.capaURL ||
              livroDados.foto ||
              null,

            ano:
              livroDados.ano ||
              livroDados.year ||
              livroDados.anoPublicacao ||
              livroDados.publicacao ||
              "N/A",

            genero_pt:
              livroDados.genero_pt ||
              livroDados.genero ||
              livroDados.generoPT ||
              (idioma === "pt" ? "Gênero não informado" : "Genre not informed"),

            genero_en:
              livroDados.genero_en ||
              livroDados.genre ||
              livroDados.generoEN ||
              "Genre not informed",

            enredo_pt:
              livroDados.enredo_pt ||
              livroDados.resumo ||
              livroDados.descricao_pt ||
              (idioma === "pt"
                ? "Enredo não informado"
                : "Description not informed"),

            enredo_en:
              livroDados.enredo_en ||
              livroDados.description ||
              livroDados.resumoEn ||
              livroDados.resumo_en ||
              livroDados.descricao_en ||
              "Description not informed",

            status: "Online",
            categoria: idioma === "pt" ? "Geral" : "General",
            formato:
              idioma === "pt" ? "Digital / Físico" : "Digital / Physical",
          });
        } else {
          console.error(
            `Não foi possível carregar os dados do livro de ID: ${id}`,
          );
        }
      } catch (error) {
        console.error("Erro ao carregar detalhe do livro:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarLivro();
  }, [id, idioma]);

  if (loading) {
    return (
      <p className={styles.loading}>
        {idioma === "pt" ? "Carregando livro..." : "Loading book..."}
      </p>
    );
  }

  if (!livro) {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <p className={styles.loading}>
            {idioma === "pt"
              ? `Livro não encontrado. (ID pesquisado: ${id})`
              : `Book not found. (Searched ID: ${id})`}
          </p>

          <div
            className={styles.botao}
            style={{
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            <button
              className={styles.botaoPrincipal}
              onClick={() => navigate(-1)}
            >
              {idioma === "pt" ? "Voltar para a Biblioteca" : "Back to Library"}
            </button>
          </div>
        </main>
      </div>
    );
  }

  const obterNomeAutor = () => {
    if (!livro.autor) {
      return idioma === "pt" ? "Autor Indisponível" : "Author Unavailable";
    }

    if (Array.isArray(livro.autor)) {
      return (
        livro.autor[0]?.nome ||
        livro.autor[0]?.name ||
        livro.autor[0]?.nomeAutor ||
        (idioma === "pt" ? "Autor Indisponível" : "Author Unavailable")
      );
    }

    if (typeof livro.autor === "object") {
      return (
        livro.autor.nome ||
        livro.autor.name ||
        livro.autor.nomeAutor ||
        (idioma === "pt" ? "Autor Indisponível" : "Author Unavailable")
      );
    }

    return livro.autor;
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.container}>
          <div className={styles.imagemContainer}>
            {livro.capa_url ? (
              <img
                src={livro.capa_url}
                alt={livro.titulo}
                className={styles.capa_url}
              />
            ) : (
              <div
                className={styles.semCapa}
                style={{
                  padding: "40px",
                  background: "#222",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                {idioma === "pt" ? "Sem Capa" : "No Cover"}
              </div>
            )}
          </div>

          <div className={styles.infoContainer}>
            <div className={styles.topo}>
              <div className={styles.badges}>
                <span className={styles.badgeStatus}>{livro.status}</span>

                <span className={styles.badgeCategoria}>{livro.categoria}</span>
              </div>

              <h1 className={styles.titulo}>{livro.titulo}</h1>

              <h2 className={styles.autor}>{obterNomeAutor()}</h2>
            </div>

            <div className={styles.infos}>
              <div className={styles.infoItem}>
                <span>{idioma === "pt" ? "PUBLICAÇÃO" : "PUBLICATION"}</span>

                <strong>{livro.ano}</strong>
              </div>

        
              <div className={styles.infoItem}>
                <span>{idioma === "pt" ? "GÊNERO" : "GENRE"}</span>

                <strong>
                  {idioma === "pt" ? livro.genero_pt : livro.genero_en}
                </strong>
              </div>
            </div>

            <div className={styles.formato}>
              <span className={styles.formatoIcone}>
                {idioma === "pt" ? "Descrição" : "Description"}
              </span>

              <p>{livro.formato}</p>
            </div>

            <p className={styles.enredo_pt}>
              {idioma === "pt" ? livro.enredo_pt : livro.enredo_en}
            </p>

            <div className={styles.botao}>
              <button
                className={styles.botaoPrincipal}
                onClick={() => navigate(-1)}
              >
                {idioma === "pt"
                  ? "Voltar para a Biblioteca"
                  : "Back to Library"}
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default DetalheLivro;