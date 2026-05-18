import styles from "./Simulados.module.css";

import { useEffect, useState } from "react";

import CardQuestao from "../../components/CardQuestao/CardQuestao";

import { buscarSimulados } from "../../services/api";

function Simulados() {

    const [simulados, setSimulados] = useState([]);

    const [questaoAtual, setQuestaoAtual] = useState(0);

    useEffect(() => {

        async function carregarDados() {

            try {

                const simuladosData =
                    await buscarSimulados();

                setSimulados(simuladosData);

            }

            catch (error) {

                console.error(
                    "Erro ao carregar simulados:",
                    error
                );
            }
        }

        carregarDados();

    }, []);

    function proximaQuestao() {

        if (questaoAtual < simulados.length - 1) {

            setQuestaoAtual(questaoAtual + 1);
        }
    }

    function voltarQuestao() {

        if (questaoAtual > 0) {

            setQuestaoAtual(questaoAtual - 1);
        }
    }

    if (simulados.length === 0) {

        return (
            <p className={styles.loading}>
                Carregando...
            </p>
        );
    }

    return (

        <div className={styles.page}>

            <main className={styles.main}>

                <div className={styles.topo}>

                    <div>

                        <span className={styles.tag}>
                            SIMULADO 2024
                        </span>

                        <h1>
                            Questões sobre o livro Vidas
                        </h1>

                    </div>

                    <div className={styles.infoQuestao}>

                        <p>
                            QUESTÃO {questaoAtual + 1}
                            {" "}DE{" "}
                            {simulados.length}
                        </p>

                    </div>

                </div>

                <CardQuestao
                    key={simulados[questaoAtual].id}
                    pergunta={
                        simulados[questaoAtual].pergunta_pt
                    }

                    alternativas={[
                        {
                            id: "A",
                            texto: simulados[questaoAtual].opcao_a
                        },

                        {
                            id: "B",
                            texto: simulados[questaoAtual].opcao_b
                        },

                        {
                            id: "C",
                            texto: simulados[questaoAtual].opcao_c
                        },

                        {
                            id: "D",
                            texto: simulados[questaoAtual].opcao_d
                        }
                    ]}

                    correta={
                        simulados[questaoAtual].resposta_correta
                    }

                    explicacao={
                        simulados[questaoAtual].explicacao_pt
                    }

                    dica={
                        "Leia atentamente o enunciado."
                    }
                />

                <div className={styles.botoes}>

                    <button
                        className={styles.botaoSecundario}
                        onClick={voltarQuestao}
                    >
                        ← ANTERIOR
                    </button>

                    <button
                        className={styles.botaoPrincipal}
                        onClick={proximaQuestao}
                    >
                        PRÓXIMA QUESTÃO →
                    </button>

                </div>

            </main>

        </div>
    );
}

export default Simulados;