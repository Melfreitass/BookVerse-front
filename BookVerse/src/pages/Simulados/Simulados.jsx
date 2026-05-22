import styles from './Simulados.module.css';

import { useEffect, useState } from 'react';

import CardQuestao from '../../components/CardQuestao/CardQuestao';

import { buscarSimulados } from '../../services/api';

function Simulados() {
    const [simulados, setSimulados] = useState([]);

    const [questaoAtual, setQuestaoAtual] = useState(0);

    const [erro, setErro] = useState(false);

    const [respostas, setRespostas] = useState({});

    useEffect(() => {
        async function carregarDados() {
            try {
                const simuladosData = await buscarSimulados();

                setSimulados(simuladosData);
            } catch (error) {
                console.error('Erro ao carregar simulados:', error);

                setErro(true);
            }
        }

        carregarDados();
    }, []);

    function responderQuestao(idQuestao, resposta) {
        setRespostas((prev) => ({
            ...prev,

            [idQuestao]: resposta,
        }));
    }

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

    const totalAcertos = Object.values(respostas).filter((item) => item.acertou).length;

    const totalErros = Object.values(respostas).filter((item) => !item.acertou).length;

    if (erro) {
        return <p className={styles.loading}>Erro ao carregar simulados</p>;
    }

    if (!simulados || simulados.length === 0) {
        return <p className={styles.loading}>Carregando...</p>;
    }

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.topo}>
                    <div>
                        <span className={styles.tag}>SIMULADO ENEM 2024</span>

                        <h1>Ciências da Natureza e suas Tecnologias</h1>
                    </div>

                    <div className={styles.infoQuestao}>
                        <p>
                            QUESTÃO {questaoAtual + 1} DE {simulados.length}
                        </p>
                    </div>
                </div>

                <CardQuestao
                    pergunta={simulados[questaoAtual].pergunta_pt}
                    alternativas={[
                        {
                            id: 'A',
                            texto: simulados[questaoAtual].opcao_a,
                        },

                        {
                            id: 'B',
                            texto: simulados[questaoAtual].opcao_b,
                        },

                        {
                            id: 'C',
                            texto: simulados[questaoAtual].opcao_c,
                        },

                        {
                            id: 'D',
                            texto: simulados[questaoAtual].opcao_d,
                        },
                    ]}
                    correta={simulados[questaoAtual].resposta_correta}
                    explicacao={simulados[questaoAtual].explicacao_pt}
                    dica={'Leia atentamente o enunciado.'}
                    respostaSelecionada={respostas[simulados[questaoAtual].id]?.resposta}
                    aoResponder={(resposta) =>
                        responderQuestao(
                            simulados[questaoAtual].id,

                            {
                                resposta,

                                acertou:
                                    resposta ===
                                    simulados[questaoAtual].resposta_correta.toUpperCase(),
                            },
                        )
                    }
                />

                <div className={styles.botoes}>
                    <button className={styles.botaoSecundario} onClick={voltarQuestao}>
                        ← ANTERIOR
                    </button>

                    <button
                        className={styles.botaoPrincipal}
                        onClick={() => {
                            const respostaAtual = respostas[simulados[questaoAtual].id];

                            if (!respostaAtual) {
                                alert('⚠️ Responda a questão antes de continuar.');

                                return;
                            }

                            if (questaoAtual === simulados.length - 1) {
                                alert(
                                    `Simulado concluído!

                                    Acertos: ${totalAcertos}
                                    Erros: ${totalErros}`,
                                );

                                return;
                            }

                            proximaQuestao();
                        }}>
                        PRÓXIMA QUESTÃO →
                    </button>
                </div>

                <div className={styles.resultado}>
                    <p>Acertos: {totalAcertos}</p>

                    <p>Erros: {totalErros}</p>
                </div>
            </main>
        </div>
    );
}

export default Simulados;
