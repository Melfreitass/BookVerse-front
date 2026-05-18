import styles from './Sobre.module.css';
import escritorio from '../../assets/escritorio.png';
import Cards from '../../components/Cards/Cards';

function Sobre() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <p className={styles.subtitulo}>EXCELÊNCIA TÉCNICA</p>

                <h1 className={styles.tituloPrincipal}>
                    Literatura e Tecnologia em <span className={styles.destaque}>Sinergia</span>.
                </h1>

                <p className={styles.texto}>
                    O BookVerse nasceu da união de mentes técnicas focadas em revolucionar o acesso
                    ao conhecimento especializado. Nossa missão é integrar sistemas complexos a uma
                    experiência de aprendizagem editorial de luxo.
                </p>

                <section className={styles.cards}>
                    <div className={styles.cardGrande}>
                        <img src={escritorio} alt="Escritório" className={styles.imagem} />

                        <div className={styles.overlay}>
                            <h2>Nossa Essência</h2>

                            <p>
                                Acreditamos que a educação técnica não deve ser apenas funcional,
                                mas também inspiradora. Cada linha de código e cada desenho mecânico
                                em nossa plataforma é projetado para máxima eficiência e precisão
                                acadêmica.
                            </p>
                        </div>
                    </div>

                    <div className={styles.cardsLado}>
                        <div className={styles.cardPequeno}>
                            <div className={styles.icone}>⌘</div>

                            <h3>Dev. de Sistemas</h3>

                            <span>INTEGRAÇÃO FLUIDA</span>
                        </div>

                        <div className={styles.cardPequeno}>
                            <h3>Alunos Sesi</h3>

                            <span>PRECISÃO ESTRUTURAL</span>
                        </div>
                    </div>
                </section>

                <section className={styles.equipeSection}>
                    <div className={styles.equipeHeader}>
                        <div>
                            <h2 className={styles.equipeTitulo}>Nossa Equipe</h2>

                            <p className={styles.equipeSubtitulo}>
                                Conheça os profissionais responsáveis pelo desenvolvimento da
                                plataforma.
                            </p>
                        </div>

                        <div className={styles.navegacao}>
                            <button
                                className={styles.botaoNav}
                                onClick={() => {
                                    document.getElementById('equipeScroll').scrollBy({
                                        left: -350,
                                        behavior: 'smooth',
                                    });
                                }}>
                                ❮
                            </button>

                            <button
                                className={styles.botaoNav}
                                onClick={() => {
                                    document.getElementById('equipeScroll').scrollBy({
                                        left: 350,
                                        behavior: 'smooth',
                                    });
                                }}>
                                ❯
                            </button>
                        </div>
                    </div>

                    <div id="equipeScroll" className={styles.equipeGrid}>
                        <Cards />
                    </div>
                </section>

                <section className={styles.integracaoSection}>
                    <div className={styles.integracaoCard}>
                        <h2 className={styles.integracaoTitulo}>
                            A Integração Técnica como <span>Pilar</span>
                        </h2>
                        <div className={styles.integracaoLista}>
                            <div className={styles.integracaoItem}>
                                <div className={styles.integracaoIcone}>✣</div>

                                <div>
                                    <h3>Conectividade de Dados</h3>

                                    <p>
                                        Nossos sistemas de backend sincronizam o progresso do aluno
                                        entre teoria e prática de engenharia instantaneamente.
                                    </p>
                                </div>
                            </div>

                            <div className={styles.integracaoItem}>
                                <div className={styles.integracaoIcone}>✦</div>

                                <div>
                                    <h3>Estética Funcional</h3>

                                    <p>
                                        Cada componente da interface segue princípios ergonômicos
                                        para reduzir a carga cognitiva durante estudos intensos.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Sobre;