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
        </section>
    );
}

export default Dicas;
