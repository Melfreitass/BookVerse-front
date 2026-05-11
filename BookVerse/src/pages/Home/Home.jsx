import styles from './Home.module.css';
import { NavLink } from 'react-router-dom';
import { BadgeCheck, BookOpenCheck, BrainCog, Dices } from 'lucide-react';

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
                            className={styles.botaoLivro}>
                            Ver livro
                        </NavLink>
                        <NavLink
                            to="/biblioteca"
                            className={styles.botaoBiblioteca}>
                            Ver Biblioteca
                        </NavLink>
                    </div>
                </div>

                <div className={styles.foto}>❤️</div>

                <div className={styles.foto}></div>
            </section>

            <section className={styles.infos}>
                <div  className={`${styles.garantia} ${styles.gabaritado}`}>
                    <div className={styles.iconCircle}>
                        <BadgeCheck className={styles.iconGarantia} />
                    </div>
                    <h2>100% Gabaritado</h2>
                    <p>Nossa metodologia garantiu 98% de acerto em literatura no última vestibular</p>
                </div>

                 <div  className={styles.garantia}>
                    <div className={styles.iconCircle}>
                        <BrainCog className={styles.iconGarantia} />
                    </div>
                    <h2>Simulados Adaptativos</h2>
                    <p>Simulados para treinar seus conhecimentos, com explicação de resposta correta.</p>
                </div>

                <div  className={`${styles.garantia} ${styles.biblioteca}`}>
                    <div className={styles.iconCircle}>
                        <BookOpenCheck className={styles.iconGarantia} />
                    </div>
                    <h2>Biblioteca Digital Completa</h2>
                    <p>Acesso ilimitado às obras obrigatórias com notas marginais.</p>
                </div>

                <div  className={styles.garantia}>
                    <div className={styles.iconCircle}>
                        <Dices className={styles.iconGarantia} />
                    </div>
                    <h2>Dicas de Especialistas</h2>
                    <p>Vídeo-aulas curtas com os pontos mais cobrados nas provas da FUVEST e UNICAMP.</p>
                </div>
            </section>
        </home>
    );
}

export default Home;
