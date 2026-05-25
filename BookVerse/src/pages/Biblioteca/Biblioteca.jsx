import styles from './Biblioteca.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { buscarBibliotecaIntegrada } from '../../services/api';

function Biblioteca() {
    const [livros, setLivros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        async function carregarLivros() {
            try {
                const resposta = await buscarBibliotecaIntegrada();

                const livrosFormatados = resposta.flatMap((livro) => livro.conteudo);

                setLivros(livrosFormatados);
            } catch (error) {
                console.error(error);

                setErro(true);
            } finally {
                setLoading(false);
            }
        }

        carregarLivros();
    }, []);

    if (loading) {
        return <div className={styles.loading}>Carregando biblioteca...</div>;
    }

    if (erro) {
        return <div className={styles.loading}>Erro ao carregar biblioteca.</div>;
    }

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <section className={styles.topo}>
                    <div className={styles.banner}>
                        <h2>
                            Explore as obras mais relevantes da literatura acadêmica e clássica.
                        </h2>
                    </div>
                </section>

                <section className={styles.gridLivros}>
                    {livros.map((livro, index) => (
                        <Link
                            to={`/livro/${livro.id || index}`}
                            key={index}
                            className={styles.linkCard}>
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

                                    <p>{livro.autor?.nome}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </section>
            </main>
        </div>
    );
}

export default Biblioteca;
