import styles from "./CardPersonagem.module.css"

function CardPersonagem({ personagem, idioma }) {
    return (
        <div className={styles.card}>
            <img
            src={personagem.imagem_url}
            alt={personagem.nome}
            className={styles.imagem}
        />

        <div className={styles.conteudo}>
        <h3 className={styles.nome}>
            {personagem.nome}
        </h3>

        <p className={styles.papel}>
            {personagem.papel}
        </p>

        <p className={styles.descricao}>
            {
                idioma === "pt"
                ? personagem.descricao_pt
                : personagem.descricao_en
            }
        </p>
        </div>

        </div>
    )
}

export default CardPersonagem;