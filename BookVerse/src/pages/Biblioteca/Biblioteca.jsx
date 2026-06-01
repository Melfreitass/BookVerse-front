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

                // CORREÇÃO AQUI: Em vez de destruir a raiz com flatMap, criamos uma lista unificada
                const livrosFormatados = resposta.map((item) => {
           
                    const interno = Array.isArray(item.conteudo) ? item.conteudo[0] : [];

                    return {
                        id: item.id, 
                        statusApi: item.statusApi || 'Online',
                        titulo: interno?.titulo || item.livro || 'Sem título',
                        capa_url: interno?.capa_url || null,
                        autor: interno?.autor || 'Autor Indisponível'
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
                    {livros.map((livro, index) => {
            
                        const obterNomeAutorCard = () => {
                            if (!livro.autor) return 'Autor não informado';
                            if (Array.isArray(livro.autor)) return livro.autor[0]?.nome || 'Autor não informado';
                            if (typeof livro.autor === 'object') return livro.autor.nome || 'Autor não informado';
                            return livro.autor;
                        };

                        return (
                            <Link
                                to={`/livro/${livro.id}`} // Removido o '|| index' -> Agora envia o ID real perfeitamente!
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