import styles from './Simulados.module.css';
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import CardQuestao from '../../components/CardQuestao/CardQuestao';
import { buscarSimulados } from '../../services/api';

function Simulados() {
    const [simulados, setSimulados] = useState([]);
    const [questaoAtual, setQuestaoAtual] = useState(0);
    const [erro, setErro] = useState(false);
    const [respostas, setRespostas] = useState({});
    const [concluido, setConcluido] = useState(false);
    const [questoesPendentes, setQuestoesPendentes] = useState([]);

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

    const responderQuestao = (idQuestao, resposta) => {
        setRespostas((prev) => ({
            ...prev,
            [idQuestao]: resposta,
        }));

        setQuestoesPendentes((prev) => prev.filter((q) => q.id !== idQuestao));
    };

    const totalAcertos = Object.values(respostas).filter((item) => item.acertou).length;

    const totalErros = Object.values(respostas).filter((item) => !item.acertou).length;

    const porcentagemAcerto =
        simulados.length > 0 ? Math.round((totalAcertos / simulados.length) * 100) : 0;

    const tentarFinalizar = () => {
        const pendentes = simulados
            .map((q, index) => ({
                id: q.id,
                index,
            }))
            .filter((q) => !respostas[q.id]);

        if (pendentes.length > 0) {
            setQuestoesPendentes(pendentes);
        } else {
            setConcluido(true);
        }
    };

    if (erro) return <p className={styles.loading}>Erro ao carregar simulados</p>;

    if (!simulados || simulados.length === 0)
        return <p className={styles.loading}>Carregando...</p>;

    if (concluido) {
        return (
            <div className={styles.obraPrincipal}>
                <div className={styles.infoPrincipalResultado}>
                    <div className={styles.tagSimulado}>RESULTADO FINAL</div>

                    <h1 className={styles.tituloResultado}>Simulado Concluído</h1>
                </div>

                <div className={styles.resumoArea}>
                    <div className={styles.resumoCard}>
                        <div className={styles.resumoHeader}>
                            <span className={styles.iconResumo}>📊</span>

                            <h3 className={styles.resumoTitulo}>Estatísticas Gerais</h3>
                        </div>

                        <div className={styles.graficoSection}>
                            <div className={styles.graficoContainer}>
                                <ResponsiveContainer width="100%" height={220}>
                                    <PieChart>
                                        <Pie
                                            data={[
                                                {
                                                    name: 'Acertos',
                                                    value: totalAcertos,
                                                },
                                                {
                                                    name: 'Erros',
                                                    value: totalErros,
                                                },
                                            ]}
                                            innerRadius={65}
                                            outerRadius={85}
                                            stroke="none"
                                            paddingAngle={8}
                                            dataKey="value"
                                            startAngle={90}
                                            endAngle={-270}>
                                            <Cell fill="#EF6855" />

                                            <Cell fill="rgba(255,255,255,0.1)" />
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>

                                <div className={styles.centroGrafico}>
                                    <span className={styles.porcentagemTexto}>
                                        {porcentagemAcerto}%
                                    </span>

                                </div>
                            </div>
                        </div>

                        <div className={styles.infoLivro}>
                            <div className={styles.infoBox}>
                                <span>TOTAL</span>

                                <p>{simulados.length} Questões</p>
                            </div>

                            <div className={styles.infoBox}>
                                <span>ACERTOS</span>

                                <p style={{ color: '#EF6855' }}>{totalAcertos}</p>
                            </div>
                        </div>

                        <button
                            className={styles.botaoRefazer}
                            onClick={() => window.location.reload()}>
                            RECOMEÇAR JORNADA
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.obraPrincipal}>
            <div className={styles.infoPrincipal}>
                <div className={styles.infoEsquerda}>
                    <div className={styles.tagSimulado}> SIMULADO </div>

                    <h1 className={styles.titulo}>Questões sobre o livro Vidas Secas.</h1>
                </div>

                <div className={styles.infoDireita}>
                    <span className={styles.questaoTexto}>
                        QUESTÃO {questaoAtual + 1} DE {simulados.length}
                    </span>

                </div>
            </div>

            <div className={styles.resumoArea}>
                {questoesPendentes.length > 0 && (
                    <div className={styles.alertaPendentes}>
                        <p>⚠️ Resolva antes de finalizar:</p>

                        <div className={styles.listaPendentes}>
                            {questoesPendentes.map((q) => (
                                <button
                                    key={q.id}
                                    className={styles.botaoVoltarPendente}
                                    onClick={() => {
                                        setQuestaoAtual(q.index);
                                        setQuestoesPendentes([]);
                                    }}>
                                    Q{q.index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <div
                    className={styles.resumoCard}
                    style={{
                        width: '100%',
                        gap: '1rem',
                    }}>
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
                        dica={'Analise as variáveis com cuidado.'}
                        respostaSelecionada={respostas[simulados[questaoAtual].id]?.resposta}
                        aoResponder={(resposta) =>
                            responderQuestao(simulados[questaoAtual].id, {
                                resposta,
                                acertou:
                                    resposta ===
                                    simulados[questaoAtual].resposta_correta.toUpperCase(),
                            })
                        }
                    />

                    <div className={styles.botoesNavegacao}>
                        <button
                            className={styles.btnSecundario}
                            onClick={() => questaoAtual > 0 && setQuestaoAtual(questaoAtual - 1)}>
                            ←  ANTERIOR
                        </button>

                        <button
                            className={styles.btnPrincipal}
                            onClick={() =>
                                questaoAtual === simulados.length - 1
                                    ? tentarFinalizar()
                                    : setQuestaoAtual(questaoAtual + 1)
                            }>
                            {questaoAtual === simulados.length - 1
                                ? 'FINALIZAR'
                                : 'PRÓXIMA QUESTÃO '}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Simulados;
