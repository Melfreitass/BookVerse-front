import styles from './Dicas.module.css';
import livro from '../../assets/livro.png';

function Dicas() {
    const curiosidades = [
        {
            id: 1,
            categoria: 'curiosidade',
            titulo: 'Origem de Vidas Secas',
            conteudo:
                'A obra Vidas Secas foi publicada em 1938 e retrata a realidade do sertão nordestino durante os períodos de seca.',
            imagem: 'https://images.unsplash.com/photo-1508780709619-79562169bc64',
        },

        {
            id: 2,
            categoria: 'curiosidade',
            titulo: 'A importância da Baleia',
            conteudo:
                'A cachorra Baleia é considerada uma das personagens mais marcantes da literatura brasileira.',
            imagem: 'https://images.unsplash.com/photo-1517849845537-4d257902454a',
        },

        {
            id: 3,
            categoria: 'dica',
            titulo: 'Como interpretar a obra',
            conteudo:
                'Observe os temas sociais presentes no livro, como pobreza, desigualdade e desumanização.',
            imagem: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
        },

        {
            id: 4,
            categoria: 'dica',
            titulo: 'Foque nos personagens',
            conteudo:
                'Entender o comportamento de Fabiano, Sinhá Vitória e Baleia ajuda muito na interpretação das questões.',
            imagem: 'https://images.unsplash.com/photo-1513258496099-48168024aec0',
        },

        {
            id: 5,
            categoria: 'temaRedacao',
            titulo: 'Desigualdade social no Brasil',
            conteudo:
                'A obra pode ser relacionada ao debate sobre pobreza, exclusão social e falta de oportunidades.',
            imagem: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c',
        },

        {
            id: 6,
            categoria: 'temaRedacao',
            titulo: 'Impactos da seca no Nordeste',
            conteudo:
                'O livro apresenta consequências sociais e econômicas causadas pela seca e pela migração forçada.',
            imagem: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
        },

        {
            id: 7,
            categoria: 'curiosidade',
            titulo: 'Linguagem da obra',
            conteudo:
                'Graciliano Ramos utilizou uma linguagem objetiva e direta para reforçar a dureza da realidade retratada.',
            imagem: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353',
        },

        {
            id: 8,
            categoria: 'dica',
            titulo: 'Relacione com atualidades',
            conteudo: 'Vestibulares costumam conectar temas da obra com problemas sociais atuais.',
            imagem: 'https://images.unsplash.com/photo-1494172961521-33799ddd43a5',
        },
    ];

    const temasRedacao = curiosidades.filter((item) => item.categoria === 'temaRedacao');

    const curiosidadesLista = curiosidades.filter((item) => item.categoria === 'curiosidade');

    return (
        <section className={styles.container}>
            <main className={styles.home}>
                <div className={styles.content}>
                    <span className={styles.tag}>Área do Vestibulando</span>

                    <h1>O Caminho para a Nota Máxima.</h1>

                    <p>
                        Acesso exclusivo aos temas mais prováveis, análises críticas da nossa equipe
                        pedagógica e ferramentas de elite para sua aprovação.
                    </p>
                </div>

                <div className={styles.img}>
                    <img src={livro} alt="Livro" />
                </div>
            </main>

            <section className={styles.cardsSection}>
                <div className={styles.info}>
                    <h3>Interpretação da Equipe</h3>

                    <p>Análises detalhadas sobre as tendências dos grandes vestibulares.</p>
                </div>

                <div className={styles.cards}>
                    <div className={styles.cardGrande}>
                        <span>DICAS</span>

                        <h2>💕</h2>

                        <button>Ler Análise</button>
                    </div>

                    <div className={styles.cardPequeno}>
                        <h3>💕</h3>
                    </div>

                    <div className={styles.cardBaixo}>
                        <span>Atualidade</span>

                        <h3>💕</h3>
                    </div>
                </div>
            </section>

            <section className={styles.temasSection}>
                <div className={styles.titulo}>
                    <h2>Temas de Redação</h2>

                    <p>Propostas inéditas, repertórios e argumentos para elevar sua redação.</p>
                </div>

                <div className={styles.temasGrid}>
                    {temasRedacao.map((item) => (
                        <div className={styles.temaCard} key={item.id}>
                            <img src={item.imagem} alt={item.titulo} />

                            <div className={styles.temaContent}>
                                <span>TEMA</span>

                                <h3>{item.titulo}</h3>

                                <p>{item.conteudo}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.curiosidadesSection}>
                <div className={styles.tituloCentro}>
                    <h2>Curiosidades Literárias</h2>

                    <p>Explore informações e detalhes sobre a obra Vidas Secas.</p>
                </div>

                <div className={styles.curiosidadesGrid}>
                    {curiosidadesLista.map((item) => (
                        <div className={styles.curiosidadeCard} key={item.id}>
                            <img src={item.imagem} alt={item.titulo} />

                            <div className={styles.curiosidadeContent}>
                                <span>{item.categoria}</span>

                                <h3>{item.titulo}</h3>

                                <p>{item.conteudo}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
}

export default Dicas;
