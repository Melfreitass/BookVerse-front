import styles from './CardQuestao.module.css'

export default function CardQuestao({

    pergunta,
    alternativas,
    correta,
    explicacao,
    dica,
    respostaSelecionada,
    aoResponder

}) {

    const verificarClasse = (id) => {

        if (respostaSelecionada === null ||
            respostaSelecionada === undefined) {

            return "";
        }

        if (id === correta.toUpperCase()) {

            return styles.correta;
        }

        if (
            id === respostaSelecionada &&
            id !== correta.toUpperCase()
        ) {

            return styles.errada;
        }

        return "";
    };

    return (
        <>

            <section className={styles.cardQuestao}>

                <p className={styles.enunciado}>
                    {pergunta}
                </p>

                <div className={styles.alternativas}>

                    {alternativas.map((alternativa) => (

                        <button
                            key={alternativa.id}

                            className={`${styles.alternativa}
                            ${verificarClasse(alternativa.id)}`}

                            onClick={() =>
                                aoResponder(alternativa.id)
                            }
                        >

                            <span className={styles.letra}>
                                {alternativa.id}
                            </span>

                            <p>
                                {alternativa.texto}
                            </p>

                        </button>

                    ))}

                </div>

            </section>

            {respostaSelecionada && (

                <section className={styles.explicacao}>

                    <div className={styles.explicacaoTexto}>

                        <h2>
                            Explicação Comentada
                        </h2>

                        <p>
                            {explicacao}
                        </p>

                        <div className={styles.dica}>

                            <strong>
                                DICA DE OURO
                            </strong>

                            <span>
                                {dica}
                            </span>

                        </div>

                    </div>

                    <div className={styles.circulo}></div>

                </section>
            )}
        </>
    );
}