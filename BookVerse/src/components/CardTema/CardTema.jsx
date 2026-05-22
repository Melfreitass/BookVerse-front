import styles from './CardTema.module.css';

function CardTema({ categoria, titulo, conteudo }) {
    return (
        <div className={styles.cardTema}>
            <div className={styles.imagemTema}></div>

            <div className={styles.conteudoTema}>
                <span className={styles.categoriaTema}>{categoria}</span>

                <h3 className={styles.tituloTema}>{titulo}</h3>

                <p className={styles.textoTema}>{conteudo}</p>
            </div>
        </div>
    );
}

export default CardTema;
