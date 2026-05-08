import styles from './Home.module.css';
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <home className={styles.home}>
            <section className={styles.inicio}>
                <div className={styles.info}>
                    <div className={styles.texto}>
                        <p className={styles.info1}>EDUCAÇÃO LITERÁRIA DE ELITE</p>
                        <p className={styles.titulo}>Domine a Literatura do Vestibular</p>
                        <p className={styles.descricao}>
                            Uma imersão tecnológica nas obras clássicas. Combine a profundidade da
                            leitura tradicional com o poder da análise de dados e simulados
                            inteligentes.
                        </p>
                    </div>

                    <div className={styles.botao}>
                        <NavLink
                            to="/obraPrincipal"
                            className={({ isActive }) =>
                                isActive ? `${styles.anav} ${styles.active}` : styles.anav
                            }>
                            Ver livro
                        </NavLink>
                        <NavLink
                            to="/biblioteca"
                            className={({ isActive }) =>
                                isActive ? `${styles.anav} ${styles.active}` : styles.anav
                            }>
                            Ver Biblioteca
                        </NavLink>
                    </div>
                </div>

                <div className={styles.foto}>❤️</div>

                <div className={styles.foto}></div>
            </section>
        </home>
    );
}

export default Home;
