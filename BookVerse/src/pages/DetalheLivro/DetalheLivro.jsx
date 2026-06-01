import styles from './DetalheLivro.module.css';
import { buscarBibliotecaIntegrada } from '../../services/api';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DetalheLivro() {
    const { id } = useParams();
    const navigate = useNavigate(); // Hook para fazer o botão voltar funcionar nativamente

    const [livro, setLivro] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

    

        async function carregarLivro() {
            try {
                // Chama a sua função fetch do api.js
                const respostaApi = await buscarBibliotecaIntegrada();
                console.log("=== SEUS DADOS DA API ===", respostaApi);

                if (respostaApi && Array.isArray(respostaApi)) {
                    // 1. FILTRAGEM: Busca o ID diretamente na RAIZ do objeto principal (Nova Estrutura)
                    const livroEncontrado = respostaApi.find(item => String(item.id).trim() === String(id).trim());

                    if (livroEncontrado) {
                        // 2. Extrai o conteúdo secundário de dentro do array com segurança
                        const interno = Array.isArray(livroEncontrado.conteudo) 
                            ? livroEncontrado.conteudo[0] 
                            : livroEncontrado.conteudo;

                        // 3. Monta o estado unificado deixando os dados "planos" para as suas tags lerem
                        setLivro({
                            id: livroEncontrado.id,
                            titulo: interno?.titulo || livroEncontrado.livro || 'Título Indisponível',
                            autor: interno?.autor || 'Autor Indisponível',
                            capa_url: interno?.capa_url || null,
                            ano: interno?.ano || 'Não informado',
                            genero_pt: interno?.genero_pt || 'Não informado',
                            enredo_pt: interno?.enredo_pt || 'Sem enredo disponível.',
                            status: interno?.status || livroEncontrado.statusApi || 'Disponível',
                            categoria: interno?.categoria || 'Geral',
                            formato: interno?.formato || 'Digital / Físico'
                        });
                    } else {
                        console.error(`Não foi possível encontrar o livro com ID raiz: ${id}`);
                    }
                }
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

    // Função interna que impede o crash de "Objects are not valid as a React child"
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
                                className={styles.capa_url} // Mantido exatamente a sua classe original
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