import styles from './Dicas.module.css';
import livro from '../../assets/livro.png';
import { useEffect, useState } from 'react';
import { buscarCuriosidades } from '../../services/api';

function Dicas({ idioma }) {
    const [curiosidades, setCuriosidades] = useState([]);

    useEffect(() => {
        async function carregarDados() {
            try {
                const dados = await buscarCuriosidades();

                setCuriosidades(dados);
            } catch (error) {
                console.error('Erro ao carregar curiosidades:', error);
            }
        }

        carregarDados();
    }, []);

    const temasRedacao = curiosidades.filter((item) => item.categoria_pt === 'temaRedacao');

    const curiosidadesLista = curiosidades.filter((item) => item.categoria_pt === 'curiosidade');

    return (
        <section className={styles.container}>
            <main className={styles.home}>
                <div className={styles.content}>
                    <span className={styles.tag}>Área do Vestibulando</span>

                    <h1>O Caminho para a Nota Máxima.</h1>

                    <p>
                        Acesso exclusivo aos temas mais prováveis, análises críticas da nossa equipe
                        pedagógica e ferramentas de elite para sua aprovação.
                    </p>
                </div>

                <div className={styles.img}>
                    <img src={livro} alt="Livro" />
                </div>
            </main>

            <section className={styles.temasSection}>
                <div className={styles.titulo}>
                    <h2>Temas de Redação</h2>

                    <p>Propostas inéditas, repertórios e argumentos para elevar sua redação.</p>
                </div>

                <div className={styles.temasGrid}>
                    {temasRedacao.map((item) => (
                        <div className={styles.temaCard} key={item.id}>
                            <div className={styles.temaContent}>
                                <span>TEMA</span>

                                <h3>{idioma === 'pt' ? item.titulo_pt : item.titulo_en}</h3>

                                <p>{idioma === 'pt' ? item.conteudo_pt : item.conteudo_en}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.curiosidadesSection}>
                <div className={styles.tituloCentro}>
                    <h2>Curiosidades Literárias</h2>

                    <p>Explore informações e detalhes sobre a obra Vidas Secas.</p>
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
        </section>
    );
}

export default Dicas;
