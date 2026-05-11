import styles from './Sobre.module.css';
import escritorio from '../../assets/escritorio.png';

function Sobre() {
    const equipe = [
        {
            id: 1,
            nome: 'Melissa Freitas',
            funcao: 'Gerente de Projeto / Dev Frontend',
            descricao:
                'Responsável pela organização do projeto, documentação e desenvolvimento da interface.',
            foto: 'https://i.pravatar.cc/300?img=1',
        },

        {
            id: 2,
            nome: 'Gustavo Alves',
            funcao: 'Desenvolvedor Backend',
            descricao: 'Responsável pela API REST e integração com banco de dados.',
            foto: 'https://i.pravatar.cc/300?img=2',
        },

        {
            id: 3,
            nome: 'Felipe Antunes',
            funcao: 'Desenvolvedor Frontend',
            descricao: 'Responsável pela criação das páginas e componentes do sistema.',
            foto: 'https://i.pravatar.cc/300?img=3',
        },

        {
            id: 4,
            nome: 'Isabela Duetes',
            funcao: 'Equipe de Conteúdo',
            descricao: 'Responsável pela produção de conteúdos literários.',
            foto: 'https://i.pravatar.cc/300?img=4',
        },

        {
            id: 5,
            nome: 'Luana Follegati',
            funcao: 'Equipe de Conteúdo',
            descricao: 'Responsável pela revisão e adaptação dos textos.',
            foto: 'https://i.pravatar.cc/300?img=5',
        },

        {
            id: 6,
            nome: 'Leticia Gomes',
            funcao: 'Equipe de Conteúdo',
            descricao: 'Responsável pelas análises literárias e pesquisas.',
            foto: 'https://i.pravatar.cc/300?img=6',
        },

        {
            id: 7,
            nome: 'Anna Clara Faria',
            funcao: 'Equipe de Conteúdo',
            descricao: 'Responsável pelos conteúdos em inglês.',
            foto: 'https://i.pravatar.cc/300?img=7',
        },

        {
            id: 8,
            nome: 'Heloisa Rodrigues',
            funcao: 'Equipe de Conteúdo',
            descricao: 'Responsável pelas curiosidades e contexto histórico.',
            foto: 'https://i.pravatar.cc/300?img=8',
        },

        {
            id: 9,
            nome: 'Rafael Fahl',
            funcao: 'Equipe de Conteúdo',
            descricao: 'Responsável pela validação pedagógica do conteúdo.',
            foto: 'https://i.pravatar.cc/300?img=9',
        },

        {
            id: 10,
            nome: 'Vitor Barbosa',
            funcao: 'Equipe de Conteúdo',
            descricao: 'Responsável pela organização dos materiais de estudo.',
            foto: 'https://i.pravatar.cc/300?img=10',
        },

        {
            id: 11,
            nome: 'Felipe Jardim',
            funcao: 'Orientador Técnico',
            descricao: 'Responsável pelo acompanhamento técnico do projeto.',
            foto: 'https://i.pravatar.cc/300?img=11',
        },

        {
            id: 12,
            nome: 'Breno Belmonte',
            funcao: 'Orientador Técnico',
            descricao: 'Responsável pelo suporte técnico e revisão do sistema.',
            foto: 'https://i.pravatar.cc/300?img=12',
        },

        {
            id: 13,
            nome: 'Maria Luiza Barbosa',
            funcao: 'Equipe de Conteúdo',
            descricao: 'Responsável pela organização textual e revisão final.',
            foto: 'https://i.pravatar.cc/300?img=13',
        },
    ];

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <p className={styles.subtitulo}>EXCELÊNCIA TÉCNICA</p>

                <h1 className={styles.tituloPrincipal}>
                    Literatura e Tecnologia em <span className={styles.destaque}>Sinergia</span>.
                </h1>

                <p className={styles.texto}>
                    O BookVerse nasceu da união de mentes técnicas focadas em revolucionar o acesso
                    ao conhecimento especializado. Nossa missão é integrar sistemas complexos a uma
                    experiência de aprendizagem editorial de luxo.
                </p>

                <section className={styles.cards}>
                    <div className={styles.cardGrande}>
                        <img src={escritorio} alt="Escritório" className={styles.imagem} />

                        <div className={styles.overlay}>
                            <h2>Nossa Essência</h2>

                            <p>
                                Acreditamos que a educação técnica não deve ser apenas funcional,
                                mas também inspiradora. Cada linha de código e cada desenho mecânico
                                em nossa plataforma é projetado para máxima eficiência e precisão
                                acadêmica.
                            </p>
                        </div>
                    </div>

                    <div className={styles.cardsLado}>
                        <div className={styles.cardPequeno}>
                            <div className={styles.icone}>⌘</div>

                            <h3>Dev. de Sistemas</h3>

                            <span>INTEGRAÇÃO FLUIDA</span>
                        </div>

                        <div className={styles.cardPequeno}>
                            <h3>Alunos Sesi</h3>

                            <span>PRECISÃO ESTRUTURAL</span>
                        </div>
                    </div>
                </section>

                <section className={styles.equipeSection}>
                    <div className={styles.equipeHeader}>
                        <div>
                            <h2 className={styles.equipeTitulo}>Nossa Equipe</h2>

                            <p className={styles.equipeSubtitulo}>
                                Conheça os profissionais responsáveis pelo desenvolvimento da
                                plataforma.
                            </p>
                        </div>

                        <div className={styles.navegacao}>
                            <button
                                className={styles.botaoNav}
                                onClick={() => {
                                    document.getElementById('equipeScroll').scrollBy({
                                        left: -350,
                                        behavior: 'smooth',
                                    });
                                }}>
                                ❮
                            </button>

                            <button
                                className={styles.botaoNav}
                                onClick={() => {
                                    document.getElementById('equipeScroll').scrollBy({
                                        left: 350,
                                        behavior: 'smooth',
                                    });
                                }}>
                                ❯
                            </button>
                        </div>
                    </div>

                    <div id="equipeScroll" className={styles.equipeGrid}>
                        {equipe.map((membro) => (
                            <div key={membro.id} className={styles.cardEquipe}>
                                <div className={styles.cardImagemContainer}>
                                    <img
                                        src={membro.foto}
                                        alt={membro.nome}
                                        className={styles.cardImagem}
                                    />
                                </div>

                                <div className={styles.cardConteudo}>
                                    <span className={styles.cardFuncao}>{membro.funcao}</span>

                                    <h3 className={styles.cardNome}>{membro.nome}</h3>

                                    <p className={styles.cardDescricao}>{membro.descricao}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.integracaoSection}>
                    <div className={styles.integracaoCard}>
                        <h2 className={styles.integracaoTitulo}>
                            A Integração Técnica como <span>Pilar</span>
                        </h2>

                        <div className={styles.integracaoLista}>
                            <div className={styles.integracaoItem}>
                                <div className={styles.integracaoIcone}>✣</div>

                                <div>
                                    <h3>Conectividade de Dados</h3>

                                    <p>
                                        Nossos sistemas de backend sincronizam o progresso do aluno
                                        entre teoria e prática de engenharia instantaneamente.
                                    </p>
                                </div>
                            </div>

                            <div className={styles.integracaoItem}>
                                <div className={styles.integracaoIcone}>✦</div>

                                <div>
                                    <h3>Estética Funcional</h3>

                                    <p>
                                        Cada componente da interface segue princípios ergonômicos
                                        para reduzir a carga cognitiva durante estudos intensos.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Sobre;
