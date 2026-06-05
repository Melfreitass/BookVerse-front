import styles from './Biblioteca.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { buscarBibliotecaIntegrada } from '../../services/api';

function Biblioteca({ idioma }) {
    const [livros, setLivros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        async function carregarLivros() {
            try {
                const resposta = await buscarBibliotecaIntegrada();

                const livrosFormatados = resposta.map((item) => {
                    const interno = Array.isArray(item.conteudo)
                        ? item.conteudo[0]
                        : [];

                    return {
                        id: item.id,
                        statusApi: item.statusApi || 'Online',
                        titulo: interno?.titulo || item.livro || (idioma === 'pt' ? 'Sem título' : 'Untitled'),
                        capa_url: interno?.capa_url || null,
                        autor: interno?.autor || (idioma === 'pt'
                            ? 'Autor Indisponível'
                            : 'Author Unavailable')
                    };
                });

                setLivros(livrosFormatados);
            } catch (error) {
                console.error(error);
                setErro(true);
            } finally {
                setLoading(false);
            }
        }

        carregarLivros();
    }, [idioma]);

    if (loading) {
        return (
            <div className={styles.loading}>
                {idioma === 'pt'
                    ? 'Carregando biblioteca...'
                    : 'Loading library...'}
            </div>
        );
    }

    if (erro) {
        return (
            <div className={styles.loading}>
                {idioma === 'pt'
                    ? 'Erro ao carregar biblioteca.'
                    : 'Error loading library.'}
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <section className={styles.topo}>
                    <div className={styles.banner}>
                        <h2>
                            {idioma === 'pt'
                                ? 'Explore as obras mais relevantes da literatura acadêmica e clássica.'
                                : 'Explore the most relevant works of academic and classical literature.'}
                        </h2>
                    </div>
                </section>

                <section className={styles.gridLivros}>
                    {livros.map((livro, index) => {

                        const obterNomeAutorCard = () => {
                            if (!livro.autor) {
                                return idioma === 'pt'
                                    ? 'Autor não informado'
                                    : 'Author not informed';
                            }

                            if (Array.isArray(livro.autor)) {
                                return (
                                    livro.autor[0]?.nome ||
                                    (idioma === 'pt'
                                        ? 'Autor não informado'
                                        : 'Author not informed')
                                );
                            }

                            if (typeof livro.autor === 'object') {
                                return (
                                    livro.autor.nome ||
                                    (idioma === 'pt'
                                        ? 'Autor não informado'
                                        : 'Author not informed')
                                );
                            }

                            return livro.autor;
                        };

                        return (
                            <Link
                                to={`/livro/${livro.id}`}
                                key={livro.id || index}
                                className={styles.linkCard}
                            >
                                <div className={styles.cardLivro}>
                                    <div className={styles.imagemContainer}>
                                        <img
                                            src={livro.capa_url || '/capas/livroPadrao.png'}
                                            alt={livro.titulo}
                                            className={styles.imagemLivro}
                                        />
                                    </div>

                                    <div className={styles.cardConteudo}>
                                        <h3>{livro.titulo}</h3>
                                        <p>{obterNomeAutorCard()}</p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </section>
            </main>
        </div>
    );
}

export default Biblioteca;