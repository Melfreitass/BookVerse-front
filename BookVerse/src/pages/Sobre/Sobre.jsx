import styles from './Sobre.module.css';

function Sobre() {
    return (
        <div className={styles.page}>
            {/* Header */}

            {/* Conteúdo principal */}
            <main className={styles.main}>
                <p className={styles.subtitulo}>EXCELÊNCIA TÉCNICA</p>
                <h1 className={styles.tituloPrincipal}>
                    Literatura e Tecnologia em <span className={styles.destaque}>Sinergia</span>.
                </h1>
                <p className={styles.texto}>
                    O BookVerse nasceu da união de mentes técnicas focadas em revolucionar o
                    acesso ao conhecimento especializado. Nossa missão é integrar sistemas complexos
                    a uma experiência de aprendizagem editorial de luxo.
                </p>
            </main>
        </div>
    );
}

export default Sobre;
