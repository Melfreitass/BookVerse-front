import styles from './CardDicas.module.css';

function CardDicas({ categoria, titulo, conteudo }) {
    return (
        <div className={styles.card}>
            <span className={styles.categoria}>{categoria}</span>

            <h3 className={styles.titulo}>{titulo}</h3>

            <p className={styles.conteudo}>{conteudo}</p>
        </div>
    );
}

export default CardDicas;
