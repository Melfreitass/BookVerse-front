import React, { useState } from 'react';
import styles from './CardQuestao.module.css'

export default function CardQuestao({
    pergunta,
    alternativas,
    correta,
    explicacao,
    dica
}) {

    const [respostaSelecionada, setRespostaSelecionada] = useState(null);

   const verificarClasse = (id) => {

    if (respostaSelecionada === null) return "";

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
                            className={`${styles.alternativa} ${verificarClasse(alternativa.id)}`}
                            onClick={() => setRespostaSelecionada(alternativa.id)}
                        >

                            <span className={styles.letra}>
                                {alternativa.id}
                            </span>

                            <p>{alternativa.texto}</p>

                        </button>
                    ))}
                </div>
            </section>

            {respostaSelecionada && (
                <section className={styles.explicacao}>

                    <div className={styles.explicacaoTexto}>

                        <h2>Explicação Comentada</h2>

                        <p>{explicacao}</p>

                    </div>

                    <div className={styles.circulo}></div>

                </section>
            )}
        </>
    );
}