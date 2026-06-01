import styles from './Simulados.module.css';
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import CardQuestao from '../../components/CardQuestao/CardQuestao';
import { buscarSimulados } from '../../services/api';

function Simulados({ idioma }) {
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
    if (respostas[idQuestao]) return;

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

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

        document.body.classList.add('shake');

        setTimeout(() => {
            document.body.classList.remove('shake');
        }, 500);

        return;
    }

    setConcluido(true);
};

    if (erro)
        return (
            <p className={styles.loading}>
                {idioma === 'pt' ? 'Erro ao carregar simulados' : 'Error loading quizzes'}
            </p>
        );

    if (!simulados || simulados.length === 0)
        return <p className={styles.loading}>{idioma === 'pt' ? 'Carregando...' : 'Loading...'}</p>;

    if (concluido) {
        return (
            <div className={styles.obraPrincipal}>
                <div className={styles.infoPrincipalResultado}>
                    <div className={styles.tagSimulado}>
                        {idioma === 'pt' ? 'RESULTADO FINAL' : 'FINAL RESULT'}
                    </div>

                    <h1 className={styles.tituloResultado}>
                        {idioma === 'pt' ? 'Simulado Concluído' : 'Quiz Completed'}
                    </h1>
                </div>

                <div className={styles.resumoArea}>
                    <div className={styles.resumoCard}>
                        <div className={styles.resumoHeader}>
                            <span className={styles.iconResumo}>📊</span>

                            <h3 className={styles.resumoTitulo}>
                                {idioma === 'pt' ? 'Estatísticas Gerais' : 'General Statistics'}
                            </h3>
                        </div>

                        <div className={styles.graficoSection}>
                            <div className={styles.graficoContainer}>
                                <ResponsiveContainer width="100%" height={220}>
                                    <PieChart>
                                        <Pie
                                            data={[
                                                {
                                                    name: idioma === 'pt' ? 'Acertos' : 'Correct',
                                                    value: totalAcertos,
                                                },
                                                {
                                                    name: idioma === 'pt' ? 'Erros' : 'Wrong',
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
                                <span>{idioma === 'pt' ? 'TOTAL' : 'TOTAL'}</span>

                                <p>
                                    {simulados.length} {idioma === 'pt' ? 'Questões' : 'Questions'}
                                </p>
                            </div>

                            <div className={styles.infoBox}>
                                <span>{idioma === 'pt' ? 'ACERTOS' : 'CORRECT'}</span>

                                <p style={{ color: '#EF6855' }}>{totalAcertos}</p>
                            </div>
                        </div>

                        <button
                            className={styles.botaoRefazer}
                            onClick={() => window.location.reload()}>
                            {idioma === 'pt' ? 'RECOMEÇAR JORNADA' : 'RESTART JOURNEY'}
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
                    <div className={styles.tagSimulado}>
                        {idioma === 'pt' ? 'SIMULADO' : 'QUIZ'}
                    </div>

                    <h1 className={styles.titulo}>
                        {idioma === 'pt'
                            ? 'Questões sobre o livro Vidas Secas'
                            : 'Questions about the book Barren Lives'}
                    </h1>
                </div>

                <div className={styles.infoDireita}>
                    <span className={styles.questaoTexto}>
                        {idioma === 'pt'
                            ? `QUESTÃO ${questaoAtual + 1} DE ${simulados.length}`
                            : `QUESTION ${questaoAtual + 1} OF ${simulados.length}`}
                    </span>
                </div>
            </div>

            <div className={styles.resumoArea}>
                {questoesPendentes.length > 0 && (
                    <div className={styles.alertaPendentes}>
                        <p>
                            ⚠️{' '}
                            {idioma === 'pt'
                                ? 'Resolva antes de finalizar:'
                                : 'Answer before finishing:'}
                        </p>

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
                        idioma={idioma}
                        pergunta={
                            idioma === 'pt'
                                ? simulados[questaoAtual].pergunta_pt
                                : simulados[questaoAtual].pergunta_en
                        }
                        alternativas={[
                            {
                                id: 'A',
                                texto:
                                    idioma === 'pt'
                                        ? simulados[questaoAtual].opcao_a
                                        : simulados[questaoAtual].opcao_a_en,
                            },
                            {
                                id: 'B',
                                texto:
                                    idioma === 'pt'
                                        ? simulados[questaoAtual].opcao_b
                                        : simulados[questaoAtual].opcao_b_en,
                            },
                            {
                                id: 'C',
                                texto:
                                    idioma === 'pt'
                                        ? simulados[questaoAtual].opcao_c
                                        : simulados[questaoAtual].opcao_c_en,
                            },
                            {
                                id: 'D',
                                texto:
                                    idioma === 'pt'
                                        ? simulados[questaoAtual].opcao_d
                                        : simulados[questaoAtual].opcao_d_en,
                            },
                        ]}
                        correta={simulados[questaoAtual].resposta_correta}
                        explicacao={
                            idioma === 'pt'
                                ? simulados[questaoAtual].explicacao_pt
                                : simulados[questaoAtual].explicacao_en
                        }
                        dica={
                            idioma === 'pt'
                                ? 'Analise as variáveis com cuidado.'
                                : 'Analyze the variables carefully.'
                        }
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
                            {idioma === 'pt' ? '← ANTERIOR' : '← PREVIOUS'}
                        </button>

                        <button
                            className={styles.btnPrincipal}
                            onClick={() =>
                                questaoAtual === simulados.length - 1
                                    ? tentarFinalizar()
                                    : setQuestaoAtual(questaoAtual + 1)
                            }>
                            {questaoAtual === simulados.length - 1
                                ? idioma === 'pt'
                                    ? 'FINALIZAR'
                                    : 'FINISH'
                                : idioma === 'pt'
                                  ? 'PRÓXIMA QUESTÃO'
                                  : 'NEXT QUESTION'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Simulados;
