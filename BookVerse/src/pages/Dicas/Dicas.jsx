import styles from './Dicas.module.css';
import livro from '../../assets/livro.png';

function Dicas() {
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

            <section className={styles.cardsSection}>
                <div className={styles.info}>
                    <h3>Interpretação da Equipe</h3>

                    <p>Análises detalhadas sobre as tendências dos grandes vestibulares.</p>
                </div>

                <div className={styles.cards}>
                    <div className={styles.cardGrande}>
                        <span>DICAS</span>

                        <h2>💕</h2>

                        <button>Ler Análise</button>
                    </div>

                    <div className={styles.cardPequeno}>
                        <h3>💕</h3>
                    </div>

                    <div className={styles.cardBaixo}>
                        <span>Atualidade</span>
                        <h3>💕</h3>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Dicas;
