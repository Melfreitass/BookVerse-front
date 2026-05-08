import styles from './Sobre.module.css';
import escritorio from '../../assets/escritorio.png';

function Sobre() {
    return (
        <div className={styles.page}>
            {/* Header */}

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
                </section>
            </main>
        </div>
    );
}

export default Sobre;
