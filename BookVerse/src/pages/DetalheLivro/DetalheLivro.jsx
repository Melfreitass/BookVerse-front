import styles from './DetalheLivro.module.css';
// Importamos a função correta que já existe no seu api.js
import { buscarLivroPorId } from '../../services/api';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DetalheLivro() {
    const { id } = useParams(); // Esse id vindo da URL agora será o idOrigin passado para o back
    const navigate = useNavigate();

    const [livro, setLivro] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    if (!id) return;

    async function carregarLivro() {
        try {
            // Chama a função do seu api.js (buscarLivroPorId) enviando o ID (1, 2, 3 ou 4)
            const respostaApi = await buscarLivroPorId(id);
            console.log("=== DADO RECEBIDO DO BACK-END ===", respostaApi);

            // Verifica se o back trouxe a propriedade 'data'
            if (respostaApi && respostaApi.data) {
                const livroDados = respostaApi.data;

                // Alimenta o estado de forma plana
                setLivro({
                    idOrigin: livroDados.idOrigin,
                    titulo: livroDados.titulo,
                    autor: livroDados.autor,
                    capa_url: livroDados.capa_url,
                    ano: livroDados.ano,
                    genero_pt: livroDados.genero_pt,
                    enredo_pt: livroDados.enredo_pt,
                    status: 'Online', // Como passou pelo switch e fetch, está online
                    categoria: 'Geral',
                    formato: 'Digital / Físico'
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
}, [id]);

    if (loading) {
        return <p className={styles.loading}>Carregando livro...</p>;
    }

    if (!livro) {
        return (
            <div className={styles.page}>
                <main className={styles.main}>
                    <p className={styles.loading}>Livro não encontrado. (ID pesquisado: {id})</p>
                    <div className={styles.botao} style={{ textAlign: 'center', marginTop: '20px' }}>
                        <button className={styles.botaoPrincipal} onClick={() => navigate(-1)}>
                            Voltar para a Biblioteca
                        </button>
                    </div>
                </main>
            </div>
        );
    }

    // Mantida sua função de segurança para o nome do autor
    const obterNomeAutor = () => {
        if (!livro.autor) return 'Autor Indisponível';
        if (Array.isArray(livro.autor)) {
            return livro.autor[0]?.nome || 'Autor Indisponível';
        }
        if (typeof livro.autor === 'object') {
            return livro.autor.nome || 'Autor Indisponível';
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
                            <div className={styles.semCapa} style={{ padding: '40px', background: '#222', borderRadius: '8px', textAlign: 'center' }}>
                                Sem Capa
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
                                <span>PUBLICAÇÃO</span>
                                <strong>{livro.ano}</strong>
                            </div>

                            <div className={styles.infoItem}>
                                <span>IDIOMA</span>
                                <strong>{livro.genero_pt}</strong>
                            </div>
                        </div>

                        <div className={styles.formato}>
                            <span className={styles.formatoIcone}>Descrição</span>
                            <p>{livro.formato}</p>
                        </div>

                        <p className={styles.enredo_pt}>
                            {livro.enredo_pt}
                        </p>

                        <div className={styles.botao}>
                            <button className={styles.botaoPrincipal} onClick={() => navigate(-1)}>
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
