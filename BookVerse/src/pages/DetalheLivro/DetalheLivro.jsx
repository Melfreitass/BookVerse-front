import styles from './DetalheLivro.module.css';
import { buscarLivroPorId } from '../../services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DetalheLivro() {
    const { id } = useParams();

    const [livro, setLivro] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function carregarLivro() {
            try {
                const livroData = await buscarLivroPorId(id);

                console.log(livroData);

                setLivro(livroData);
            } catch (error) {
                console.error('Erro ao carregar livro:', error);
            } finally {
                setLoading(false);
            }
        }

        carregarLivro();
    }, [id]);

    if (loading) {
        return <p className={styles.loading}>Carregando livro...</p>;
    }

    if (!livro) {
        return <p className={styles.loading}>Livro não encontrado.</p>;
    }

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <section className={styles.container}>
                    <div className={styles.imagemContainer}>
                        <img
                            src={livro.capa}
                            alt={livro.titulo}
                            className={styles.capa}
                        />
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
                                {livro.autor}
                            </h2>
                        </div>

                        <div className={styles.infos}>
                            <div className={styles.infoItem}>
                                <span>PUBLICAÇÃO</span>

                                <strong>{livro.ano}</strong>
                            </div>

                            <div className={styles.infoItem}>
                                <span>IDIOMA</span>

                                <strong>{livro.genero_pt}</strong>
                            </div>
                        </div>

                        <div className={styles.formato}>
                            <span className={styles.formatoIcone}>📄</span>

                            <p>{livro.formato}</p>
                        </div>

                        <p className={styles.sinopse}>
                            {livro.sinopse}
                        </p>

                        <div className={styles.botoao}>
                            <button className={styles.botaoPrincipal}>
                                Voltar para a Biblioteca
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default DetalheLivro;
