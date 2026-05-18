import styles from './Biblioteca.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { buscarLivros } from '../../services/api';

function Biblioteca() {
    const [livros, setLivros] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function carregarLivros() {
            try {
                const livrosData = await buscarLivros();
                setLivros(livrosData);
            } catch (error) {
                console.error('Erro ao carregar livros:', error);
            } finally {
                setLoading(false);
            }
        }

        carregarLivros();
    }, []);

    if (loading) {
        return <p className={styles.loading}>Carregando...</p>;
    }

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <section className={styles.topo}>
                    <div className={styles.filtros}>
                        <div className={styles.filtro}>
                            <span>AUTOR</span>

                            <button>Todos os Autores</button>
                        </div>
                    </div>

                    <div className={styles.banner}>
                        <h2>
                            Explore as obras mais relevantes da literatura acadêmica e clássica.
                        </h2>
                    </div>
                </section>

                <section className={styles.gridLivros}>
                    {livros.map((livro) => (
                        <Link to={`/livro/${livro.id}`} key={livro.id} className={styles.linkCard}>
                            <div className={styles.cardLivro}>
                                <div className={styles.imagemContainer}>
                                    <img
                                        src={livro.capa_url}
                                        alt={livro.titulo}
                                        className={styles.imagemLivro}
                                    />
                                </div>

                                <div className={styles.cardConteudo}>
                                    <h3>{livro.titulo}</h3>

                                    <p>{livro.autor}</p>
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
