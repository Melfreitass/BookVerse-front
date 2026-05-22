import styles from './Dicas.module.css';
import livro from '../../assets/livro.png';
import { useEffect, useState } from 'react';
import { buscarCuriosidades } from '../../services/api';

function Dicas({ idioma }) {
    const [curiosidades, setCuriosidades] = useState([]);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        async function carregarDados() {
            try {
                const dados = await buscarCuriosidades();

                setCuriosidades(dados);
            } catch (error) {
                console.error('Erro ao carregar curiosidades:', error);

                setErro(true);
            }
        }

        carregarDados();
    }, []);

    const temasRedacao = curiosidades.filter((item) => item.categoria_pt === 'Redacao');

    const curiosidadesLista = curiosidades.filter((item) => item.categoria_pt === 'Curiosidades');

    const dicasLista = curiosidades.filter((item) => item.categoria_pt === 'Dicas');

    if (erro) {
        return (
            <p className={styles.loading}>
                {idioma === 'pt' ? 'Erro ao carregar dados...' : 'Error loading data...'}
            </p>
        );
    }

    if (!curiosidades || curiosidades.length === 0) {
        return <p className={styles.loading}>{idioma === 'pt' ? 'Carregando...' : 'Loading...'}</p>;
    }

    return (
        <section className={styles.container}>
            <main className={styles.home}>
                <div className={styles.content}>
                    <span className={styles.tag}>
                        {idioma === 'pt' ? 'Área do Vestibulando' : 'Student Area'}
                    </span>

                    <h1>
                        {idioma === 'pt'
                            ? 'O Caminho para a Nota Máxima.'
                            : 'The Path to the Highest Score.'}
                    </h1>

                    <p>
                        {idioma === 'pt'
                            ? 'Acesso exclusivo aos temas mais prováveis, análises críticas da nossa equipe pedagógica e ferramentas de elite para sua aprovação.'
                            : 'Exclusive access to the most likely topics, critical analysis from our educational team and elite tools for your approval.'}
                    </p>
                </div>

                <div className={styles.img}>
                    <img src={livro} alt="Livro" />
                </div>
            </main>

            <section className={styles.temasSection}>
                <div className={styles.titulo}>
                    <h2>{idioma === 'pt' ? 'Temas de Redação' : 'Essay Topics'}</h2>

                    <p>
                        {idioma === 'pt'
                            ? 'Propostas inéditas, repertórios e argumentos para elevar sua redação.'
                            : 'Original proposals, references and arguments to improve your essay.'}
                    </p>
                </div>

                <div className={styles.temasGrid}>
                    {temasRedacao.map((item) => (
                        <div className={styles.temaCard} key={item.id}>
                            <div className={styles.temaContent}>
                                <span>
                                    {idioma === 'pt' ? item.categoria_pt : item.categoria_en}
                                </span>

                                <h3>{idioma === 'pt' ? item.titulo_pt : item.titulo_en}</h3>

                                <p>{idioma === 'pt' ? item.conteudo_pt : item.conteudo_en}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.curiosidadesSection}>
                <div className={styles.tituloCentro}>
                    <h2>{idioma === 'pt' ? 'Curiosidades Literárias' : 'Literary Curiosities'}</h2>

                    <p>
                        {idioma === 'pt'
                            ? 'Explore informações e detalhes sobre a obra Vidas Secas.'
                            : 'Explore information and details about the book Barren Lives.'}
                    </p>
                </div>

                <div className={styles.curiosidadesGrid}>
                    {curiosidadesLista.map((item) => (
                        <div className={styles.curiosidadeCard} key={item.id}>
                            <div className={styles.curiosidadeContent}>
                                <span>
                                    {idioma === 'pt' ? item.categoria_pt : item.categoria_en}
                                </span>

                                <h3>{idioma === 'pt' ? item.titulo_pt : item.titulo_en}</h3>

                                <p>{idioma === 'pt' ? item.conteudo_pt : item.conteudo_en}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.cardsSection}>
                <div className={styles.info}>
                    <h3>{idioma === 'pt' ? 'Dicas de Estudo' : 'Study Tips'}</h3>

                    <p>
                        {idioma === 'pt'
                            ? 'Estratégias e interpretações para melhorar seu desempenho.'
                            : 'Strategies and interpretations to improve your performance.'}
                    </p>
                </div>

                <div className={styles.cards}>
                    {dicasLista.map((item) => (
                        <div className={styles.cardGrande} key={item.id}>
                            <span>{idioma === 'pt' ? item.categoria_pt : item.categoria_en}</span>

                            <h2>{idioma === 'pt' ? item.titulo_pt : item.titulo_en}</h2>

                            <p>{idioma === 'pt' ? item.conteudo_pt : item.conteudo_en}</p>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
}

export default Dicas;
