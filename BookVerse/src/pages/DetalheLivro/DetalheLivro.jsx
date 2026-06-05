import styles from './DetalheLivro.module.css';

import { buscarLivroPorId } from '../../services/api';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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
                console.log('=== DADO RECEBIDO DO BACK-END ===', respostaApi);

                if (respostaApi && respostaApi.data) {
                    const livroDados = respostaApi.data;

                    setLivro({
                        idOrigin: livroDados.idOrigin,
                        titulo: livroDados.titulo,
                        autor: livroDados.autor,
                        capa_url: livroDados.capa_url,
                        ano: livroDados.ano,
                        genero_pt: livroDados.genero_pt,
                        enredo_pt: livroDados.enredo_pt,
                        status: 'Online',
                        categoria: idioma === 'pt' ? 'Geral' : 'General',
                        formato:
                            idioma === 'pt'
                                ? 'Digital / Físico'
                                : 'Digital / Physical'
                    });
                } else {
                    console.error(`Não foi possível carregar os dados do livro de ID: ${id}`);
                }
            } catch (error) {
                console.error('Erro ao carregar detalhe do livro:', error);
            } finally {
                setLoading(false);
            }
        }

        carregarLivro();
    }, [id, idioma]);

    if (loading) {
        return (
            <p className={styles.loading}>
                {idioma === 'pt'
                    ? 'Carregando livro...'
                    : 'Loading book...'}
            </p>
        );
    }

    if (!livro) {
        return (
            <div className={styles.page}>
                <main className={styles.main}>
                    <p className={styles.loading}>
                        {idioma === 'pt'
                            ? `Livro não encontrado. (ID pesquisado: ${id})`
                            : `Book not found. (Searched ID: ${id})`}
                    </p>

                    <div
                        className={styles.botao}
                        style={{
                            textAlign: 'center',
                            marginTop: '20px'
                        }}
                    >
                        <button
                            className={styles.botaoPrincipal}
                            onClick={() => navigate(-1)}
                        >
                            {idioma === 'pt'
                                ? 'Voltar para a Biblioteca'
                                : 'Back to Library'}
                        </button>
                    </div>
                </main>
            </div>
        );
    }

    const obterNomeAutor = () => {
        if (!livro.autor) {
            return idioma === 'pt'
                ? 'Autor Indisponível'
                : 'Author Unavailable';
        }

        if (Array.isArray(livro.autor)) {
            return (
                livro.autor[0]?.nome ||
                (idioma === 'pt'
                    ? 'Autor Indisponível'
                    : 'Author Unavailable')
            );
        }

        if (typeof livro.autor === 'object') {
            return (
                livro.autor.nome ||
                (idioma === 'pt'
                    ? 'Autor Indisponível'
                    : 'Author Unavailable')
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
                                    padding: '40px',
                                    background: '#222',
                                    borderRadius: '8px',
                                    textAlign: 'center'
                                }}
                            >
                                {idioma === 'pt'
                                    ? 'Sem Capa'
                                    : 'No Cover'}
                            </div>
                        )}
                    </div>

                    <div className={styles.infoContainer}>
                        <div className={styles.topo}>
                            <div className={styles.badges}>
                                <span className={styles.badgeStatus}>
                                    {livro.status}
                                </span>

                                <span className={styles.badgeCategoria}>
                                    {livro.categoria}
                                </span>
                            </div>

                            <h1 className={styles.titulo}>
                                {livro.titulo}
                            </h1>

                            <h2 className={styles.autor}>
                                {obterNomeAutor()}
                            </h2>
                        </div>

                        <div className={styles.infos}>
                            <div className={styles.infoItem}>
                                <span>
                                    {idioma === 'pt'
                                        ? 'PUBLICAÇÃO'
                                        : 'PUBLICATION'}
                                </span>

                                <strong>{livro.ano}</strong>
                            </div>

                            <div className={styles.infoItem}>
                                <span>
                                    {idioma === 'pt'
                                        ? 'IDIOMA'
                                        : 'LANGUAGE'}
                                </span>

                                <strong>{livro.genero_pt}</strong>
                            </div>
                        </div>

                        <div className={styles.formato}>
                            <span className={styles.formatoIcone}>
                                {idioma === 'pt'
                                    ? 'Descrição'
                                    : 'Description'}
                            </span>

                            <p>{livro.formato}</p>
                        </div>

                        <p className={styles.enredo_pt}>
                            {livro.enredo_pt}
                        </p>

                        <div className={styles.botao}>
                            <button
                                className={styles.botaoPrincipal}
                                onClick={() => navigate(-1)}
                            >
                                {idioma === 'pt'
                                    ? 'Voltar para a Biblioteca'
                                    : 'Back to Library'}
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default DetalheLivro;